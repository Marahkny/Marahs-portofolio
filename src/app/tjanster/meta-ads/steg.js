import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  {
    title: "Vi optimerar annonsinnehållet",
    description:
      "Vi skapar engagerande och målgruppsanpassade annonser med rätt bilder, texter och budskap. Ett bra annonsinnehåll gör att din målgrupp stannar upp, klickar och vill veta mer om ditt företag.",
  },
  {
    title: "Vi följer annonseringen",
    description:
      "Genom att jämföra olika varianter av annonser (A/B-testning) kan vi se vad som fungerar bäst – till exempel olika rubriker, bilder eller CTA-knappar. Det hjälper oss att maximera klickfrekvensen och se till att din annonsbudget används på rätt sätt.",
  },
  {
    title: "Vi analyserar resultaten",
    description:
      "Efter kampanjen analyserar vi utfallet och delar insikter med dig. Resultaten kan inte bara förbättra kommande annonser, utan också ge värdefull kunskap om hur din hemsida kan utvecklas för att omvandla fler besökare till kunder.",
  },
];

export default function Steg() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-left text-[#121212] mb-12">
       Vår process steg för steg
        </h2>

        {/* Mobile layout */}
        <ol className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-[#393E46] p-6 rounded-xl shadow-md"
            >
              <h3 className="text-[24px] text-[#F5F5F5] mb-2">
             {index + 1}.   {step.title}
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
             {index + 1}.  {step.title}
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
