import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Componenet/header";
import Footer from "./Componenet/Footer";
import { Analytics } from '@vercel/analytics/react';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zone 90 » Creative Web Development & Design Consulting",
  description:
    "Zone 90 is your creative partner in modern web development, UX/UI design, and digital innovation. Built by Marah Kn to power tomorrow’s digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
  {/* Basic Meta Tags */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zone 90 » Creative web development & design consulting in Sweden & globally</title>
  <meta
    name="description"
    content="Zone 90 is a Stockholm-based creative web design and development consultancy. We build modern websites, optimize UX/UI, and deliver SEO-ready solutions for businesses in Sweden and worldwide."
  />
  <link rel="canonical" href="https://zone90.se/" />

  {/* Favicons */}
  <link rel="icon" href="/photos/logo90.png" type="image/png" sizes="32x32" />
  <link rel="shortcut icon" href="/photos/logo90.png" type="image/png" />
  <link rel="apple-touch-icon" href="/photos/logo90.png" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Zone 90 » Creative web development & design consulting " />
  <meta
    property="og:description"
    content="Creative website solutions for startups and businesses. Based in Stockholm, working globally."
  />
  <meta property="og:url" content="https://zone90.se" />
  <meta property="og:image" content="https://zone90.se/photos/logo90.png" />

  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Zone 90 » Creative web development & design consulting" />
  <meta
    name="twitter:description"
    content="Creative website solutions for startups and businesses. Based in Stockholm, working globally."
  />
  <meta name="twitter:image" content="https://zone90.se/photos/logo90.png" />

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
          "Creative web design, development, and SEO services from Stockholm to the world. Zone 90 builds smart, responsive, and user-focused digital solutions.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockholm",
          addressCountry: "SE",
        },
        areaServed: ["SE", "Global"],
        sameAs: [
          "https://www.facebook.com/people/Zone90/61575014166638/",
          "https://www.linkedin.com/company/zone90/"
        ]
      }),
    }}
  />
</head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}


