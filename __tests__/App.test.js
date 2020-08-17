import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../App';

const message = 'Thank-you for downloading!';

describe('App', () => {
  it('should render with default message', () => {
    const { getByText } = render(<App />);
    expect(getByText(message)).toBeInTheDocument();
  });
});

it('should have no accessibility errors', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
