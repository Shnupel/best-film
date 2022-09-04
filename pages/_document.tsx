import { Html, Head, Main, NextScript } from "next/document";
import HeadElement from "../component/head"

export default function Document(): JSX.Element {
  return(
    <Html lang="ru">
      <Head>
        <HeadElement />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

