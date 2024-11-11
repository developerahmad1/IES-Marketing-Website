import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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

        {/* Tidio script */}
        <Script
          src="//code.tidio.co/q3zgrjfcp807kti0igmfz5faevcsf7yn.js"
          strategy="lazyOnload"
        />

      </body>
    </Html>
  );
}








// SEO Bot
// https://chatgpt.com/c/6721c973-90ec-8001-91ee-864d33c83ee1


// seo New Bot
// https://chatgpt.com/c/67246a99-3284-8001-8931-29ee741233c8