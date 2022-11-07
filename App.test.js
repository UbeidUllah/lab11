import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test('Does it have Hello World', () => {
  render(<App />);
  const heading = screen.getByTestId('testheading');
  expect(heading).toHaveTextContent('Hello World');
});

test('Is a list element present', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent('Saab');
});

