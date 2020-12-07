import React, { useState, useContext, createContext } from 'react';
import {GifsContext} from '../../context';
import {Container, FormWrap, Input, Button} from './Search.styles';
import {searchGiphy} from '../../adapters';

const SearchContext = createContext();

export default function Search({ children, ...restProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Container {...restProps}>{children}</Container>
    </SearchContext.Provider>
  );
};

Search.FormWrap = function SearchFormWrap({ children, ...restProps}) {
  const onSubmit = event => {
    event.preventDefault();
  };
  return (
      <FormWrap onSubmit={onSubmit} {...restProps}>{children}</FormWrap>
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
    searchGiphy()
    .then(data => {
      setGifList(data)
    });
  };
  return (
    <Input
      {...restProps}
      value={searchTerm}
      onChange={handleChange}
      onSubmit={onSubmit}
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
