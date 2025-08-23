import Tjansterdes from "./tjansterdes"

export const metadata = {
  title: "Zone 90 » Våra tjänster inom webbutveckling, SEO & design",
  description:
    "Zone 90 erbjuder professionella digitala tjänster: webbutveckling, WordPress, UI/UX-design, SEO-optimering, e-handel & digital marknadsföring. Vi hjälper företag att växa online.",
  keywords: [
    "webbutveckling",
    "WordPress",
    "UI/UX design",
    "SEO optimering",
    "e-handel",
    "digital marknadsföring",
    "hemsida företag",
    "webbyrå",
    "Zone 90",
  ],
  openGraph: {
    title: "Zone 90 – Digitala tjänster inom webbutveckling, SEO och design",
    description:
      "Professionella tjänster inom webbutveckling, WordPress, UI/UX-design och SEO-optimering. Zone 90 hjälper företag att skapa starka digitala lösningar.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster",
  },
};

export default function Page() {
  return <Tjansterdes />;
}


