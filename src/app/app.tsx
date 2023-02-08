import { createContext, useContext, useState } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import blueTheme from '../themes/blue-theme';
import greenTheme from '../themes/green-theme';
import Button from './components/Button/Button';
import ChatScreen from './components/ChatScreen/ChatScreen';
import LoginForm from './components/LoginForm/LoginForm';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: auto;
  max-width: 300px;
  box-sizing: border-box;
  
  @media screen and (max-width: 320px) {
    max-width: unset;
  }

  * {
    box-sizing: border-box;
  }
`;

type ThemeWithName = DefaultTheme & {
  name: string,
}

const themes = {
  blue: { ...blueTheme, name: 'blue' },
  green: { ...greenTheme, name: 'green' },
}

export const UserInfoContext = createContext({} as UserInfo);
export const useUserInfoContext = () => useContext(UserInfoContext);

export function App() {

  const [username, setUsername] = useState('user')
  const [page, setPage] = useState('login')
  const [theme, setTheme] = useState<ThemeWithName>(themes.blue)

  const submitName = (username: string) => {
    setUsername(username)
    setPage('chat')
  }

  const themeForSwitch: ThemeWithName = theme === themes.blue ? themes.green : themes.blue

  const logout = () => {
    setPage('login')
  }

  const onClickThemeButton = () => {
    setTheme(themeForSwitch)
  }

  return (
    <UserInfoContext.Provider value={{ username, submitName, logout }}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Button buttonText={`Change theme from ${theme.name} to ${themeForSwitch.name}`} onClickAction={onClickThemeButton} />
          {page === 'login' ? <LoginForm /> : page === 'chat' ? <ChatScreen /> : null}
        </StyledApp>
      </ThemeProvider>
    </UserInfoContext.Provider>
  );
}

export default App;
