import styled from 'styled-components/macro';

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

  @media (min-width: 1449px) {
    width: 55px;
    height: 55px;
  }
`;

export const ButtonLink = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
`;
