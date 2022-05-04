import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html,body,#root,#__next {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    
    font-size: 100%;
  }

  body{
    background: #fafafa;
    color: #1d1d1d;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.2;
    font-family: Robot, sans-serif;

  }

 
`;
