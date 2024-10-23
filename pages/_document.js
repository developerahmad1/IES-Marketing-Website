import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import the Script component

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Console verification */}
        <meta
          name="google-site-verification"
          content="g8DOXzd9T3tzoB1xfH9MypXd64Gpwna4CgfjjQ1uY1c"
        />
        <link rel="icon" type="image/x-icon" href="/ies icon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Add the Script component properly */}
        <Script
          src="//code.tidio.co/q3zgrjfcp807kti0igmfz5faevcsf7yn.js"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  );
}
