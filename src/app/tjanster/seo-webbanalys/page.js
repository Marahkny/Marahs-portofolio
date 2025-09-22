import SeoAnalys from "./seo&analys";

export const metadata = {
  title: "Zone 90 » SEO byrå & webbanalys i Norrköping & Linköping",
  description:
    "Vi hjälper ditt företag i Norrköping & Linköping att synas på Google med SEO, analys och optimering. On-page, off-page och teknisk SEO för hållbara resultat och ökad synlighet online.",
  keywords: [
    "SEO byrå i Norrköping","SEO byrå i Linköping", "Sökordsanalys", "Google Analytics", "Rankning på Google", "On-page SEO", "Off-page SEO", "Hur lång tid tar det att se resultat med SEO?"
  ],
  openGraph: {
    title: "Zone 90 – SEO byrå & webbanalys i Norrköping & Linköping",
    description:
      "Vi hjälper ditt företag i Norrköping & Linköping att synas på Google med SEO, analys och optimering. On-page, off-page och teknisk SEO för hållbara resultat och ökad synlighet online.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/seo-webbanalys",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/seo-webbanalys",
  },
};

export default function Page() {
  return <SeoAnalys />;
}