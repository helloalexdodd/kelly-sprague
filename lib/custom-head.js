import { Head } from 'next/document';

export default class CustomHead extends Head {
  render() {
    return (
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Contact me for herbalism consultation and products."
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Kelly Sprague, Registered Herbalist"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Contact me for herbalism consultation and products."
        />
        <meta property="og:url" content="https://www.kellysprague.ca" />
        <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
        <link rel="canonical" href="https://www.kellysprague.ca" />
        <title>Kelly Sprague, R.H.</title>
      </Head>
    );
  }
}
