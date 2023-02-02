import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ChatScreen from './components/ChatScreen/ChatScreen';
import LoginForm from './components/LoginForm/LoginForm';

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  margin: auto;
  max-width: 300px;
  
  @media screen and (max-width: 320px) {
    max-width: unset;
  }
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

  const logout = () => {
    // setUsername('')
    setPage('login')
  }

  return (
    <UserInfoContext.Provider value={{ username, submitName, logout }}>
      <StyledApp>
        {page === 'login' ? <LoginForm /> : page === 'chat' ? <ChatScreen /> : null}
      </StyledApp>
    </UserInfoContext.Provider>
  );
}

export default App;
