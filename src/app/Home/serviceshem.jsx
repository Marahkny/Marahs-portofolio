import Link from "next/link";
import { SiAdobeindesign, SiReact, SiGoogleanalytics , SiAffinitydesigner } from "react-icons/si";
import { HiArrowSmallRight } from "react-icons/hi2";

import { RiMetaLine } from "react-icons/ri";
const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma.",
    icon: <SiAdobeindesign className="text-[50px] text-[#E95D0F] mb-6" aria-hidden="true" />,
    link: "tjanster/ui-ux-design",
  },
  {
    title: "Webbutveckling",
    description: "Responsiva, snabba och säkra webbplatser – från WordPress och e-handel till skräddarsydd frontend",
    icon: <SiReact className="text-[50px] text-[#E95D0F] mb-6" aria-hidden="true" />,
    link: "tjanster/webbutveckling",
  },
  {
    title: "SEO & webbanalys",
    description: "Vi ökar din synlighet på Google genom smart SEO med Semrush och GA4.",
    icon: <SiGoogleanalytics className="text-[50px] text-[#E95D0F] mb-6" aria-hidden="true" />,
    link: "tjanster/seo-webbanalys",
  },
  {
    title: "Meta Ads",
    description: "Vi marknadsför ditt företag på sociala medier med Meta Ads för att nå din specifika målgrupp.",
    icon: <RiMetaLine className="text-[50px] text-[#E95D0F] mb-6" aria-hidden="true" />,
    link: "tjanster/meta-ads",
  },
  
];

export default function ServicesHem() {
  return (
   <div className="max-w-8xl mx-auto px-6 pt-0 pb-20 sm:pt-20 sm:pb-20  ">
  <div className="max-w-7xl mx-auto mb-8 text-left">
    <h2 className="mb-6">Tools att växa smart</h2>
    <p >
      Vi arbetar med ett användarcentrerat perspektiv där din målgrupp alltid är i fokus. 
      Med rätt balans mellan design, teknik och kommunikation hjälper vi ditt företag att växa digitalt
    </p>
  </div>
      <section >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link href={`/${service.link}`} key={index}>
                <div className="relative flex flex-col justify-between border border-[#393E46] rounded-[15px] p-6  text-left  text-[#F5F5F5] transition-transform cursor-pointer  h-full min-h-[250px] overflow-hidden group hover:scale-105">
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
<div className="flex justify-center items-center">
      <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative mt-8 inline-flex items-center justify-center bg-[#F5F5F5] py-4 px-10 rounded-full
             group transition-colors duration-300 overflow-hidden"
 aria-label="kom i kontkakt med oss"
              title="Kontakta oss"
              role="button"
>
  <span
    className="inline-flex text-[#E95D0F] font-[600] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
   Alla tjänster

  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-5 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#E95D0F] text-[24px] items-center" />
  </span>
</Link>
</div>
    </div>
  );
}


