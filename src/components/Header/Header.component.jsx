import React from 'react';
import {Container, Logo, ButtonLink} from './Header.styles';

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
