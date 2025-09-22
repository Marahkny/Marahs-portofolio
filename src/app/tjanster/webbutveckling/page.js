import Webbutveckling from "./webbutveckling";

export const metadata = {
  title: "Zone 90 » Hemsidor & E-handel i  Norrköping & Linköping",
  description:
    "Zone 90 skapar moderna hemsidor och e-handelslösningar i Norrköping & Linköping. Vi kombinerar UI/UX-design, Figma, WordPress, Shopify och WooCommerce för användarvänliga digitala upplevelser.",
  keywords: [
    "Hemsidor i Norrköping","E-handel i Norrköping","Hemsidor i Linköping","E-handel i Linköping","WordPress", "Shopify", "WooCommerce", "Vad kostar en hemsida?"
  ],
  openGraph: {
    title: "Zone 90 » Hemsidor & E-handel i Kalmar",
    description:
      "Zone 90 skapar moderna hemsidor och e-handelslösningar i Norrköping & Linköping. Vi kombinerar UI/UX-design, Figma, WordPress, Shopify och WooCommerce för användarvänliga digitala upplevelser.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/webbutveckling",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/webbutveckling",
  },
};

export default function Page() {
  return <Webbutveckling />;
}