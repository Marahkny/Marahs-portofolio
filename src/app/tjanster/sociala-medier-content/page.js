import SocialaMeider from "./socialamedier";

export const metadata = {
  title: "Zone 90 » Sociala medier (SoMe) & content i Norrköping & Linköping ",
  description:
    "Vi skapar engagerande innehåll och strategier för sociala medier i Norrköping & Linköping. Content, grafik och video som når din målgrupp.",
  keywords: [
    "Sociala medier i Norrköping & Linköping", "Sociala medier-strategi", "Digital marknadsföring", "Reels & videoformat", "Content optimerat för SEO"
  ],
  openGraph: {
    title: "Zone 90 – Sociala medier (SoMe) & content i Norrköping & Linköping",
    description:
      "Vi skapar engagerande innehåll och strategier för sociala medier i Norrköping & Linköping. Content, grafik och video som når din målgrupp.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/sociala-medier-content",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/sociala-medier-content",
  },
};

export default function Page() {
  return <SocialaMeider />;
}