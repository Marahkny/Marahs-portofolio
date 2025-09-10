import Link from "next/link";
import { SiAdobeindesign, SiReact, SiGoogleanalytics , SiAffinitydesigner } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

import { RiMetaLine } from "react-icons/ri";
const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma.",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/ui-ux-design",
  },
  {
    title: "Webbutveckling",
    description: "Responsiva, snabba och säkra webbplatser – från WordPress och e-handel till skräddarsydd frontend",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/webbutveckling",
  },
  {
    title: "SEO & webbanalys",
    description: "Vi ökar din synlighet på Google genom smart SEO med Semrush och Google Analytics.",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/seo-webbanalys",
  },
  {
    title: "Meta Ads",
    description: "Vi marknadsför ditt företag på sociala medier med Meta Ads för att nå din specifika målgrupp.",
    icon: <RiMetaLine className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/meta-ads",
  },
  {
    title: "Logotyp & design",
    description: "Vi formger visuellt starka uttryck som stärker ditt varumärke",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/logotyp-och-design",
  },
  {
    title: "Sociala medier & content",
    description: "Vi hjälper dig att växa och skapa engagemang på rätt plattformar",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/sociala-medier-content",
  },
];

export default function ServicesHem() {
  return (
    <div className="max-w-8xl mx-auto px-6 py-20 text-left">
      <h2 className="mb-6">Tools att växa smart</h2>
      <p className="mb-6">
        Vi arbetar med ett användarcentrerat perspektiv där din målgrupp alltid är i fokus. Med rätt balans mellan design, teknik och kommunikation hjälper vi ditt företag att växa digitalt
      </p>
      <section className="pb-16">
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href={`/${service.link}`} key={index}>
                <div className="relative flex flex-col justify-between p-5 rounded-[20px] text-left bg-[#F5F5F5] text-[#121212] transition-transform cursor-pointer shadow-lg h-full min-h-[220px] overflow-hidden group hover:scale-105">
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-[28px] text-[#121212] mb-4">{service.title}</h3>
                    <p className="text-lg text-[#121212]">{service.description}</p>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


