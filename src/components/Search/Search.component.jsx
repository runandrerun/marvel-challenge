import React, { useState, useContext, createContext } from 'react';
import {GifsContext, SearchContext} from '../../context';
import {Container, FormWrap, Input, Button} from './Search.styles';
import {searchGiphy} from '../../adapters';

export default function Search({ children, ...restProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Container {...restProps}>{children}</Container>
    </SearchContext.Provider>
  );
};

Search.FormWrap = function SearchFormWrap({ children, ...restProps}) {
  const { searchTerm } = useContext(SearchContext);
  const { setGifList } = useContext(GifsContext);
  const onSubmit = event => {
    event.preventDefault();
    searchGiphy(searchTerm)
    .then(data => {
      setGifList(data)
    });
  };
  return (
      <FormWrap onSubmit={onSubmit} {...restProps}>{children}</FormWrap>
  );
};

Search.Input = function SearchInput({ ...restProps }) {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <Input
      {...restProps}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

Search.Button = function SearchButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
};
