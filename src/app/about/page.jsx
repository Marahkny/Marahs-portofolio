import Image from 'next/image'; // If you are using Next.js for image optimization, otherwise use a standard <img> tag
import { FiCheckCircle } from "react-icons/fi";
import { LiaArrowRightSolid } from "react-icons/lia";

import Link from "next/link";
export default function About() {
  return (
    <>
    <section className=" text-[#F5F5F5] h-full pt-20 px-6">
      <div className="max-w-8xl mx-auto text-left">
        <h1 className=" mb-10">About Zone 90</h1>


        {/* Section with image and text */}
        <div className="flex flex-col md:flex-row  justify-between items-center gap-10">
        <div className="md:w-1/2 text-left item-start">
          <p className=" mb-10 text-gray-300">
        Zone 90 is a creative consulting service specializing in web & design digital solutions. We help businesses transform their vision into reality through innovative, user-centric solutions. Our mission is to craft seamless, trendsetting, and impactful digital experiences that captivate and engage your audience.
        </p>
            <ul className="space-y-6 ">
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" /> 
                <span className=" font-semibold">UI/UX Design tailored to your brand</span>

              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">Frontend web development</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">SEO optimization and market anlaysis </span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-[20px] mr-3" />
                <span className=" font-semibold">Copywriting</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-start md:justify-center">
          <Image
  src="/photos/progremering.png" // Replace with your image path
  alt="Zone 90 team working"
  width={800} // Remove fixed width
  height={800} // Remove fixed height
  className=" rounded-[20px] "
/>

          
        </div>
</div>


      </div>
    </section>

    <section className="  pb-20 px-6">
  <div className="max-w-6xl  mx-auto text-left">

  <div className=" py-40 ">
        <h2 className=" mb-4  text-center">Zone 90 work by</h2>
        <p className=" text-center text-[24px] ">
        Precision & innovation & excellence
        </p>
      </div>
    <h2 className=" mb-4 ">How we started?</h2>
    
    <div className="space-y-6">
      {/* How We Started */}
      <div >
      
        <p className=" text-left">
        Zone 90 was founded with the vision of helping businesses thrive in the digital age. Our journey began with a shared passion for technology and design. Established in 2025 by Marah, a trained web editor and freelance web developer, Zone 90 was created with the mission of empowering businesses to grow and achieve their goals through innovative digital solutions.
        </p>
      </div>

     
      <div className=" pb-5 ">
        <h3 className=" mb-4 text-[24px] text-left">A full web service</h3>
        <p className=" text-left">
        Zone 90 is a full-service web &design consulting service dedicated to delivering complete digital solutions. From UI/UX design and web development to SEO optimization and content strategy, we provide everything businesses need to establish a strong online presence. Our goal is to create seamless, high-performing, and user-centric digital experiences that drive growth and engagement.
        </p>
      </div>

   
      <div className=" pb-5 ">
        <h3 className=" mb-4 text-[24px]  text-left">A place for your zone</h3>
        <p className=" text-left pb-4">
        At Zone 90, we provide more than just digital solutions—we create a space where your brand can thrive. Our mission is to help businesses establish a strong online presence, connect with their audience, and achieve long-term success.
        </p >
        <p className=" pb-4 ">You’re not just a client; you’re part of the journey. Through collaboration, we ensure you're involved in every step, from concept to launch. With our user-centered approach, you don’t just get a website—you experience the process, provide input, and see real progress.</p>
     <p className=" pb-4 ">We prioritize transparency, creativity, and seamless execution, giving you full control while ensuring results you’re proud of.</p>

<p className=" pb-4 ">Contact us today to start building a website that not only meets your expectations but exceeds them. Let's create something exceptional together!</p>

      </div>
      <div className="group">
      <Link 
        href="/about"
        className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
                   hover:bg-[#2A2F7D] inline-flex items-center gap-2 text-sm w-fit"
      >
        <span className="text-[#F5F5F5]">Our services</span>
        <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px] transition-transform 
                                       duration-300 group-hover:translate-x-2" />
      </Link>
    </div>

    </div>
  </div>
</section>

    </>
  );
}