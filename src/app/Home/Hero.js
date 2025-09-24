import Home from "./home";

export const metadata = {
  title: "Zone 90 » Din digitala webbyrå i Norrköping & Linköping",
  description:
    "Zone 90 är en webbyrå i Norrköping & Linköping. Vi skapar snabba, snygga, SEO-optimerade hemsidor, e-handel & digital marknadsföring.",
  openGraph: {
    title: "Zone 90 » Din digitala webbyrå i Norrköping & Linköping",
    description:
      "Zone 90 är en webbyrå i Norrköping & Linköping. Vi skapar snabba, snygga, SEO-optimerade hemsidor, e-handel & digital marknadsföring.",
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
    keywords: "webbyrå Norrköping, webbyrå Linköping, webbdesign Norrköping, webbdesign Linköping, hemsida Norrköping, skapa hemsida Norrköping, e-handel Norrköping, WordPress webbyrå, webbutveckling, SEO Norrköping, digital marknadsföring, UX design, Zone 90",
  },
};

export default function Page() {
  return <Home />;
}
























