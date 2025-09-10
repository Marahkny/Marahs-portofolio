import { useState } from "react";

import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "Vad kostar en hemsida?",
    answer:
      "Priserna börjar från 8 000 kr exkl. moms och varierar beroende på vilka funktioner och lösningar ni vill ha. Vi erbjuder även paketpriser om ni vill kombinera hemsidan med sociala medier och Meta-annonsering för en komplett digital lösning.",
  },


  {
    question: "Erbjuder ni en helhetslösning med marknadsföring?",
    answer:
      "Ja, absolut! Vi kan ta hand om både design, utveckling och marknadsföring för att säkerställa att er digitala närvaro blir effektiv och professionell.",
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