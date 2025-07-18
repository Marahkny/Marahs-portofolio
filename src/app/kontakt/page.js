import Kontaktsida from "./kontaktsida.js"

export const metadata = {
  title: "Zone 90 » Kontakt zone 90",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Kontakt",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/kontakt",
  },
  alternates: {
    canonical: "https://zone90.se/kontakt",
  },
    other: {
  keywords: "kontakt zone 90 i Stockholm"
}
};

export default function Page() {
  return <Kontaktsida />;
}
