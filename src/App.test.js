import { render, screen } from '@testing-library/react';
import PopularMovies from './App';

test('renders CineMatch title', () => {
  render(<PopularMovies />);
  const titleElement = screen.getByText(/CineMatch/i);
  expect(titleElement).toBeInTheDocument();
});
