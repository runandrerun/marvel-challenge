import React, {useContext} from 'react';
import {Container} from './GifFrame.styles';
import {GifCard} from '../../components';
import {GifsContext} from '../../context';

export default function GifFrame() {
  const { gifList } = useContext(GifsContext);
  return (
    <Container id="gifs-container">
      {
        gifList.map(({ id, bitly_gif_url, bitly_url, slug, title, url, rating, images, embed_url}) => {
          return (
          <GifCard key={id + slug}>
            <GifCard.Image
              src={images.downsized.url}
            />
          </GifCard>
          )
        })
      }
    </Container>
  );
};
