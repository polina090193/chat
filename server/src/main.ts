import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as Chatkit from '@pusher/chatkit-server'
import { INSTANCE_ID, PRIMARY_KEY } from '@chat/keys'

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: INSTANCE_ID,
  key: PRIMARY_KEY,
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})

app.post('/authenticate', (req, res) => {
  const userID = req.query.user_id as string
  const authData = chatkit.authenticate({ userId: userID })
  res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT)