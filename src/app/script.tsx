import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18378298924";

export function AppScript() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                    
            gtag('config', 'AW-18378298924');
        `}
      </Script>
    </>
  );
}
