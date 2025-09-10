import UXdesign from "./uxdesign";

export const metadata = {
  title: "Zone 90 » UI/UX design i Kalmar",
  description:
    "Zone 90 erbjuder professionell UI/UX-design i Kalmar. Vi skapar användarvänliga, visuellt tilltalande och konverterande digitala upplevelser för webb och appar.",
  keywords: [
    "UI/UX design i Kalmar","användarvänlig upplevelse", "Vad betyder UI/UX design?", "interaktionsdesign", "figma"
  ],
  openGraph: {
    title: "Zone 90 – UI/UX design i Kalmar",
    description:
      "Zone 90 erbjuder professionell UI/UX-design i Kalmar. Vi skapar användarvänliga, visuellt tilltalande och konverterande digitala upplevelser för webb och appar.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/tjanster/ui-ux-design",
  },
  icons: {
    icon: "/photos/logo90.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://zone90.se/tjanster/ui-ux-design",
  },
};

export default function Page() {
  return <UXdesign />;
}