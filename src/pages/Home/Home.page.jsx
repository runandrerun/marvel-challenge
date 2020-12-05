import React, {useEffect, useState} from 'react';
import {Search, Header} from '../../components';
import {GifFrame} from '../../containers';
import {HomeSection} from './Home.styles';
import {GifsContext} from '../../context';
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
    <GifsContext.Provider value={{ gifList, setGifList }}>
      <HomeSection id="home">
        <Header>
          <Header.Logo
            src={logo}
            alt={"Pawprint"}
          />
          <Header.ButtonsContainer>
            <Header.Anchor href={ROUTES.GITHUB} rel="noopener noreferrer">Github Repo</Header.Anchor>
            <Header.ButtonLink to={ROUTES.ABOUT}>About me</Header.ButtonLink>
          </Header.ButtonsContainer>
        </Header>
        <Search>
          <Search.Input placeholder={"Search for a gif"}/>
        </Search>
        <GifFrame />
      </HomeSection>
    </GifsContext.Provider>
  );
};
