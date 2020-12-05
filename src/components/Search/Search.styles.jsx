import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: .6rem;
  height: 70px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: white;
  text-transform: uppercase;
  border: 0;
  padding: 0 2rem;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }

  img {
    margin-left: .8rem;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }
`;
