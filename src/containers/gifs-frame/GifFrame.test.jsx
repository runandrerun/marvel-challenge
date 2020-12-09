import render from '@testing-library/react';
import GifFrame from './GifFrame.container';

describe('Does the GifFrame perform as it should?', () => {

  it('Do gifs load appear?', () => {
    const {container} = render(<GifFrame/>);
    expect(container).toMatchSnapshot();
  });
});
