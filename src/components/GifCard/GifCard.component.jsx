import React from 'react';
import {Card, Image} from './GifCard.styles';

export default function GifCard({ children, ...restProps }) {
  return (
    <Card {...restProps}>
      {children}
    </Card>
  );
};

GifCard.Image = function GifImage({ ...restProps }) {
  return (
    <Image
      {...restProps}
    />
  )
};
