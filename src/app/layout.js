import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Zone 90 » Webbdesign och webbutveckling i Stockholm",
  description:
    "Zone 90 är din kreativa partner inom modern webbutveckling, UX/UI-design och digital innovation.",
  metadataBase: new URL("https://zone90.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://zone90.se",
    title: "Zone 90 » Webbdesign och webbutveckling i Stockholm",
    description:
      "Kreativa webblösningar för startups och företag. Baserad i Stockholm, arbetar globalt.",
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
    title: "Zone 90 » Webbdesign och webbutveckling i Stockholm",
    description:
      "Kreativa webblösningar för startups och företag. Baserad i Stockholm, arbetar globalt.",
    images: ["https://zone90.se/photos/logo90.png"],
  },
  icons: {
    icon: "/photos/logo90.png",
    shortcut: "/photos/logo90.png",
    apple: "/photos/logo90.png",
  },
  other: {
  keywords: "webbdesign, webbutveckling, UX, UI, Stockholm, digital byrå"
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
                "Kreativ webbdesign, utveckling och SEO från Stockholm till världen. Zone 90 bygger smarta, responsiva och användarfokuserade digitala lösningar.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Stockholm",
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



