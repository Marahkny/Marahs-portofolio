"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`top-0 left-0 w-full z-30 hidden lg:flex items-center justify-between ${
          !isHomePage ? "bg-[#121212] px-8 py-8" : "absolute px-8 py-8"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
        <Image
  src="/photos/Logo.png"
  alt="Zone 90 logo"
  width={500} 
  height={500} 
  className="w-[70%] h-auto"
/>

        </Link>
        <div className="flex items-center space-x-6 ">
          <Link
            href="/tjanster"
            aria-label="läs mer om våra tjänster"
            title="Våra tjänster"
            className="relative inline-block font-[500] text-[#F5F5F5] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Tjänster
          </Link>
         <Link
  href="/case"
  aria-label="läs mer om kundcase"
  title="Case"
  className="relative inline-block font-[500] text-[#F5F5F5] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
>
 Kundcase
</Link>

          <Link
            href="/omzone90"
            aria-label="läs mer om oss"
            title="Om zone 90"
            className="relative inline-block text-[#F5F5F5] font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Om Zone 90
          </Link>
          <Link
            href="/kontakt"
            aria-label="Kontakt Zone 90"
            title="Kontakt"
            className="relative inline-block font-[500] text-[#F5F5F5] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
            role="button"
          >
            Kontakt
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`top-0 left-0 w-full z-30 flex lg:hidden items-center justify-between px-8 py-4 ${
          !isHomePage ? "bg-[#121212]" : "absolute"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
        <Image
      src="/photos/Logo.png"
      alt="Zone 90 logo"
      width={600}  
      height={400} 
      className="w-[60%] h-auto"
    />
        </Link>

        <div className="flex gap-2.5">
          <Link
            href="/kontakt"
            className=" relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-300 before:transition-all before:duration-200 before:ease-in-out hover:before:w-full pt-2 "
            title="Kontakt"
          >
            Kontakt
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6 flex flex-col justify-between"
            >
              <motion.span
                className="block w-6 h-0.5 bg-[#d1d5db]"
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#d1d5db]"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#d1d5db]"
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-left  pt-4"
        >
          <div className="flex items-center justify-between px-8  w-full">
            <Link href="/" aria-label="Go to homepage">
            <Image
      src="/photos/Logo.png"
      alt="Zone 90 logo"
      width={600}  
      height={400} 
      className="w-[60%] h-auto"
    />
            </Link>

            <div className="flex gap-2.5">
              <Link
                href="/kontakt"
                className="relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-300 before:transition-all before:duration-200 before:ease-in-out hover:before:w-full pt-2 "
                title="kontakt"
                onClick={toggleMenu}
              >
                Kontakt
              </Link>

              <button
                onClick={toggleMenu}
                aria-label="Close mobile menu"
                className="relative w-10 h-10 flex items-center justify-center"
              >
                <motion.div
                  animate="open"
                  className="relative w-6 h-6 flex items-center justify-center"
                >
                  <motion.span
                    className="absolute block w-6 h-0.5 bg-[#d1d5db]"
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute block w-6 h-0.5 bg-[#d1d5db]"
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </button>
            </div>
          </div>

          <div className="flex flex-col py-40 items-left space-y-6 px-8">
            <Link
              href="/tjanster"
              className="text-[24px] relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-300 before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
              onClick={toggleMenu}
            >
              Tjänster
            </Link>
            <Link
              href="/case"
              className="text-[24px] relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-300 before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
              onClick={toggleMenu}
            >
              Kundcase
            </Link>
            <Link
              href="/omzone90"
              className="text-[24px] relative inline-block font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-300 before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
              onClick={toggleMenu}
            >
              Om Zone 90
            </Link>
          </div>
         <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="mt-auto w-full flex flex-col p-8 items-center bg-[#F5F5F5] rounded-t-3xl space-y-4"
>
  <p className="font-[500] text-[24px] text-[#121212]">Vi är sociala</p>
  <div className="flex gap-3">
    <a
      href="https://www.linkedin.com/company/zone90/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full transition transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Visit our LinkedIn page"
      title="LinkedIn"
    >
      <FaLinkedinIn className="text-[26px] text-[#3B429F]" aria-hidden="true" />
    </a>
    <a
      href="https://www.facebook.com/people/Zone90/61575014166638/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full transition transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Visit our Facebook page"
      title="Facebook"
    >
      <TfiFacebook className="text-[26px] text-[#3B429F]" aria-hidden="true" />
    </a>
  </div>
</motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Head;







