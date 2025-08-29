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
  title: "Zone 90 » Webbdesign & webbutveckling i Kalmar",
  description:
    "Zone 90 är en kreativ konsult inom webbdesign och webbutveckling i Kalmar. Vi bygger snabba, snygga hemsidor",
  metadataBase: new URL("https://zone90.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://zone90.se",
    title: "Zone 90 » Webbdesign & webbutveckling i Kalmar",
    description:
      "Zone 90 är en kreativ konsult inom webbdesign och webbutveckling i Kalmar. Vi bygger snabba, snygga hemsidor",
    images: [
      {
        url: "https://zone90.se/photos/logo90.png",
        width: 1200,
        height: 630,
        alt: "Zone 90 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbdesign & webbutveckling i Kalmar",
    description:
      "Zone 90 bygger användarvänliga, snabba och snygga hemsidor med fokus på UX, UI och tillgänglighet. För startups och företag.",
    images: ["https://zone90.se/photos/logo90.png"],
  },
  icons: {
    icon: "/photos/logo90.png",
    shortcut: "/photos/logo90.png",
    apple: "/photos/logo90.png",
  },
  other: {
keywords: "webbdesign Kalmar, webbdesign för företag, UX design Kalmar, UI design företag, hemsida för företag, skapa hemsida Kalmar, WordPress hemsida, responsiv design, webbutveckling, SEO för småföretag, digital strategi, Zone 90, Webbyrå"
}
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
                "Zone 90 bygger användarvänliga, snabba och snygga hemsidor med fokus på UX, UI och tillgänglighet. För startups och företag.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kalmar",
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
      </body>
    </html>
  );
}



