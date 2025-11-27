import Hyraminigrävarensidan from "./hyraminigrävarensidan";

export const metadata = {
  title: "Zone 90 » Hyra minigrävaren kundcase",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Hyra minigrävaren kundcase",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/case/hyraminigravaren",
  },
  alternates: {
    canonical: "https://zone90.se/case/hyraminigravaren",
  },
    other: {
  keywords: "kontakt zone 90 i Norrköping & Linköping, Hyra minigrävaren, webbyrå i Kalmar, webbdesign"
}
};

export default function Page() {
  return <Hyraminigrävarensidan />;
}