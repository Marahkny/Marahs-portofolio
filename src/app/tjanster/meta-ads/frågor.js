import { useState } from "react";

import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "Vad kostar det att annonsera med Meta Ads?",
    answer:
      "Kostnaden beror på din budget och målgrupp. Du kan börja redan från några hundralappar i veckan, men ju större budget du har desto fler personer kan du nå. Vi hjälper dig att sätta en strategi så att du får ut maximalt av varje krona.",
  },


  {
    question: "Hur vet jag om annonserna fungerar?",
    answer:
      "Med Meta Ads kan vi följa allt i realtid – från hur många som sett annonsen, till klick och konverteringar på din hemsida. Vi gör även A/B-tester för att se vilken annons som ger bäst resultat, så du får tydliga siffror på vad som fungerar.",
  },
  {
    question: "Kan jag rikta annonserna till rätt målgrupp?",
    answer:
      "Ja! En av de största fördelarna med Meta Ads är att vi kan rikta annonserna mot specifika målgrupper baserat på ålder, plats, intressen och beteenden. Det gör att du inte slösar pengar på fel personer utan når de som faktiskt är intresserade av dina tjänster eller produkter.",
  },

];

export default function Frågor() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5F5F5]">
    <section className="max-w-4xl  mx-auto px-6 py-20">
      <h2 className=" text-center text-[#121212] mb-12">Vanliga frågor </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#393E46] p-5 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[24px] ">{faq.question}</h3>
              {openIndex === index ? (
                <MdOutlineKeyboardDoubleArrowUp className="text-2xl text-[#E95D0F]" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown className="text-2xl text-[#E95D0F]" />
              )}
            </div>
            {openIndex === index && <p className="mt-4 ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section></div>
  );
}