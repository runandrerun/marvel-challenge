import React from 'react';
import {Search} from '../../components';
import {GifFrame} from '../../containers';

export default function Home() {
  return (
    <section id="home">
      <Search>
      Hey!
        <Search.Input placeholder="Hey"/>
      </Search>
      <GifFrame />
    </section>
  );
};
