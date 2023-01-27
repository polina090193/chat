import { FormEvent, useState, ChangeEvent } from 'react';
import { useUserInfoContext } from '../../app';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
  // Your style here
`;


export function LoginForm() {

  const userInfo = useUserInfoContext();
  const [username, setUsername] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) =>  {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const username = target.username.value
    if (username) {
      userInfo.submitName(target.username.value)
    } else {
      alert('First enter your name')
    }
  }

  return (
    <StyledLoginForm data-testid="login-form">
      <h2>What is your username?</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="Enter name"
          data-testid="login-username"
          onChange={onChange}
        />
        <input type="submit" data-testid="login-submit" value="Login" />
      </form>
    </StyledLoginForm>
  );
}

export default LoginForm;
