import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Siddharth Duggal" />
        <meta property="og:description" content="Founder of Bloon.ai — building novel AI experiences" />
        <meta property="og:image" content="https://siddharthduggal.com/siddharth-cover.png" />
        <meta property="og:url" content="https://siddharthduggal.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddharth Duggal" />
        <meta name="twitter:description" content="Founder of Bloon.ai — building novel AI experiences" />
        <meta name="twitter:image" content="https://siddharthduggal.com/siddharth-cover.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
