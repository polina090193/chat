import * as Pusher from 'pusher'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as cors from 'cors'
import * as keys from '@chat/keys'

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
  ...keys,
  encrypted: true
});
app.set('PORT', 5000);

app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))
