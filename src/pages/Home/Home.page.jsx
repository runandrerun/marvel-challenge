import React from 'react';
import {Search} from '../../components';

export default function Home() {
  return (
    <section id="home">
      <Search>
      Hey!
        <Search.Input placeholder="Hey"/>
      </Search>
    </section>
  );
};
