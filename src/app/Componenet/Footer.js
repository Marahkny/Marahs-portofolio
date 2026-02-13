import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { TfiFacebook } from "react-icons/tfi";
import Image from 'next/image';
import Zone90Section from "../Home/zone90secation";
export default function Footer() {
  return (
    <footer className=" relative mt-20  overflow-hidden">
      <Zone90Section  />
      <div className="bg-[#F5F5F5] ">


   <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-[130px] gap-10">
  
  {/* Kolumn 1 */}
  <div className="flex flex-col items-start">
    <div className="w-full sm:w-2/3">
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/photos/ZONWAY (1).png"
          alt="Zone 90 logo"
          width={500}
                height={500}
                className="w-[50%] h-auto"
        />
      </Link>

      <p className="text-[#121212] leading-relaxed pt-5">
        Zone 90 är en webbyrå i Norrköping & Linköping som skapar smarta webb- och designlösningar. 
        Grundad 2025 med fokus på digitala lösningar som hjälper företag att växa online.
      </p>
    </div>
  </div>

  {/* Kolumn 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* NAVIGATION */}
    <nav aria-label="Footer Navigation">
      <ul className="space-y-1 text-sm text-gray-300">
        <li>
          <Link
            href="/tjanster"
            className="relative inline-block font-[500] text-[#121212] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Tjänster
          </Link>
        </li>
        <li>
          <Link
            href="/case"
            className="relative inline-block font-[500] text-[#121212] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Kundcase
          </Link>
        </li>
        <li>
          <Link
            href="/omzone90"
            className="relative inline-block font-[500] text-[#121212] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Om Zone 90
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className="relative inline-block font-[500] text-[#121212] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            className="relative inline-block font-[500] text-[#121212] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#121212] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Integritetspolicy
          </Link>
        </li>
      </ul>
    </nav>

    {/* Kontakt & Social */}
    <div className="pt-8 sm:pt-0" >
      <h4 className="text-xl mb-2 text-[#121212]">Hör av dig</h4>
      <p className="text-[#121212]">
        <a
          href="mailto:contact@zone90.se"
          className="text-[#E95D0F] font-[500] hover:underline"
        >
          contact@zone90.se
        </a>
      </p>

      <div className="flex gap-3 mt-6">
        <a
          href="https://www.linkedin.com/company/zone90/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full transition transform"
        >
          <FaLinkedinIn className="text-[40px] bg-[#E95D0F] p-2 rounded-[10px] text-[#F5F5F5]" />
        </a>
        <a
          href="https://www.facebook.com/people/Zone90/61575014166638/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full transition transform"
        >
          <TfiFacebook className="text-[40px] bg-[#E95D0F] p-2 rounded-[10px] text-[#F5F5F5]" />
        </a>
      </div>
    </div>
  </div>
</div>

      {/* FOOTER BOTTOM */}
      <div className="pb-2 pt-10 text-center text-[12px] text-[#393E46]">
        © {new Date().getFullYear()} Zone 90. Created with ♥ by Marah
      </div>
      </div>
    </footer>
  );
}





