import { render } from '@testing-library/react';

import Input from './Input';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toBeTruthy();
  });

  it('has a header', () => {
    const { getByText } = render(<Input />);
    expect(getByText(/What is your username/)).toBeTruthy();
  });
});
