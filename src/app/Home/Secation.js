
import Link from "next/link";
import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Section() {


  return (
  <>
  <div  className="text-[#F5F5F5] py-20 mx-auto">
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
    
    {/* Vänster sektion */}
    <div className="md:w-[40%] px-6 flex flex-col items-start">
      <h2 className="text-left">
        Från vision till verklighet
      </h2>

      <p className="text-left text-gray-300 mt-6 leading-relaxed">
Vi förvandlar din passion och dina idéer till digitala lösningar som gör skillnad. Genom att lyssna noga på din vision skapar vi skräddarsydd webbdesign som stärker ditt varumärke och driver resultat. Vårt mål är att inte bara möta dina behov – utan att överträffa dina förväntningar.      </p>

      <div className="pt-6 w-full">


  <Link
  href="/omzone90"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="Läs mer om zone 90"
    title="vill du veta mer?"
    role="button"
>
  <span
    className="inline-flex  text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Vill du veta mer?
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
  </span>
</Link>


</div>

    </div>

    {/* Höger sektion */}
    <div className="md:w-[60%] flex justify-center">
    <Image
  src="/photos/Zone.png"
  alt="Illustration of digital collaboration"
  width={800} 
  height={600} 

  className="w-full h-auto object-contain rounded-l-[50px] rounded-r-none"
/>
    </div>

  </div>
</div>


<div  className="text-[#F5F5F5] py-20 mx-auto">
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between gap-6">

    {/* Höger sektion - Bild */}
    <div className="md:w-[60%] flex justify-center order-last lg:order-first">
   

<Image
  src="/photos/web-design.jpg"
  alt="working"
  width={800} 
  height={600} 

  loading="eager"
  className="w-full h-auto mx-auto object-contain rounded-r-[50px] rounded-l-none"
/>

    </div>

    {/* Vänster sektion - Text */}
    <div className="md:w-[40%] px-6 flex flex-col justify-center">
      <h2 className="text-left ">
       Resultat som syns
      </h2>

      <p className="text-left text-gray-300 pt-6 leading-relaxed">
Zone 90 levererar högkvalitativa digitala lösningar inom webbutveckling och design. Med expertis inom webbutveckling, UI/UX-design, SEO och grafisk design skapar vi upplevelser som gör intryck och ger resultat. Oavsett om det handlar om en stilren webbplats, en avancerad plattform eller en skräddarsydd digital lösning.      </p>

      <div className=" pt-6">
 

  <Link
  href="/tjanster"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="se våra tjänster"
  title=" Våra tjänster"
  role="button"
>
  <span
    className="inline-flex text-[#F5F5F5] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Våra tjänster
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[24px] items-center" />
  </span>
</Link>
      </div>
    </div>

  </div>
</div>

    </>
  );
}



