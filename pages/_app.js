import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-BVJS3VNRKR`}
        strategy="lazyOnLoad"
      />
      <Script strategy="lazyOnLoad">
        {` window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-BVJS3VNRKR");`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
