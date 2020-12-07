import React from 'react';
import {Container, Header, Body, List, ListItem} from './Profile.styles';

export default function Profile({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

Profile.Body = function ProfileBody({ children, ...restProps }) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return (
    <List {...restProps}>{children}</List>
  );
};

Profile.ListItem = function ProfileListItem({ children, ...restProps }) {
  return (
    <ListItem {...restProps}>{children}</ListItem>
  );
};
