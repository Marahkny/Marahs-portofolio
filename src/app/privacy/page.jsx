import Integritetspolicy from "./integritetspolicy";

export const metadata = {
  title: "Zone 90 » Integritetspolicy",
  description:
    "Zone 90 integritetspolicy",
  keywords: [
    "Integritetspolicy",
  ],
  openGraph: {
    title: "Zone 90 – Integritetspolicy",
    description:
      "Professionella tjänster inom webbutveckling, WordPress, UI/UX-design och SEO-optimering. Zone 90 hjälper företag att skapa starka digitala lösningar.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/privacy",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/privacy",
  },
};

export default function Page() {
  return <Integritetspolicy />;
}