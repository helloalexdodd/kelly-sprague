import { StrictMode } from 'react';
import mailgo from 'mailgo';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyle from '~/styles/Global.style';
import theme from '~/styles/theme';
import fonts from '~/styles/fonts';

const GlobalStyles = createGlobalStyle`
  ${GlobalStyle}
  ${fonts}
`;

export default class MyApp extends App {
  componentDidMount() {
    mailgo();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </StrictMode>
    );
  }
}
