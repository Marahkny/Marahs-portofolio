import Metaads from "./metaads";

export const metadata = {
  title: "Zone 90 » Meta Ads i Kalmar – nå din målgrupp på sociala medier",
  description:
    "Visa upp ditt företag med Meta Ads i Kalmar. Vi skapar målgruppsanpassade annonser, optimerar i realtid och analyserar resultat för ökad synlighet och försäljning",
  keywords: [
    "Meta Ads i Kalmar", "Sociala medier annonsering", "Digital marknadsföring", "Optimering i realtid", "Kreativt annonsinnehåll"
  ],
  openGraph: {
    title: "Zone 90 – Meta Ads i Kalmar – nå din målgrupp på sociala medier",
    description:
      "Visa upp ditt företag med Meta Ads i Kalmar. Vi skapar målgruppsanpassade annonser, optimerar i realtid och analyserar resultat för ökad synlighet och försäljning",
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