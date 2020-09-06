import { Head } from 'next/document';
import { NextSeo } from 'next-seo';

export default class CustomHead extends Head {
  render() {
    return (
      <>
        <NextSeo />
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="utf-8" httpEquiv="encoding" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          type="text/css"
        />
        <script
          src="https://kit.fontawesome.com/19cfb99ae7.js"
          crossOrigin="anonymous"
        ></script>
        {/* <script
          type="text/javascript"
          src="https://www.etsy.com/assets/js/etsy_mini_shop.js"
        ></script>
        <script type="text/javascript">
          new Etsy.Mini(----------,'gallery',3,3,0,'https://www.etsy.com');
        </script> */}
      </>
    );
  }
}
