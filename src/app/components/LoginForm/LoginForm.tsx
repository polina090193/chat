import { FormEvent, useState, ChangeEvent } from 'react';
import { useUserInfoContext } from '../../app';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Input/Input';

const StyledLoginForm = styled.div`
  // Your style here
`;

const LoginFormInput = styled(Input)`
  margin-bottom: 10px;
`;


export function LoginForm() {

  const userInfo = useUserInfoContext();
  const [username, setUsername] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onFormSubmit = () =>  {
    if (username) {
      userInfo.submitName(username)
    } else {
      alert('First enter your name')
    }
  }

  return (
    <StyledLoginForm data-testid="login-form">
      <h2>What is your username?</h2>
      <form>
        <LoginFormInput
          inputType="text"
          inputValue={username}
          // name="username"
          // placeholder="Enter name"
          // data-testid="login-username"
          onChangeAction={onChange}
        />
        <Button buttonText='Submit' onClickAction={onFormSubmit} />
      </form>
    </StyledLoginForm>
  );
}

export default LoginForm;
