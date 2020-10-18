import { StrictMode } from 'react';
import mailgo from 'mailgo';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyle from '~/styles/Global.style';
import theme from '~/styles/theme';
import fonts from '~/styles/fonts.style';
import Layout from '~/layouts';
import Context from '~/context/context';
import Provider from '~/context/provider';

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
          <Provider>
            <Context.Consumer>
              {(context) => (
                <Layout>
                  <Component context={context} {...pageProps} />
                </Layout>
              )}
            </Context.Consumer>
          </Provider>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
