import Document, { Html, Main, NextScript, Head } from "next/document";
import { ColorModeScript } from "@chakra-ui/color-mode";

import constants from "../lib/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={constants.DOCUMENT.LANGUAGE_CODE}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content={constants.DOCUMENT.DESCRIPTION}
          />
          <meta name="description" content={constants.DOCUMENT.DESCRIPTION} />
          <meta property="og:image" content="opengraph.png"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
