import Script from "next/script";
import { getGaMeasurementId } from "@/lib/analytics";

const gaId = getGaMeasurementId();

export function GoogleAnalytics() {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            send_page_view: true,
            cookie_domain: 'auto',
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  );
}
