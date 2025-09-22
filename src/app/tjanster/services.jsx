import { FiCheckCircle } from "react-icons/fi";
import { SiAdobeindesign, SiReact, SiGoogleanalytics,  SiAffinitydesigner } from "react-icons/si";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { RiMetaLine } from "react-icons/ri";
import Script from "next/script";
const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6" />,
    features: ["User research och personas", "Wireframes & prototyper", "Interaktionsdesign", "Designsystem"],
    knapp: "UI/UX design",
    link: "tjanster/ui-ux-design",
  },
  {
    title: "Webbutveckling",
    description: "Responsiva, snabba och säkra webbplatser – från WordPress och e-handel till skräddarsydd frontend",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" />,
    features: ["Moderna frontend-ramverk", "Optimerade Wordpress hemsida", "E-handel med Shopify & WooCommerce", "Skalbarhet & säkerhet"],
    knapp: "webbutveckling",
    link: "tjanster/webbutveckling",
  },
  {
    title: "SEO & webbanalys",
    description: "Vi ökar din synlighet på Google genom smart SEO med Semrush och Google Analytics.",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6" />,
    features: ["Sökordsanalys med Semrush", "On-page & off-page SEO", "Teknisk SEO", "Analys; Google Analytics"],
    knapp: "SEO & webbanalys",
    link: "tjanster/seo-webbanalys",
  },
  {
    title: "Meta Ads",
    description: "Vi marknadsför ditt företag på sociala medier med Meta Ads för att nå din specifika målgrupp.",
    icon: <RiMetaLine className="text-[40px] text-[#3B429F] mb-6" />,
    features: ["Målgruppsinriktad annonsering", "Optimering i realtid", "Kreativt annonsinnehåll", "Resultatdriven strategi"],
    knapp: "meta ads",
    link: "tjanster/meta-ads",
  },
  {
    title: "Logotyp & design",
    description: "Vi formger visuellt starka uttryck som stärker ditt varumärke",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" />,
    features: ["Logotyper", "Visuell identitet & branding", "Marknadsföringsmaterial"],
    knapp: "logotyp & design",
    link: "tjanster/logotyp-och-design",
  },
  {
    title: "Sociala medier & content",
    description: "Vi hjälper dig att växa och skapa engagemang på rätt plattformar",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6" />, 
    features: ["Innehållsskapande & publiceringsplan", "Strategi för sociala medier", "Reels & videoformat"],
    knapp: "SoMe & content",
    link: "tjanster/sociala-medier-content",
  },
];

export default function Services() {
  return (
    <>{/* Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3256787997805806');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* Noscript för Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3256787997805806&ev=PageView&noscript=1"
        />
      </noscript>
    <section className="max-w-8xl mx-auto px-6 pb-20 text-left">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F5F5F5] p-5 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
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
              <Link
                href={service.link}
                className="w-full inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 rounded-full font-[500] transition-colors duration-300 group relative overflow-hidden"
              >
                <span className="inline-flex items-center text-[#F5F5F5] transition-all duration-300 group-hover:-translate-x-4">
                 Läs mer om {service.knapp}
                </span>
                <span className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <HiArrowSmallRight className="text-[#F5F5F5] text-[24px]" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section></>
  );
}


