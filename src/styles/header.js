import styled from 'styled-components';

const Header = styled.section`
  height: 10%;
  min-height: 5rem;
  display: grid;
  grid-template-columns: 1fr 70% 1fr;

  .headerText {
      display: flex;
      justify-content: center;
      align-items: top;
      margin: 1em;
  }
  
  #burger {
    display: flex;
    justify-content: center;
    align-items: center;
}

  h1 {
    color: #7800A2;
    font-size: 2em;
    font-family: 'Fugaz One', cursive;
  }

  h2 {
    color: #7800A2;
    font-size: .7em;
    font-family: 'Fugaz One', cursive;
  }

  #page-wrap {
    text-align: center;
    overflow: auto;
  }

  .bm-menu-wrap {
    width: 20%;
    
  }

  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #E18AFF;
    transition: color 0.2s;
    font-size: 2em;
    text-align: center;
    background: #DBFFDF;
  }

  .bm-item:hover {
    -webkit-transform: scale(1.2);
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 1em;
    top: 1em;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-cross-button {
    height: 80px;
    width: 80px;
    background: #DBFFDF;
  }

  .bm-menu {
    background: #DBFFDF;

    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #DBFFDF;
  }
  
  .bm-item-list {
    color: #b8b7ad;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #DBFFDF;
  }
  
  .bm-overlay {
    background: #DBFFDF;
  }

`;

export {
  Header
};
