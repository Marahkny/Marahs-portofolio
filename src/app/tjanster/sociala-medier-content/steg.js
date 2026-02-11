import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  {
    title: "Innehållsproduktion",
    description:
      "Vi skapar innehåll optimerat för både sociala medier och sökmotorer – så ditt företag syns och blir hittat av rätt personer i Kalmar.",
  },
  {
    title: "Målgruppsfokus",
    description:
      "Vi levererar content som träffar rätt – anpassat för din målgrupp, som engagerar och får följare att interagera med ditt varumärke.",
  },
  {
    title: "Sociala medier-strategi",
    description:
      "Från planering till publicering – vi tar fram en smart strategi som gör att ditt företag växer och sticker ut i flödena.",
  },
];

export default function Steg() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-left text-[#121212] mb-12">
        Sociala meider (SoMe)
        </h2>

        {/* Mobile layout */}
        <ol className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-[#393E46] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-[24px] text-[#F5F5F5] mb-2">
                {step.title}
              </h3>
              <p className="text-[#F5F5F5]">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Desktop layout - alla kol lika stora */}
        <ol className="hidden md:grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="relative flex flex-col bg-[#393E46] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-[24px] text-[#F5F5F5]  mb-2">
               {step.title}
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
      <section aria-labelledby="analytics-heading" className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#393E46]  p-6 rounded-xl shadow-md  md:p-12 ">
          <h3 id="analytics-heading" className="text-[24px] mb-4">
           Kreativt & engagerande innehåll
          </h3>

          <p className="text-base text-[#F5F5F5] md:text-lg leading-relaxed">
          Vi skapar content som fångar uppmärksamhet, berättar din historia och gör dina sociala medier levande och inspirerande.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
}
