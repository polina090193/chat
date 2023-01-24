import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginForm />);
    expect(baseElement).toBeTruthy();
  });

  it('has a header', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText(/What is your username/)).toBeTruthy();
  });
});
