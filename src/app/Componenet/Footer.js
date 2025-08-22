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
      className="w-[50%] h-auto"
    />
          </Link>
        
          <p className="text-[#121212] leading-relaxed pt-5 max-w-md">
        Din Zone för smarta webb- och designlösningar i Stockholm. Grundat 2025 av Marah med fokus på moderna, optimerade och trygga lösningar.
          </p>
          
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Footer Navigation">
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                href="/tjanster"
                className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Läs mer om våra tjanster"
                title="Våra tjänster"
              >
                Tjänster
              </Link>
            </li>
            <li>
              <Link
                href="/case"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Se om om kundcase"
                title="Case"
              >
                Kundcase
              </Link>
            </li>
            <li>
              <Link
                href="/omzone90"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Läs mer om Zone 90"
                title="om zone 90"
              >
                Om Zone 90
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
 className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full text-[#121212] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"                aria-label="Contact Zone 90"
                title="Kontakt"
              >
                Kontakt
              </Link>
            </li>
                        <li>

            </li>
          </ul>
        </nav>
        <div>
        <h4 className="text-xl mb-5 text-[#121212]">Hör av dig </h4>
          <p className="text-[#121212]">
            <a
              href="mailto:contact@zone90.se"
              className="text-[#3B429F] font-[500] hover:decoration-[#3B429F]   hover:underline  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Send an email to contact@zone90.se"
              title="Skicka e-post"
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
              title="Facebook"
            >
              <TfiFacebook className="text-[26px] text-[#3B429F]" aria-hidden="true" />
            </a>
          </div></div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="py-2 text-center text-[11px] text-[#3B429F]">
        © {new Date().getFullYear()} Zone 90. Created with ♥ by Marah
      </div>
    </footer>
  );
}





