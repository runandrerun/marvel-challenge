import React, { useState, useContext, createContext } from 'react';
import {GifsContext} from '../../context';
import {Container, Input} from './Search.styles';

const SearchContext = createContext();

export default function Search({ children, ...restProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Container {...restProps}>{children}</Container>
    </SearchContext.Provider>
  );
};

Search.Input = function SearchInput({ ...restProps }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { setGifList } = useContext(GifsContext);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
  }
  return (
    <Input
      {...restProps}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};
