import React from 'react';
import {Container} from './GifDetails.styles';

export default function GifDetails({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
};
