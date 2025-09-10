import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  {
    title: "Impmntera designen från Figma",
    description:
      "Efter att ni har valt designen implementerar vi lösningen i WordPress eller som hårdkodad hemsida. Vi anpassar WordPress-teamet efter era behov.",
  },
  {
    title: "Gör hemsidan klar och får feedback",
    description:
      "Ni är delaktiga i processen – vi skapar hemsidan och ni får se resultatet löpande samt ge feedback under arbetets gång.",
  },
  {
    title: "Levererar hemsidan",
    description:
      "Vi levererar en färdig hemsida och erbjuder alltid en månads gratis support så att ni känner er trygga. Därefter guidar vi er i hur ni kan uppdatera hemsidan själva eller erbjuder fortsatt support enligt avtal.",
  },
];

export default function Steg() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-left text-[#121212] mb-12">
          Vår process steg för steg
        </h2>

        {/* Mobile layout */}
        <ol className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-[#F5F5F5] p-6 rounded-xl shadow-md"
            >
              <h3 className=" mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-[#121212]">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Desktop layout - alla kol lika stora */}
        <ol className="hidden md:grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="relative flex flex-col bg-[#3B429F] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-[24px] text-[#F5F5F5] font-semibold mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-[#F5F5F5] flex-grow">{step.description}</p>

              {/* Pilar mellan boxarna */}
              {index < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 right-[-25px] transform -translate-y-1/2 text-[#3B429F] text-[24px]">
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
