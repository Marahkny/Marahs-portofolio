import Home from "./home";

export const metadata = {
  title: "Zone 90 » Webbdesign i Stockholm",
  description:
    "Kontakta Zone 90 – vi hjälper ditt företag växa med webbdesign, webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 » Webbdesign i Stockholm",
    description:
      "Kontakta Zone 90 – vi hjälper ditt företag växa med webbdesign, webbutveckling, SEO och digital strategi.",
    images: [
      {
        url: "/photos/logo90.png",
        alt: "Zone 90 logotyp",
      },
    ],
    type: "website",
    url: "https://zone90.se/",
  },
  alternates: {
    canonical: "https://zone90.se/",
  },
  other: {
    keywords: "webbdesign Stockholm, webbdesign, webbutveckling, SEO, Stockholm, digital strategi",
  },
};

export default function Page() {
  return <Home />;
}
























