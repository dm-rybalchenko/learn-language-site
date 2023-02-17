import { Html, Head, Main, NextScript } from 'next/document';


export default function Document(): JSX.Element {
  return (
    <Html lang="ru">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          crossOrigin="anonymous"
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
