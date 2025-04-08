import { FaLinkedin, FaGithub } from "react-icons/fa";
import GradientToFooter from "./gradienttofooter";

export default function Footer() {
  return (
    <footer className=" relative bg-[#121212] text-[#F5F5F5] pt-20 px-6 overflow-hidden">
     
      <div className="relative   max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Kontakt */}
        <div>
          <img src="/photos/Logo.png" alt="Logo" className="w-[40%] pb-10" />
          <p className="text-gray-300">We specialize in all aspects of web development and design, driven by a creative mindset.</p>
          <p className="text-gray-300 mt-4"> <a href="mailto:contact@zone90.com" className=" hover:text-[#F5C518]">Marahknyfaty@outlook.com</a></p>
          <div className="flex gap-6 pt-10 justify-start md:justify-start">
            <a href="https://www.linkedin.com/in/marah-kn/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[24px] hover:text-[#B8336A] transition duration-300" />
            </a>
           
          </div>
        </div>

        {/* Länkar */}
        <div >
          <h5 className="font-normal text-[20px] mb-3">Services</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline hover:decoration-[#F5F5F5]">UI/UX Design</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#F5F5F5]">Web Development</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#F5F5F5]">SEO Optimization</a></li>
            <li><a href="#" className="hover:underline hover:decoration-[#F5F5F5]">Copywriting</a></li>
          </ul>
        </div>

        {/* Case Studies & Sociala Medier */}
        <div>
          <h5 className="font-normal text-[20px] mb-3">About</h5>
          <ul className="space-y-3">
            <li><a href="/case" className="hover:underline hover:decoration-[#F5F5F5]">Case</a></li>
            <li><a href="/about" className="hover:underline hover:decoration-[#F5F5F5]">About Zone 90</a></li>
            <li><a href="/contact" className="hover:underline hover:decoration-[#F5F5F5]">Contact</a></li>
          </ul>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-10 mb-2 text-gray-300 text-sm">
        {new Date().getFullYear()} © Zone 90. Made by Marah kn
      </div>
    </footer>
  );
}

