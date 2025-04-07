import Image from 'next/image'; // If you are using Next.js for image optimization, otherwise use a standard <img> tag
import Services from './services';
import { LiaArrowRightSolid } from "react-icons/lia";
import Link from "next/link";
import Zone90Section from '../Home/zone90secation';


export default function About() {
  return (
    <>
     <section className=" text-[#F5F5F5] h-full py-20 px-6">
       <div className="max-w-8xl mx-auto text-left">
         <h1 className=" mb-10">Our services</h1>
 
 
         {/* Section with image and text */}
         <div className="flex flex-col md:flex-row  justify-between items-center gap-10">
         <div className="md:w-1/2 text-left item-start">
           <p className=" mb-10 text-gray-300">
           From intuitive UI/UX design to seamless web development, effective SEO, and compelling content, we ensure that every step of your digital journey is optimized for success. Need a digital service that stands out? Want to attract more customers and improve your online visibility? We help you turn ideas into impactful digital experiences that drive real results.         </p>
         <div className="group">
      <Link 
        href="/about"
        className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
                   hover:bg-[#2A2F7D] inline-flex items-center gap-2 text-sm w-fit"
      >
        <span className="text-[#F5F5F5]">Contact us</span>
        <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform 
                                       duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
           </div>
           <div className="md:w-1/2 flex justify-start md:justify-center">
           <Image
   src="/photos/services.jpg" // Replace with your image path
   alt="Zone 90 team working"
   width={800} // Remove fixed width
   height={800} // Remove fixed height
   
   className=" rounded-[20px] "
 />
 
           
         </div>

 </div>
 
 
       </div>
     </section>
<Services />
<Zone90Section />
    </>
  );
}