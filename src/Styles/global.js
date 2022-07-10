import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --light-bg-color: #ecf0f1;
    --grey-bg-color: #7f8c8d;
    --red-bg-color: #E62429;
    --dark-bg-color: #151515;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    overflow-x: hidden;
  }
` 

