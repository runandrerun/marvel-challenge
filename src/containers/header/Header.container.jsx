import React from 'react';
import {Header} from '../../components';
import logo from '../../_assets/img/pawprint.svg';
import * as ROUTES from '../../constants/routes';

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Logo
        src={logo}
        alt={"Pawprint"}
      />
      <Header.ButtonsContainer>
        <Header.ButtonLink to={ROUTES.GITHOME}>Home</Header.ButtonLink>
        <Header.Anchor href={ROUTES.GITHUB} rel="noopener noreferrer">Github Repo</Header.Anchor>
        <Header.ButtonLink to={ROUTES.GITABOUT}>About me</Header.ButtonLink>
      </Header.ButtonsContainer>
    </Header>
  );
};
