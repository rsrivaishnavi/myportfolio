import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-header: ${props => props.theme.headerColor};
    --color-text: ${props => props.theme.textColor};
    --color-main: ${props => props.theme.mainColor};
    --color-bg: ${props => props.theme.backgroundColor};
    --color-nav: ${props => props.theme.navBackground};
    --color-shadow: ${props => props.theme.boxShadow};
    --color-bg-2: ${props => props.theme.secondBackground};
    --color-border: ${props => props.theme.borderColor};
    --color-second: ${props => props.theme.secondColor};
    --color-gradient: ${props => props.theme.gradientColor};
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;  
    overflow-x:hidden;

  }

  body {
    transition: all 0.2s ease;
    letter-spacing: 1px;
    overflow-x: hidden;
    font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-header);
  }

  button {
    letter-spacing: 1px;
    color: var(--color-main);
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 10px;
    background: var(--color-second);
    transition: all 0.2s ease-in-out;
    &:hover {
      background: var(--color-main);
      color: var(--color-second)
    }
  }

  h2{
    font-weight: bolder;
    font-size: 1.6rem;
    color: var(--color-main);    
    span{
        font-family: var(--font-mono);
        font-size: 1.2rem;
        background-image: var(--color-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  } 

  p {
    color: var(--color-text);
    line-height: 150%;
  }

  p span {
    color: var(--color-header);
  }


  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background-color: var(--color-bg-2);
  }

  *::-webkit-scrollbar-thumb {
    background: var(--color-main);
    border: transparent;
    border-radius: 8px;
  }

`;

export default GlobalStyle;