import React from 'react';
import {Container, Logo, Anchor, ButtonsContainer, ButtonLink} from './Header.styles';
import {Link} from 'react-router-dom';

export default function Header({ children, ...restProps }) {
  return (
      <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
      <Logo {...restProps} />
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
