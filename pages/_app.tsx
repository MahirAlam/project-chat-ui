import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
