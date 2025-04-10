import { SiAdobeindesign, SiReact, SiGoogleanalytics, SiContentful, SiAffinitydesigner } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const services = [
  {
    title: "UI/UX design",
    description: "We create user-friendly and visually compelling web experiences",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Web development",
    description: "We build responsive and high-performing frontend solutions",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
  },
  {
    title: "SEO & Analysis",
    description: "We help you rank higher and improve your online visibility",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Copywriting",
    description: "We craft engaging and impactful content that resonates with your audience",
    icon: <SiContentful className="text-[40px] text-[#3B429F] mb-6"  aria-hidden="true" />,
  },
  {
    title: "Graphic design",
    description: "We create visually stunning designs that enhance brand identity",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" aria-hidden="true" />,
  },
  {
    title: "Social media",
    description: "We help you grow and engage your audience on social media",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6 " aria-hidden="true" />,
  }
];

export default function ServicesHem() {
  return (
    <div className="max-w-8xl  mx-auto px-6 py-20 text-left">
      <h2 className="mb-6">Tools to make your zone shine</h2>
<p className="mb-6">We work with web approach, delivering user-centered design by making users an integral part of the process.</p>
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
