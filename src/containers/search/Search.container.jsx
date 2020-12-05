import React from 'react';
import {Search} from '../../components';

export default function SearchContainer() {
  return (
    <Search>
      <Search.Input placeholder={"Search for a gif"}/>
      <Search.Button>Search</Search.Button>
    </Search>
  );
};
