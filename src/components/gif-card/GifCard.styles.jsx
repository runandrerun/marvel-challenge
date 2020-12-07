import styled from 'styled-components/macro';

export const Card = styled.div`
  flex: auto;
  width: 220px;
  height: auto;
  margin: 5px 5px;

  &:nth-of-type(4n+1) {
    width: 250px;
  }

  &:nth-of-type(4n+1):nth-of-type(4n+2) {
    width: 325px;
  }
  &:nth-of-type(4n+1):nth-of-type(4n+3) {
    width: 180px;
  }
  &:nth-of-type(4n+1):nth-of-type(4n+4) {
    width: 380px;
  }

  @media (max-width: 1000px) {
    max-width: 400px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
