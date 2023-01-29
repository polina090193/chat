// import * as msg from '@chat/types'

// @Injectable()
// export class MessagesService {
//   getData(): { message: msg.MessageWithID } {
//     return { message: 'Welcome to nest-api!' };
//   }
// }

// export default MessagesService
import Pusher from 'pusher'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessageWithID }  from './message.interface';
import SendMessageDto from './dto/sendMessage.dto';
import { appId, key, secret, cluster } from '@chat/keys'
import { v4 as uuidv4 } from 'uuid'

const pusher = new Pusher({
  appId,
  key,
  secret,
  cluster,
  encrypted: true
});

@Injectable()
export default class MessagesService {
  private messages: MessageWithID[] = [];

  getAllMessages() {
    return this.messages;
  }

  sendMessage(/* destUserID: number,  */message: SendMessageDto) {
    // const destUserIndex = this.users.findIndex((user) => Number(user.id) === destUserID);
    // if (messageIndex > -1) {
      const messageWithID = { id: uuidv4(), ...message }
      pusher.trigger('chat', 'message', message);
      this.messages.push(messageWithID)
      return message;
    // }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
