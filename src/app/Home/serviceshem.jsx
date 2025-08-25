import { SiAdobeindesign, SiReact, SiGoogleanalytics, SiContentful, SiAffinitydesigner } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const services = [
  {
    title: "UI/UX design",
    description: "Vi skapar användarvänliga och visuellt tilltalande webbupplevelser i Figma.",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Webbutveckling",
    description: "Responsiva, snabba och säkra webbplatser – från WordPress och e-handel till skräddarsydd frontend",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
  },
  {
    title: "SEO & analys",
    description: "Vi ökar din synlighet på Google genom smart SEO med Semrush och Google Analytics.",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Copywriting",
    description: "Vi skriver engagerande och träffsäker text som talar till din målgrupp",
    icon: <SiContentful className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Grafisk design",
    description: "Vi formger visuellt starka uttryck som stärker ditt varumärke",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
  },
  {
    title: "Sociala media",
    description: "Vi hjälper dig att växa och skapa engagemang på rätt plattformar",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6 " aria-hidden="true" />,
  }
];

export default function ServicesHem() {
  return (
    <div className="max-w-8xl  mx-auto px-6 py-20 text-left">
      <h2 className="mb-6">Tools att växa smart</h2>
<p className="mb-6">Vi arbetar med ett användarcentrerat perspektiv där din målgrupp alltid är i fokus. Med rätt balans mellan design, teknik och kommunikation hjälper vi ditt företag att växa digitalt</p>
      <section className="pb-16">
        <div className=" mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div key={index} className="bg-[#F5F5F5] p-5 rounded-[20px] text-left">
      {service.icon}
      <h3 className="text-[28px] text-[#121212] mb-4">{service.title}</h3>
      <p className="text-[#121212] text-lg mb-6">{service.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}
