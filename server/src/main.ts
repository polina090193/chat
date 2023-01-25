import * as Pusher from 'pusher'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as cors from 'cors'
import * as keys from '@chat/keys'
import { Chat, ChatWithID } from '@chat/types'
import { v4 as uuidv4 } from 'uuid'

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pusher = new Pusher({
  ...keys,
  encrypted: true
});

const messages: ChatWithID[] = []

app.set('PORT', 5000);

app.post('/message', (req, res) => {
  const message: Chat = req.body;
  const messageWithID = { id: uuidv4(), ...message }
  pusher.trigger('chat', 'message', message);
  messages.push(messageWithID)
  res.send({ status: 200, text: 'Message is sent' })
});

app.get('/messages', (req, res) => {
  res.send({ status: 'success', messages })
});

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))
