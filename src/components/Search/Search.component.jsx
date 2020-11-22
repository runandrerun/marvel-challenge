import React, { useState, useContext, createContext } from 'react';
import {Container, Input} from './Search.styles';

const SearchContext = createContext();

export default function Search({ children, ...restProps }) {
  const [giphyList, setGiphyList] = useState("");

  return(
    <Container {...restProps}>{children}</Container>
  );
};

Search.Input = function SearchInput({ ...restProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <Input
      {...restProps}
      placeholder={"Search"}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};
