import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { TfiFacebook } from "react-icons/tfi";
import Image from 'next/image';
import GradintieFooter from "./gradintietfooter";
export default function Footer() {
  return (
    <footer className=" relative bg-[#F5F5F5]  px-6 pt-[130px]  overflow-hidden rounded-t-[40px]">
    <div className="absolute inset-0 hidden sm:block">
  <GradintieFooter />
</div>

      <div className=" relative z-0 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 pb-20 gap-16">
        
      
        <div>
          <Link href="/" aria-label="Go to homepage">
          <Image
      src="/photos/ZONWAY (1).png"
      alt="Zone 90 logo"
      width={500}  
      height={500} 
      className="w-[40%] h-auto"
    />
          </Link>
        
          <p className="text-[#121212] leading-relaxed pt-5 max-w-md">
          Your digital Zone – web development & design with creative impact
          </p>
          
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Footer Navigation">
          <h4 className="text-xl mb-5 text-[#121212]">More from Zone 90</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link
                href="/service"
                className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Go to services page"
                title="Services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/case"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Go to case studies page"
                title="Case"
              >
                Case
              </Link>
            </li>
            <li>
              <Link
                href="/about"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Learn more about Zone 90"
                title="About"
              >
                About Zone 90
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"                aria-label="Contact Zone 90"
                title="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
        <h4 className="text-xl mb-5 text-[#121212]">Get in touch</h4>
          <p className="text-[#121212]">
            <a
              href="mailto:contact@zone90.se"
              className="text-[#3B429F] font-[500] hover:decoration-[#3B429F]   hover:underline  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Send an email to contact@zone90.se"
              title="Send email"
            >
              contact@zone90.se
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.linkedin.com/company/zone90/"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-2 rounded-full transition transform  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn"
            >
              <FaLinkedinIn className="text-[26px] text-[#3B429F]" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/people/Zone90/61575014166638/"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-2 rounded-full transition transform  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn"
            >
              <TfiFacebook className="text-[26px] text-[#3B429F]" aria-hidden="true" />
            </a>
          </div></div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="pt-2 text-center text-sm text-[#121212]">
        © {new Date().getFullYear()} Zone 90. Created with ♥ by Marah
      </div>
    </footer>
  );
}





