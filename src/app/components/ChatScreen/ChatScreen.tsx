import { useUserInfoContext } from '../../app';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import * as keys from '@chat/keys'
import uuid from 'react-uuid'

const StyledChatScreen = styled.div`
  // Your style here
`;

export function ChatScreen(/* { text, handleTextChange } */) {

  const userInfo = useUserInfoContext();
  const [chats, setChats] = useState([] as ChatWithID[])
  const [text, setText] = useState('')

  useEffect(() => {
    const pusher = new Pusher(keys.key, {
      cluster: keys.cluster,
    });

    const channel = pusher.subscribe("chat");

    channel.bind("message", function (data: Chat) {
      setChats((prevState) => ([
        ...prevState,
        { id: uuid(), username: data.username, message: data.message },
      ]));
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter' && text.length) {

      const payload = {
        username: userInfo.username,
        message: text
      };
      axios.post('http://localhost:5000/message', payload).catch(e => console.log(e))

      setText('')
    }
  }

  return (
    <StyledChatScreen data-testid="chat-screen" >
      <h2>This is a chat screen.</h2>
      <h2>Your username is {userInfo.username}</h2>
      <div>
        { chats.map(chat => <div key={chat.id}><strong>{chat.username}</strong>: {chat.message}</div>) }
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
