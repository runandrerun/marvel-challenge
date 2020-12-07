import React, {useEffect, useState} from 'react';
import {GifFrame, HeaderContainer, SearchContainer} from '../../containers';
import {Loader} from '../../components';
import {HomeSection} from './Home.styles';
import {GifsContext} from '../../context';
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
    <GifsContext.Provider value={{ gifList, setGifList }}>
      <HomeSection id="home">
        <HeaderContainer />
        <SearchContainer />
        {
          gifList.length > 0 ?
          <GifFrame /> :
          <Loader />
        }
      </HomeSection>
    </GifsContext.Provider>
  );
};
