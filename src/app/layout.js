import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Componenet/header";
import Footer from "./Componenet/Footer";

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
        {/* Meta Basics */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Zone 90 » Creative Web Development & Design Consulting</title>
        <meta
          name="description"
          content="Zone 90 is your creative partner in modern web development, UX/UI design, and digital innovation. Built by Marah Kn to power tomorrow’s digital experiences."
        />
        <link rel="canonical" href="https://zone90.se/" />

        {/* Favicons */}
        <link rel="icon" href="/photos/logo90.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/photos/logo90.png" type="image/png" />
        <link rel="apple-touch-icon" href="/photos/logo90.png" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zone 90 » Creative Web Development & Design Consulting" />
        <meta
          property="og:description"
          content="Creative digital solutions, web design, and full-stack development tailored for your brand's success."
        />
        <meta property="og:url" content="https://zone90.se" />
        <meta property="og:image" content="https://zone90.se/photos/logo90.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zone 90 » Creative Web Development & Design Consulting" />
        <meta
          name="twitter:description"
          content="Creative digital solutions, web design, and full-stack development tailored for your brand's success."
        />
        <meta name="twitter:image" content="https://zone90.se/photos/logo90.png" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zone 90",
              url: "https://zone90.se",
              description:
                "Zone 90 provides expert web design, full-stack development, SEO, and UX solutions for startups and growing businesses.",
              publisher: {
                "@type": "Organization",
                name: "Zone 90",
                logo: {
                  "@type": "ImageObject",
                  url: "https://zone90.se/photos/logo90.png",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


