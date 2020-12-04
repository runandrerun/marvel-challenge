import React, {useEffect, useState} from 'react';
import {Search} from '../../components';
import {GifFrame} from '../../containers';
import {fetchTrending} from '../../adapters';

export default function Home() {
  const [gifList, setGifList] = useState([]);
  useEffect(() => {
    fetchTrending()
    .then(gifs => {
      setGifList(gifs)
    });
  }, []);
  return (
    <section id="home">
      <Search>
        <Search.Input placeholder="Hey"/>
      </Search>
      <GifFrame
        gifs={gifList}
      />
    </section>
  );
};
