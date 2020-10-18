import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 62.5%}

  *, *:before, *:after {box-sizing: inherit}

  body {
    font-family: 'Abril Fatface', 'Merriweather', serif;
    font-size: 1.6rem;
    font-display: swap;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    padding: 10px 20px 8px 20px;
    font-family: 'Merriweather';
    border-radius: ${({ theme }) => theme.radii.button};
    border: none;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  button,
  a {
    cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🌝</text></svg>") 0 16, auto;
  }
`;

export default GlobalStyle;
