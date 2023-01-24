import { fireEvent, render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a login form on the main page', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('login-form')).toBeTruthy();
  });

  it('turns on the chat screen after entering the name and login form submit', () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const loginSubmit = getByTestId('login-submit')
    const loginUsername = getByTestId('login-username')

    fireEvent.click(loginSubmit)
    expect(queryByTestId('chat-screen')).toBeFalsy();
    expect(queryByTestId('login-form')).toBeTruthy();

    fireEvent.change(loginUsername, {
      target: { value: 'Superstar' }
    })
    fireEvent.click(loginSubmit)
    expect(queryByTestId('chat-screen')).toBeTruthy();
    expect(queryByTestId('login-form')).toBeFalsy();

  });
});
