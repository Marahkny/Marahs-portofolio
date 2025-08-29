import OmZone90 from "./omzone90"

export const metadata = {
  title: "Zone 90 » Om Zone 90 ",
  description:
    "Zone 90 i Kalmar – din digitala partner för webbutveckling, WordPress, SEO-optimering, e-handel och digital marknadsföring. Vi hjälper företag att växa online.",
  keywords: [
  "Om Zone 90 Zone 90",
    "webbyrå Kalmar",
    "SEO Kalmar",
    "webbutveckling Kalmar",
    "digital strategi Kalmar",
    "WordPress utveckling Kalmar",
    "hemsida företag Kalmar",
    "Zone 90 kontakt",
    "SEO optimering Kalmar",
    "e-handel Kalmar"
  ],
  openGraph: {
    title: "Kontakta Zone 90 ",
    description:
      "Behöver du hjälp med webbutveckling, WordPress, SEO eller digital strategi? Kontakta Zone 90 i Kalmar – vi hjälper företag att lyckas online.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/omzone90",
  },
  alternates: {
    canonical: "https://zone90.se/omzone90",
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
  return <OmZone90 />;
}