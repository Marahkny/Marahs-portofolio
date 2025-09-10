import GrafiskDesign from "./grafiskdesign";

export const metadata = {
  title: "Zone 90 » Logotyp & design i Kalmar – bygg ditt varumärke",
  description:
    "Vi skapar logotyper och visuell design som stärker ditt varumärke i Kalmar. Elegant, modern och anpassad för sociala medier och marknadsföring.",
  keywords: [
    "Logotyp i Kalmar", "Visuell identitet", "Visuell identitet", "Marknadsföringsmaterial", "Varumärkesdesign"
  ],
  openGraph: {
    title: "Zone 90 – Logotyp & design i Kalmar – bygg ditt varumärke",
    description:
      "Vi skapar logotyper och visuell design som stärker ditt varumärke i Kalmar. Elegant, modern och anpassad för sociala medier och marknadsföring.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/logotyp-och-design",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/logotyp-och-design",
  },
};

export default function Page() {
  return <GrafiskDesign />;
}