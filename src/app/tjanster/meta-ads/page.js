import Metaads from "./metaads";

export const metadata = {
  title: "Zone 90 » Marknadsföringsbyrå i Norrköping & Linköping – nå din målgrupp på sociala medier",
  description:
    "Visa upp ditt företag med Meta Ads i Norrköping & Linköping. Vi skapar målgruppsanpassade annonser, optimerar i realtid och analyserar resultat för ökad synlighet och försäljning",
  keywords: [
    "Marknadsföringsbyrå i Norrköping","Marknadsföringsbyrå i Linköping", "Sociala medier annonsering", "Digital marknadsföring", "Optimering i realtid", "Kreativt annonsinnehåll", "Hur vet jag om annonserna fungerar?"
  ],
  openGraph: {
    title: "Zone 90 – Marknadsföringsbyrå i Norrköping & Linköping – nå din målgrupp på sociala medier",
    description:
      "Visa upp ditt företag med Meta Ads i Norrköping & Linköping. Vi skapar målgruppsanpassade annonser, optimerar i realtid och analyserar resultat för ökad synlighet och försäljning",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/meta-ads",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/meta-ads",
  },
};

export default function Page() {
  return <Metaads />;
}