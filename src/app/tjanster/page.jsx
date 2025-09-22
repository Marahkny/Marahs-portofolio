import Tjansterdes from "./tjansterdes"

export const metadata = {
  title: "Zone 90 » Webbutveckling, SEO & design i Norrköping & Linköping",
  description:
    "Zone 90 erbjuder professionella digitala tjänster i Norrköping & Linköping: webbutveckling, WordPress, UI/UX-design, SEO-optimering, e-handel & digital marknadsföring. Vi hjälper företag att växa online.",
  keywords: [
    "webbutveckling i Norrköping ","webbutveckling i Linköping",
    "WordPress i Norrköping & Linköping",
    "UI/UX design",
    "SEO i Norrköping & Linköping",
    "e-handel",
    "digital marknadsföring",
    "hemsida i Norrköping & Linköping",
    "Zone 90",
  ],
  openGraph: {
    title: "Zone 90 » Webbutveckling, SEO & design i Norrköping & Linköping",
    description:
    "Zone 90 erbjuder professionella digitala tjänster i Norrköping & Linköping: webbutveckling, WordPress, UI/UX-design, SEO-optimering, e-handel & digital marknadsföring. Vi hjälper företag att växa online.",
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


