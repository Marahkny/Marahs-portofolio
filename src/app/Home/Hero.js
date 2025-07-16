import Home from "./home"

export const metadata = {
  title: "Zone 90 » Webbdesign i Stockholm",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Kontakt",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/",
  },
  alternates: {
    canonical: "https://zone90.se/",
  },
    other: {
  keywords: "webbdesgn, webbutveckling i stockholm"
}
};


export default function Page() {
  return <Home />;
}























