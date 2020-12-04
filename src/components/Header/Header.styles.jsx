import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
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
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    height: 45px;
  }
`;

export const ButtonLink = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
`;
