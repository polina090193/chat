import { useUserInfoContext } from '../../app';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import * as keys from '@chat/keys'
import { Message, MessageWithID } from '@chat/types'

const StyledChatScreen = styled.div`
  // Your style here
`;

export function ChatScreen() {

  const userInfo = useUserInfoContext();
  const [messages, setMessages] = useState([] as MessageWithID[])
  const [text, setText] = useState('')

  const getMessages = () => {
    axios.get('http://localhost:5000/messages')
        .then(res => {
          if (res.data.status === 'success') setMessages(res.data.messages)
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

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {

    if (e.key === 'Enter' && text.length) {

      const payload = {
        username: userInfo.username,
        message: text
      };
      axios.post('http://localhost:5000/message', payload)
        .catch(e => console.log(e))

      setText('')
    }
  }

  const handleLogout = (e: React.MouseEvent): void => {
    userInfo.logout()
  }

  return (
    <StyledChatScreen data-testid="chat-screen" >
      <h2>Hello, {userInfo.username}</h2>
      <button type="button" onClick={handleLogout}>Logout</button>
      <div>
        { messages.map(chat => <div key={chat.id}><strong>{chat.username}</strong>: {chat.message}</div>) }
      </div>
      <input
        type="text"
        value={text}
        autoFocus
        placeholder="chat here..."
        className="form-control"
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
    </StyledChatScreen>
  );
}

export default ChatScreen;
