import { FiCheckCircle } from "react-icons/fi";
import { SiAdobeindesign, SiReact, SiGoogleanalytics, SiContentful, SiAffinitydesigner } from "react-icons/si";

import { FaFacebookF } from "react-icons/fa";
const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "User research och personas",
      "Wireframes & prototyper",
      "Interaktionsdesign",
      "Designsystem"
    ],
    knapp: "ui/ux design"
  },
  {
    title: "Webbutveckling",
    description: "Vi bygger responsiva och högpresterande frontend-lösningar och Wordpress webbplatser",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Moderna frontend-ramverk",
      "Responsiv design",
      "Prestandaoptimering",
      "Skalbarhet & säkerhet"
    ],
    knapp: "web development"
  },
  {
    title: "SEO & analys",
    description: "Vi hjälper dig att klättra i sökresultaten och förbättra din digitala synlighet",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Sökordsanalys",
      "On-page SEO",
      "Teknisk SEO",
      "Analys & rapportering"
    ],
    knapp: "seo & analysis"
  },
  {
    title: "Copywriting",
    description: "Vi skapar innehåll som engagerar och påverkar din målgrupp",
    icon: <SiContentful className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "SEO-optimerade texter",
      "Varumärkesberättande",
      "Säljdrivande copy",
      "Redigering & korrektur"
    ],
    knapp: "copywriting"
  },
  {
    title: "Grafisk design",
    description: "We create visually stunning designs that enhance brand identity",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Logotyper",
      "Visuell identitet & branding",
      "Marknadsföringsmaterial",
      "UI-grafik"
    ],
    knapp: "Grafisk design"
  },
  {
    title: "Sociala Media",
    description: "Vi hjälper dig att växa på sociala medier med strategiskt och engagerande innehåll",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6" />, 
    features: [
      "Innehållsskapande & publiceringsplan",
      "Strategi för sociala medier",
      "Reels & videoformat",
      "Community management"
    ],
    knapp: "social media"
  }
  
];

export default function Services() {
  return (
    <section className="max-w-8xl mx-auto px-6 pb-20 text-left">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F5F5F5] p-5 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
              {service.icon}
              <h3 className="text-[28px] text-[#121212] mb-4 font-semibold">{service.title}</h3>
              <p className="text-[#121212] text-lg mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <FiCheckCircle className="text-[20px] text-[#3B429F]" />
                    <span className="text-[#121212] font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="group">
              {/*
  <Link
    href={`/${service.knapp}`}
    className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
             group-hover:bg-[#2A2F7D] flex items-center justify-between w-full"
  >
    <span className="text-[#F5F5F5]">More about {service.knapp}</span>
    <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform 
                                   duration-300 group-hover:translate-x-2" />
  </Link>
  */}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

