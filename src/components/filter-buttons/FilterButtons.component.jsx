import React from 'react';
import {Container} from './FilterButtons.styles';

export default function FilterButtons({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};
