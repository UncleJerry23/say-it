import styled from 'styled-components';

const Burger = styled.section`
  height: 10%;
  display: grid;
  grid-template-columns: 1fr 70% 1fr;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    border: none;

    p {
      height: 5px;
      width: 30px;
      margin: 2px;
      background: black;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #7800A2;
    font-size: 2em;
  }
`;

export {
  Burger
};
