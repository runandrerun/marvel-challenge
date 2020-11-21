import React from 'react';
import {Container, Input} from './Search.styles';

export default function Search({ children, ...restProps }) {
  return(
    <Container {...restProps}>{children}</Container>
  );
};

Search.Input = function SearchInput({ ...restProps }) {
  return (
    <Input {...restProps} />
  );
};
