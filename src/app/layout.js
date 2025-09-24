import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "./Componenet/header";
import Footer from "./Componenet/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zone 90 » Din digitala webbyrå i Norrköping & Linköping",
  description:
    "Zone 90 är en webbyrå i Norrköping & Linköping. Vi skapar snabba, snygga, SEO-optimerade hemsidor, e-handel & digital marknadsföring.",
  metadataBase: new URL("https://zone90.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://zone90.se",
    title: "Zone 90 » Din digitala webbyrå i Norrköping & Linköping",
    description:
      "Zone 90 är en webbyrå i Norrköping & Linköping. Vi skapar snabba, snygga, SEO-optimerade hemsidor, e-handel & digital marknadsföring.",
    images: [
      {
        url: "https://zone90.se/photos/logo90.png",
        width: 1200,
        height: 630,
        alt: "Zone 90 Webbyrå i Norrköping & Linköping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Din digitala webbyrå i Norrköping & Linköping",
    description:
      "Zone 90 hjälper företag att växa online med snygga hemsidor, UX/UI-design, e-handel och SEO. Baserade i Norrköping & Linköping.",
    images: ["https://zone90.se/photos/logo90.png"],
  },
  icons: {
    icon: "/photos/logo90.png",
    shortcut: "/photos/logo90.png",
    apple: "/photos/logo90.png",
  },
  other: {
    keywords:
      "webbyrå Norrköping, webbyrå Linköping, webbdesign Norrköping, webbdesign Linköping, hemsida Norrköping, skapa hemsida Norrköping, e-handel Norrköping, WordPress webbyrå, webbutveckling, SEO Norrköping, digital marknadsföring, UX design, Zone 90",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="sv">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-ME0HPVY5HG`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ME0HPVY5HG');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Zone 90",
              url: "https://zone90.se",
              logo: "https://zone90.se/photos/logo90.png",
              image: "https://zone90.se/photos/logo90.png",
              description:
                "Zone 90 bygger användarvänliga, snabba och snygga hemsidor med fokus på UX, UI och tillgänglighet i Nörrköping och Linköping. För startups och företag.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nörrköping & Linköping",
                addressCountry: "SE",
              },
              areaServed: ["SE", "Global"],
              sameAs: [
                "https://www.facebook.com/people/Zone90/61575014166638/",
                "https://www.linkedin.com/company/zone90/",
              ],
            }),
          }}
        />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  {/* Google Analytics */}
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=G-ME0HPVY5HG`}
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ME0HPVY5HG');`}
  </Script>

  {/* Meta Pixel */}
  <Script
    id="meta-pixel"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '3256787997805806');
        fbq('track', 'PageView');
      `,
    }}
  />
  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=3256787997805806&ev=PageView&noscript=1"
    />
  </noscript>

  <Header />
  <main>{children}</main>
  <Analytics />
  <SpeedInsights />
  <Footer />
</body>

      </body>
    </html>
  );
}



