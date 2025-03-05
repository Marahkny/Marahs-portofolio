import { FiCheckCircle } from "react-icons/fi";
import { SiAdobeindesign, SiReact, SiGoogleanalytics, SiContentful, SiAffinitydesigner } from "react-icons/si";
import Link from "next/link";
import { LiaArrowRightSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
const services = [
  {
    title: "UI/UX design",
    description: "We create user-friendly and visually compelling web experiences",
    icon: <SiAdobeindesign className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Interaction Design",
      "Design system"
    ],
    knapp: "ui/ux design"
  },
  {
    title: "Web development",
    description: "We build responsive and high-performing frontend solutions",
    icon: <SiReact className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Modern frontend frameworks",
      "Responsive design",
      "Performance optimization",
      "Scalability and security"
    ],
    knapp: "web development"
  },
  {
    title: "SEO & analysis",
    description: "We help you rank higher and improve your online visibility",
    icon: <SiGoogleanalytics className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Analytics & reporting"
    ],
    knapp: "seo & analysis"
  },
  {
    title: "Copywriting",
    description: "We craft engaging and impactful content that resonates with your audience",
    icon: <SiContentful className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "SEO-friendly content",
      "Brand storytelling",
      "Conversion-focused writing",
      "Editing & proofreading"
    ],
    knapp: "copywriting"
  },
  {
    title: "Graphic design",
    description: "We create visually stunning designs that enhance brand identity",
    icon: <SiAffinitydesigner className="text-[40px] text-[#3B429F] mb-6" />,
    features: [
      "Logos ",
      "Branding",
      "Marketing materials",
      "UI graphics"
    ],
    knapp: "graphic design"
  },
  {
    title: "Social Media",
    description: "We help you grow your brand with engaging content and strategic marketing.",
    icon: <FaFacebookF className="text-[40px] text-[#3B429F] mb-6" />, 
    features: [
      "Content creation & scheduling",
      "Social media strategy",
      "Reels",
      "Community management"
    ],
    knapp: "social media"
  }
  
];

export default function Services() {
  return (
    <section className="max-w-8xl mx-auto px-6 pb-20 text-left">
      <div className="container mx-auto">
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
  <Link
    href={`/${service.knapp}`}
    className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
             group-hover:bg-[#2A2F7D] flex items-center justify-between w-full"
  >
    <span className="text-[#F5F5F5]">More about {service.knapp}</span>
    <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform 
                                   duration-300 group-hover:translate-x-2" />
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

