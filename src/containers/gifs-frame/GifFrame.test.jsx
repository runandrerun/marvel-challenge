import { render, screen } from '@testing-library/react';
import GifFrame from './GifFrame.container';

test('does the component match its snapshot?', () => {
  render(<GifFrame />);
  expect(screen).toMatchSnapshot();
});
