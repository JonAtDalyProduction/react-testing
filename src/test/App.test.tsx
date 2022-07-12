import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
describe('test that jest is working', () => {
  it('expects true to be true', () => {
    expect(true).toBe(true);
  });

  it('should render the app conmponent', () => {
    render(<App />);
    const message = screen.getByText(/Hi There!/i);
    expect(message).toBeInTheDocument();
  });
});
