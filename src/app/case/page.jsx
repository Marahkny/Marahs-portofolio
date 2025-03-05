import Image from 'next/image'; 



export default function About() {
    const cards = Array(4).fill({
        title: "Framsteg förening",
        category: "UI/UX Design",
        tag: "Brand",
        image: "/photos/project 2.png",
      });
  return (
    <>
     <section className=" text-[#F5F5F5] h-full pt-40 pb-10 px-6">
       <div className="max-w-8xl mx-auto text-left">
         <h1 className=" mb-10">Some av our case</h1>
<p>We continuously update our cases. Reach out for a digital fika  to pitch your idea!</p>
       </div>
     </section>
     <div className="grid grid-cols-2 gap-6 p-6  min-h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className=" rounded-[20px] overflow-hidden "
        >
         
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto rounded-[20px]"
          />
           <div className="py-8">
            <h2 className="text-[24px]  pb-2 font-semibold">{card.title}</h2>
            <p className="text-text-gray-300 text-sm">{card.category} <span className="text-text-gray-300 pl-4 text-sm">{card.tag}</span></p>
          </div>
        </div>
      ))}
    </div>

    </>
  );
}
// pages/index.js


