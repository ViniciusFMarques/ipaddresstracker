import { createGlobalStyle } from 'styled-components';
import backgroundImageDesktop from '../images/pattern-bg-desktop.png';
import backgroundImageMobile from '../images/pattern-bg-mobile.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  body{
    background-image: url(${backgroundImageDesktop});
    background-repeat: no-repeat;
    height: 100vh;
  }

  html{
    font-size: 18px;
  }

  @media (max-width: 375px){
    body{
      background-image: url(${backgroundImageMobile});
    }
  }
  @media (max-width: 550px){
    html{
      font-size: 12px;
    }
  }
  @media (max-width: 1050px){
    html{
      font-size: 14px;
    }
  }


  button{
    cursor: pointer;
  }
`;
