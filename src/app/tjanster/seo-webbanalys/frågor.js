import { useState } from "react";

import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "Hur lång tid tar det att se resultat med SEO?",
    answer:
      "SEO är en långsiktig strategi och resultat kommer inte över en natt. Oftast tar det mellan 3–6 månader att börja se märkbara förbättringar i ranking, beroende på konkurrens, bransch och hur väl webbplatsen är optimerad.",
  },


  {
    question: "Varför är SEO viktigt för mitt företag?",
    answer:
      "SEO gör att dina kunder hittar dig när de söker på Google efter produkter eller tjänster du erbjuder. En väloptimerad sida ger mer organisk trafik, högre trovärdighet och fler affärsmöjligheter. Eftersom de flesta klickar på de första resultaten på Google ökar chanserna markant att nå nya kunder om du rankar högt.",
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
            className="bg-[#F5F5F5] p-5 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[24px] text-[#3B429F]">{faq.question}</h3>
              {openIndex === index ? (
                <MdOutlineKeyboardDoubleArrowUp className="text-2xl text-[#3B429F]" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown className="text-2xl text-[#3B429F]" />
              )}
            </div>
            {openIndex === index && <p className="mt-4 text-[#121212]">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section></div>
  );
}