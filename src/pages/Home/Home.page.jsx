import React, {useEffect, useState} from 'react';
import {Search, Header} from '../../components';
import {GifFrame} from '../../containers';
import {Container} from './Home.styles';
import {fetchTrending} from '../../adapters';
import logo from '../../_assets/img/pawprint.svg';
import * as ROUTES from '../../constants/routes';

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
          alt={"Pawprint"}
        />
        <>
        {/*<Header.Anchor href={ROUTES.GITHUB} rel="noopener noreferrer">Visit Github</Header.Anchor>*/}
        <Header.ButtonLink to={ROUTES.ABOUT}>About me</Header.ButtonLink>
        </>
      </Header>
      <Search>
        <Search.Input placeholder={"Search for a gif"}/>
      </Search>
      <GifFrame
        gifs={gifList}
      />
    </Container>
  );
};
