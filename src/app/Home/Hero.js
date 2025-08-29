import Home from "./home";

export const metadata = {
  title: "Zone 90 » Webbdesign i Kalmar",
  description:
    "Zone 90 hjälper ditt företag växa med webbdesign, webbutveckling, SEO och digital strategi i Kalmar.",
  openGraph: {
    title: "Zone 90 » Webbdesign i Kalmar",
    description:
      "Zone 90 hjälper ditt företag växa med webbdesign, webbutveckling, SEO och digital strategi i Kalmar.",
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
    keywords: "webbdesign Kalmar, webbdesign för företag, webbutveckling, SEO, hemsidor, wordpress",
  },
};

export default function Page() {
  return <Home />;
}
























