import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  margin-top: 10px;
  height: 80px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  filter: brightness(0) invert(1);
  width: 50px;
  height: 50px;
  margin-right: 40px;
  transform: rotate(0deg);
  transition: all 1s ease-in;

  &:hover {
    transform: rotate(360deg);
  }

  @media (min-width: 1449px) {
    width: 55px;
    height: 55px;
  }
`;

export const Anchor = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  margin-right: 1rem;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 50%;
    content: '';
    height: 1px;
    background: white;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 50%;
  	content: '';
  	height: 1px;
    background: white;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
