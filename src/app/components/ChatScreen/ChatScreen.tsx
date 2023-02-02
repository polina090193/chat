import { useUserInfoContext } from '../../app';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import * as keys from '@chat/keys'
import { Message, MessageWithID } from '@chat/types'
import Button from '../Button/Button';

const StyledChatScreen = styled.div`
  // Your style here
`;

export function ChatScreen() {

  const userInfo = useUserInfoContext();
  const [messages, setMessages] = useState([] as MessageWithID[])
  const [msgText, setMsgText] = useState('')

  const getMessages = () => {
    axios.get('http://localhost:3333/api/messages')
      .then(res => {
          /* TODO if (res.data.status === 'success')  */setMessages(res.data)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getMessages()

    const pusher = new Pusher(keys.key, {
      cluster: keys.cluster,
    });

    const channel = pusher.subscribe('chat');

    channel.bind('message', function (data: Message) {
      getMessages()
    });

    return () => {
      pusher.unsubscribe('chat')
    };
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => setMsgText(e.target.value)

  const handleKeyDownMessage = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && msgText.length) sendMessage()
  }
  const clickSendMessageBtn = (): void => sendMessage()

  const sendMessage = () => {
    const payload = {
      username: userInfo.username,
      message: msgText
    };
    axios.post('http://localhost:3333/api/messages', payload)
      .catch(e => console.log(e))

    setMsgText('')
  }

  const handleLogout = (e: React.MouseEvent): void => {
    userInfo.logout()
  }

  return (
    <StyledChatScreen data-testid="chat-screen" >
      <h2>Hello, {userInfo.username}</h2>
      <Button buttonText="Logout" onClickAction={handleLogout} />
      <div>
        {messages.map(chat => <div key={chat.id}><strong>{chat.username}</strong>: {chat.message}</div>)}
      </div>
      <input
        type="text"
        value={msgText}
        autoFocus
        placeholder="chat here..."
        className="form-control"
        onChange={handleTextChange}
        onKeyDown={handleKeyDownMessage}
      />
      <Button buttonText="Send" onClickAction={clickSendMessageBtn} />

    </StyledChatScreen>
  );
}

export default ChatScreen;
