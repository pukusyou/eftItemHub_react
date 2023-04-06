import { render, screen } from '@testing-library/react';
import App from './App';
import Bar from './components/Bar'

test('renders learn react link', () => {
  render(<Bar />);
  const linkElement = screen.getByText(/lear react/i);
  expect(linkElement).toBeInTheDocument();
});
