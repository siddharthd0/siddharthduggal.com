import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="og:title" content="Siddharth Duggal - Portfolio" />
          <meta property="og:description" content="Entrepreneur, experimenting with AI" />
          <meta property="og:image" content="https://siddharthduggal.com/siddharth-cover.png" />
          <meta property="og:url" content="https://siddharthduggal.com" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Siddharth Duggal" />
          <meta name="twitter:description" content="Entrepreneur, experimenting with AI" />
          <meta name="twitter:image" content="https://siddharthduggal.com/siddharth-cover.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
