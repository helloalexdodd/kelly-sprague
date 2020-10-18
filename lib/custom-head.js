import { Head } from 'next/document';

export default class CustomHead extends Head {
  render() {
    return (
      <>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <script
          src="https://kit.fontawesome.com/19cfb99ae7.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Kelly Sprague, R.H.</title>
        {this.getPreloadDynamicChunks()}
        {this.getPreloadMainLinks()}
        {this.getCssLinks()}
      </>
    );
  }
}
