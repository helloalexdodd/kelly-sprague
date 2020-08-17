import { StrictMode } from 'react';
import dynamic from 'next/dynamic';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { WebfontLoaderConfig } from '../styles/Global.style';
import theme from '../styles/theme';

const WebfontLoader = dynamic(() => import('@dr-kobros/react-webfont-loader'), {
  ssr: false,
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <WebfontLoader config={WebfontLoaderConfig}>
            <Component {...pageProps} />
          </WebfontLoader>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
