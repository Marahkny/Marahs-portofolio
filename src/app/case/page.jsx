import Casesida from "./casesida";

export const metadata = {
  title: "Zone 90 » Kundcase",
  description:
    "Se våra kundcase och projekt – upptäck hur Zone 90 hjälper företag växa med webbdesign, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Våra tjänster",
    description:
      "Se våra kundcase och projekt – upptäck hur Zone 90 hjälper företag växa med webbdesign, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/case",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  alternates: {
    canonical: "https://zone90.se/case",
  },
  other: {
    keywords: "zone 90 kundcase, webbutveckling",
  },
};

// Separat viewport-export enligt Next.js krav
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Page() {
  return <Casesida />;
}







