import { FaLinkedinIn  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#F5F5F5] px-6 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LOGO & INTRO */}
        <div>
          <img src="/photos/Logo.png" alt="Logo" className="w-[120px] mb-6" />
          <p className="text-gray-300 leading-relaxed max-w-md ">
            We specialize in all aspects of web development and design, driven by a creative mindset.
          </p>
          <p className="text-gray-300 mt-4 ">
            <a
              href="mailto:contact@zone90.se"
              className="hover:underline hover:decoration-[#F5F5F5]"
            >
              contact@zone90.se
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
  <a
    href="https://www.linkedin.com/in/marah-kn/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#3B429F] p-2 rounded-full transition transform hover:bg-[#2A2F7D]"
  >
    <FaLinkedinIn  className="text-[24px] text-[#F5F5F5]" />
  </a>
</div>

        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl  mb-5 ">More from Zone 90</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/service" className="hover:underline hover:decoration-[#F5F5F5]">
                Services
              </a>
            </li>
            <li>
              <a href="/case" className="hover:underline hover:decoration-[#F5F5F5]">
                Case
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:decoration-[#F5F5F5]">
                About Zone 90
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:decoration-[#F5F5F5]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2a2a2a] mt-16 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Zone 90. Made by Marah kn.
      </div>
    </footer>
  );
}



