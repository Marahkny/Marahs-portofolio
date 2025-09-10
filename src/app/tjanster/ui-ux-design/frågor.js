import { useState } from "react";

import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "Vad betyder UI/UX design?",
    answer:
      "UI (User Interface) handlar om hur en produkt ser ut och känns, medan UX (User Experience) handlar om hur användaren upplever produkten. Tillsammans skapar de en användarvänlig och effektiv digital upplevelse.",
  },
  {
    question: "Hur kan en design i Figma hjälpa er?",
    answer:
      "Figma används för att skapa prototyper och visuella designs som kan testas innan utveckling. Det sparar tid, pengar och säkerställer att slutprodukten motsvarar era behov och mål. När designen är klar erbjuder vi lösningar som implementeras antingen i WordPress eller som hårdkodad hemsida med Next.js och React.js.",
  },

  {
    question: "Hur lång tid tar det att designa en webbplats?",
    answer:
      "Tiden varierar beroende på projektets komplexitet. En enklare webbplats kan ta några dagar, medan mer komplexa lösningar kan ta flera veckor. Vi planerar alltid med tydliga milstolpar.",
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
