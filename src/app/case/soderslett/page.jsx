import Swefurnsida from "./soderslettsida";

export const metadata = {
  title: "Zone 90 » Söderslätts Byggnadsplåt kundcase",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Söderslätts Byggnadsplåt kundcases",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/case/soderslett",
  },
  alternates: {
    canonical: "https://zone90.se/case/soderslett",
  },
    other: {
  keywords: "kontakt zone 90 i Kalmar, Swefurn, webbyrå i Kalmar, webbdesign"
}
};

export default function Page() {
  return <Swefurnsida />;
}