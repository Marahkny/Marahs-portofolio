import Link from "next/link";
import { SiAdobeindesign, SiReact, SiGoogleanalytics , SiAffinitydesigner } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

import { RiMetaLine } from "react-icons/ri";
const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma.",
    icon: <SiAdobeindesign className="text-[50px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/ui-ux-design",
  },
  {
    title: "Webbutveckling",
    description: "Responsiva, snabba och säkra webbplatser – från WordPress och e-handel till skräddarsydd frontend",
    icon: <SiReact className="text-[50px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/webbutveckling",
  },
  {
    title: "SEO & webbanalys",
    description: "Vi ökar din synlighet på Google genom smart SEO med Semrush och Google Analytics.",
    icon: <SiGoogleanalytics className="text-[50px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/seo-webbanalys",
  },
  {
    title: "Meta Ads",
    description: "Vi marknadsför ditt företag på sociala medier med Meta Ads för att nå din specifika målgrupp.",
    icon: <RiMetaLine className="text-[50px] text-[#3B429F] mb-6" aria-hidden="true" />,
    link: "tjanster/meta-ads",
  },
  
];

export default function ServicesHem() {
  return (
   <div className="max-w-8xl mx-auto px-6 sm:py-16 lg:py-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="mb-6">Tools att växa smart</h2>
    <p className="mb-20">
      Vi arbetar med ett användarcentrerat perspektiv där din målgrupp alltid är i fokus. 
      Med rätt balans mellan design, teknik och kommunikation hjälper vi ditt företag att växa digitalt
    </p>
  </div>
      <section >
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 sm:gap-4">
            {services.map((service, index) => (
              <Link href={`/${service.link}`} key={index}>
                <div className="relative flex flex-col justify-between  text-left  text-[#F5F5F5] transition-transform cursor-pointer  h-full min-h-[250px] overflow-hidden group hover:scale-105">
                  <div className="relative z-10">
                    {service.icon}
                    <h3 className="text-[28px] text-[#F5F5F5] mb-4">{service.title}</h3>
                    <p className="text-lg text-[#F5F5F5]">{service.description}</p>
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


