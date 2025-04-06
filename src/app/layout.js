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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header />  {/* ✅ Header visas på alla sidor */}
        <main>{children}</main>  {/* Innehåll ändras beroende på sida */}
        <Footer />  {/* ✅ Footer visas på alla sidor */}
      </body>
    </html>
  );
}

