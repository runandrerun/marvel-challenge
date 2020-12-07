import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 2.5rem;

  @media (max-width: 1000px) {
    padding: 2rem;
  }
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
`;

export const Body = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: normal;
  text-align: left;
  margin-top: 1rem;
`;

export const List = styled.ul`
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: normal;
  /* list-style: none; */
  margin-top: 1rem;
`;

export const ListItem = styled.li`
  &::before {
    /* content: "&bull;"; */
    color: red !important;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
