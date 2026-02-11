import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  {
    title: "Tar fram krav och koncept",
    description:
      "Vi samlar in dina krav och mål för att skapa ett tydligt koncept som passar just ditt projekt.",
  },
  {
    title: "Gör ett utkast av hemsidan",
    description:
      "Vi skapar en visuell layout med font, färger, ikoner och struktur för hur sidan ska se ut och fungera.",
  },
  {
    title: "Testar & justerar",
    description:
      "Vi granskar och optimerar designen, säkerställer användarvänlighet och gör nödvändiga justeringar.",
  },
  {
    title: "Levererar designen",
    description:
      "Vi levererar en färdig UI/UX-design redo för utveckling med alla komponenter och designsystem inkluderade.",
  },
];

export default function Stegs() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-left mb-10 text-[#121212]">
          Vår process steg för steg
        </h2>

        {/* Mobile layout */}
        <ol className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-[#393E46] p-6 rounded-[15px]"
            >
              <h3 className=" mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-[#F5F5F5]">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Desktop layout - alla kol lika stora */}
        <ol className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="relative flex flex-col bg-[#393E46] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-[24px] text-[#F5F5F5] font-semibold mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-[#F5F5F5] flex-grow">{step.description}</p>

              {/* Pilar mellan boxarna */}
              {index < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 right-[-25px] transform -translate-y-1/2 text-[#E95D0F] text-[24px]">
                  <MdOutlineKeyboardDoubleArrowRight className="text-[24px]"/>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

