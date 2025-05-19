
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
        Your zone, our focus
      </h2>

      <p className="text-left text-gray-300 mt-6 leading-relaxed">
        We turn your passion and ideas into powerful digital products. We listen closely to your vision and work tirelessly to bring it to life in a way that helps your brand shine and succeed. Our focus is on creating impactful, tailored solutions that not only meet your needs but exceed your expectations.
      </p>

      <div className="pt-6 w-full">


  <Link
  href="/about"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="Learn more about Zone 90"
    title="Want to know more?"
    role="button"
>
  <span
    className="inline-flex items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Want to know more?
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#d1d5db] text-[26px] items-center" />
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
        We bring it
      </h2>

      <p className="text-left text-gray-300 pt-6 leading-relaxed">
        Zone 90 delivers high-quality digital solutions in web development and design. Our expertise spans web development, UI/UX design, SEO, and graphic design—creating impactful, results-driven experiences. Whether it's a sleek website, a complex platform, or a custom  digital solution, we combine creativity and precision to bring your vision to life.
      </p>

      <div className=" pt-6">
 

  <Link
  href="/service"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#3B429F] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="Explore our services"
  title="Our services"
  role="button"
>
  <span
    className="inline-flex items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
     Our services
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#d1d5db] text-[26px] items-center" />
  </span>
</Link>
      </div>
    </div>

  </div>
</div>

    </>
  );
}



