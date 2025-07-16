
import Tjansterdes from "./tjansterdes"

export const metadata = {
  title: "Zone 90 » Våra tjänster",
  description:
    "Utforska Zone 90:s digitala tjänster – UI/UX-design, webbutveckling, SEO och mer. Vi förvandlar idéer till digitala lösningar som ger resultat.",
  openGraph: {
    title: "Zone 90 – Våra tjänster",
    description:
      "Utforska Zone 90:s digitala tjänster – UI/UX-design, webbutveckling, SEO och mer.",
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

