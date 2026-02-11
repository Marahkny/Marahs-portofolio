import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const steps = [
  {
    title: "On-page SEO",
    description:
      "On-page SEO handlar om att förbättra själva innehållet på din webbplats. Genom att arbeta med texter, rubriker, bilder och struktur gör vi det enklare för både besökare och sökmotorer att förstå vad sidan handlar om.",
  },
  {
    title: "Off-page SEO",
    description:
      "Off-page SEO bygger vidare på detta genom att skapa förtroende utanför själva webbplatsen, till exempel genom länkar från andra relevanta sidor, positiva omdömen och en stark närvaro online.",
  },
  {
    title: "Teknisk SEO",
    description:
      "Teknisk SEO är grunden som gör allt möjligt – här ser vi till att din hemsida laddar snabbt, är säker, mobilanpassad och följer de tekniska krav som Google ställer för att kunna ge dig en bättre placering i sökresultaten.",
  },
];

export default function Steg() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-left text-[#121212] mb-12">
       Steg för en bra SEO
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
        <div className="bg-[#393E46]  p-6 rounded-xl shadow-md  p-6 ">
          <h3 id="analytics-heading" className="text-[24px] mb-4">
            Analys; Google Analytics
          </h3>

          <p className="text-base md:text-lg text-[#F5F5F5] leading-relaxed">
            För att arbeta smart med SEO räcker det inte att bara optimera innehållet — du
            måste också förstå hur besökarna använder din webbplats. Google Analytics ger
            värdefulla insikter: vilka sidor som lockar trafik, hur länge besökare stannar
            och var de lämnar. Med den datan kan vi förbättra innehåll och struktur. När
            besökare stannar längre och hittar det de söker tolkar Google det som relevans —
            vilket kan hjälpa din sida att ranka högre.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
}
