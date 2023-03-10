import { render } from '@testing-library/react';

import Button from './Button';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('has a header', () => {
    const { getByText } = render(<Button />);
    expect(getByText(/What is your username/)).toBeTruthy();
  });
});
