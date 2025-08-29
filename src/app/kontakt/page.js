import Kontaktsida from "./kontaktsida.js"

export const metadata = {
  title: "Zone 90 » Kontakta oss ",
  description:
    "Kontakta Zone 90 i Kalmar – din digitala partner för webbutveckling, WordPress, SEO-optimering, e-handel och digital marknadsföring. Vi hjälper företag att växa online.",
  keywords: [
    "kontakt Zone 90",
    "webbyrå Kalmar",
    "SEO Kalmar",
    "webbutveckling kontakt",
    "digital strategi",
    "WordPress utveckling",
    "hemsida företag Kalmar",
    "Zone 90 kontakt",
    "SEO optimering",
  ],
  openGraph: {
    title: "Kontakta Zone 90 ",
    description:
      "Behöver du hjälp med webbutveckling, WordPress, SEO eller digital strategi? Kontakta Zone 90 i Kalmar – vi hjälper företag att lyckas online.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/kontakt",
  },
  alternates: {
    canonical: "https://zone90.se/kontakt",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function Page() {
  return <Kontaktsida />;
}

