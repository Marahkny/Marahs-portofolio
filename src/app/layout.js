import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Componenet/header"
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
  title: "Zone 90 — web & design solutions consulting service",
  description: "Discover Zone 90: your platform for innovation, design, and web development. Explore creative projects by Marah Kn — the digital solutions of tomorrow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
        {/* Grundläggande metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zone 90 » Creative web development & design consulting</title>

        {/* SEO-description */}
        <meta
          name="description"
          content="Zone 90 is your creative partner for modern web development, UI/UX design, and digital innovation. We build fast, secure, and mobile-friendly websites."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zone90.se/" />

        {/* Favicon */}
        <link rel="icon" href="/photos/logo90.png" type="image/png" />
        <link rel="apple-touch-icon" href="/photos/logo90.png" />

        {/* Open Graph */}
        <meta property="og:title" content="Zone 90 – Creative Web Development & Design" />
        <meta
          property="og:description"
          content="Creative digital solutions, web design, and full-stack development tailored for your business growth."
        />
        <meta property="og:image" content="https://zone90.se/photos/logo90.png" />
        <meta property="og:url" content="https://zone90.se" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zone 90 – Creative Web Development & Design" />
        <meta
          name="twitter:description"
          content="Creative digital solutions, web design, and full-stack development tailored for your business growth."
        />
        <meta name="twitter:image" content="https://zone90.se/photos/logo90.png" />

        {/* Strukturdata (schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zone 90",
              url: "https://zone90.se",
              description:
                "Zone 90 provides creative web design and development services to startups and businesses worldwide.",
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
        
        <Header />  {/* ✅ Header visas på alla sidor */}
        <main>{children}</main>  {/* Innehåll ändras beroende på sida */}
        <Footer />  {/* ✅ Footer visas på alla sidor */}
      </body>
    </html>
  );
}

