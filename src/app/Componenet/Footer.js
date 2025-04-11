import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { TfiFacebook } from "react-icons/tfi";
export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#F5F5F5] px-6 pt-20  overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-20 gap-16">
        
        {/* LOGO & INTRO */}
        <div>
          <Link href="/" aria-label="Go to homepage">
            <img
              src="/photos/Logo.png"
              alt="Zone 90 logo"
              className="w-[40%] h-auto pb-10"
              loading="lazy"
            />
          </Link>
        
          <p className="text-gray-300 leading-relaxed max-w-md">
            We specialize in all aspects of web development and design, driven by a creative mindset.
          </p>
          <p className="text-gray-300 pt-10">
            <a
              href="mailto:contact@zone90.se"
              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
              className="bg-[#F5F5F5] p-2 rounded-full transition transform  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn"
            >
              <FaLinkedinIn className="text-[24px] text-[#3B429F]" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/people/Zone90/61575014166638/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5F5F5] p-2 rounded-full transition transform  focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn"
            >
              <TfiFacebook className="text-[24px] text-[#3B429F]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Footer Navigation">
          <h4 className="text-xl mb-5">More from Zone 90</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link
                href="/service"
                className="hover:underline hover:decoration-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Go to services page"
                title="Services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/case"
                className="hover:underline hover:decoration-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Go to case studies page"
                title="Case"
              >
                Case
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:decoration-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Learn more about Zone 90"
                title="About"
              >
                About Zone 90
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:decoration-[#F5F5F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Contact Zone 90"
                title="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="pt-2 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Zone 90. Made by Marah Kn.
      </div>
    </footer>
  );
}





