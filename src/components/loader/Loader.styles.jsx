import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  &>div {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    margin: 3px;
    animation: hop 1s infinite alternate;
  }

  &>div:nth-child(2) {
    animation-delay: 0.2s;
  }

  &>div:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes hop {
    to {
     opacity: 0.8;
     transform: translate(0, -20px);
     background: #f40612;
   }
  }
`;
