import { render } from '@testing-library/react';

import App from '../../app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a login form on the main page', () => {
    const { getByText } = render(<App />);
    expect(getByText(/What is your username/)).toBeTruthy();
  });
});
