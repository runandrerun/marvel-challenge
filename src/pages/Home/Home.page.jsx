import React, {useEffect, useState} from 'react';
import {Search, Header} from '../../components';
import {GifFrame} from '../../containers';
import {Container} from './Home.styles';
import {fetchTrending} from '../../adapters';
import logo from '../../_assets/img/paw-print.svg';

export default function Home() {
  const [gifList, setGifList] = useState([]);
  useEffect(() => {
    fetchTrending()
    .then(gifs => {
      setGifList(gifs)
    });
  }, []);
  return (
    <Container id="home">
      <Header>
        <Header.Logo
          src={logo}
        />
        <Header.ButtonLink>Visit DEV</Header.ButtonLink>
      </Header>
      <Search>
        <Search.Input placeholder="Search for a gif"/>
      </Search>
      <GifFrame
        gifs={gifList}
      />
    </Container>
  );
};
