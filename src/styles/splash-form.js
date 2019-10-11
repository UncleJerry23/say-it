import styled from 'styled-components';

const SplashFrom = styled.form`
  height: 90%;
  display: grid;
  grid-template-rows: 80%;

  div {
    display: flex;
    justify-content: center;
    align-items: top;
  }

  textarea {
    width: 90%;
    height: 95%;
    verticalAlign: top;
    background: #FFC4DE;
    border: none;
    border-radius: 1em;
    color: #D049FF;
    font-size: 2em;
    vertical-align: top;  
    padding: .7em;
    box-sizing: border-box;
    font-family: 'Patrick Hand', cursive;
  }

  textarea::placeholder {
    color: #E18AFF;
  }
  
  section {
    width: 90%;
    height: 80%;
    background: #FFC4DE;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    height: 2em;
    width: 8em;
    border: none;
    border-radius: .5em;
    background: #FFEBF4;
    color: #7800A2;
    font-size: 1.5rem;
    font-family: 'Noticia Text', serif;
  }
`;

export {
  SplashFrom
};
