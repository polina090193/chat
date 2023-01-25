import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ChatScreen from './components/ChatScreen/ChatScreen';
import LoginForm from './components/LoginForm/LoginForm';

const StyledApp = styled.div`
  // Your style here
`;

export const UserInfoContext = createContext({} as UserInfo);

export const useUserInfoContext = () => useContext(UserInfoContext);

export function App() {

  const [username, setUsername] = useState('user')
  const [page, setPage] = useState('login')

  const submitName = (username: string) => {
    setUsername(username)
    setPage('chat')
  }

  return (
    <UserInfoContext.Provider value={{ username, submitName }}>
      <StyledApp>
        {page === 'login' ? <LoginForm /> : page === 'chat' ? <ChatScreen /> : null}
      </StyledApp>
    </UserInfoContext.Provider>
  );
}

export default App;
