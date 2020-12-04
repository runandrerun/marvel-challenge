import React from 'react';
import {Container} from './GifFrame.styles';
import {GifCard} from '../../components';

export default function GifFrame({ gifs }) {
  return (
    <Container>
      {
        gifs.map(({ id, bitly_gif_url, bitly_url, slug, title, url, rating, images, embed_url}) => {
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
