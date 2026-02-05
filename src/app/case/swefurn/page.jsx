import Swefurnsida from "./swefurnsida";

export const metadata = {
  title: "Zone 90 » Swefurn kundcase",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Swefurn kundcases",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/case/swefurn",
  },
  alternates: {
    canonical: "https://zone90.se/case/swefurn",
  },
    other: {
  keywords: "kontakt zone 90 i Kalmar, Swefurn, webbyrå i Kalmar, webbdesign"
}
};

export default function Page() {
  return <Swefurnsida />;
}