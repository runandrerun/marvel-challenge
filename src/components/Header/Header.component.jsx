import React from 'react';
import {Container, Logo, Anchor, ButtonsContainer, ButtonLink} from './Header.styles';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
    <Link to={ROUTES.HOME}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLnk({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  );
};

Header.ButtonsContainer = function HeaderButtonsContainer({ children, ...restProps }) {
  return (
    <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
  );
};

Header.Anchor = function HeaderAnchor({ children, ...restProps }) {
  return (
    <Anchor {...restProps}>{children}</Anchor>
  );
};
