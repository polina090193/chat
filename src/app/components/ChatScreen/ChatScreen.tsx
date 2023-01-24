import { useUserInfoContext } from '../../app';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
// import { INSTANCE_ID } from '@chat/keys'

const StyledChatScreen = styled.div`
  // Your style here
`;

export function ChatScreen(/* { text, handleTextChange } */) {

  const userInfo = useUserInfoContext();
  const [user, setUser] = useState({})
  const [text, setText] = useState('')

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
      <input
        type="text"
        value={text}
        placeholder="chat here..."
        className="form-control"
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
    </StyledChatScreen>
  );
}

export default ChatScreen;
