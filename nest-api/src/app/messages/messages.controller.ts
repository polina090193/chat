import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import MessagesService from './messages.service';
import SendMessageDto from './dto/sendMessage.dto';

@Controller('messages')
export default class PostsController {
  constructor(
    private readonly messagesService: MessagesService,
  ) {}

  @Get()
  getAllMessages() {
    return this.messagesService.getAllMessages();
  }

  @Post()
  async sendMessage(@Body() /* destUserID: string,  */message: SendMessageDto) {
    return this.messagesService.sendMessage(/* Number(destUserID),  */message);
  }
}
