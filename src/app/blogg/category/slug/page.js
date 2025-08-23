import CategoryPage from "../CategoryPage";

export const metadata = {
  title: "Zone 90 » Blogginlägg ",
  description:
    "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
  openGraph: {
    title: "Zone 90 – Blogginlägg ",
    description:
      "Kontakta Zone 90 – vi finns här för att hjälpa ditt företag växa. Hör av dig för webbutveckling, SEO och digital strategi.",
    images: ["/photos/logo90.png"],
    type: "website",
    url: "https://zone90.se/categorypage",
  },
  alternates: {
    canonical: "https://zone90.se/blogg/categorypage",
  },
    other: {
  keywords: "Zone 90 Blogginlägg "
}
};

export default function Page() {
  return <CategoryPage />;
}
