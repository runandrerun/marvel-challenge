import React, { useState, useContext, createContext } from 'react';
import {Container, Input} from './Search.styles';

const SearchContext = createContext();

export default function Search({ children, ...restProps }) {
  const [giphyList, setGiphyList] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return(
    <Container {...restProps}>{children}</Container>
  );
};

Search.Input = function SearchInput({ ...restProps }) {
  const { giphyList, setGiphyList } = useContext(SearchContext);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <Input
      {...restProps}
      onChange={(value) => setGiphyList(value)}
    />
  );
};
