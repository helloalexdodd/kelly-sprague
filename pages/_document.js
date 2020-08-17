import Document, { Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import CustomHead from '~/lib/custom-head';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <>
        <Html lang="en">
          <CustomHead />
          <Main />
          <NextScript />
        </Html>
        {this.props.styleTags}
      </>
    );
  }
}
