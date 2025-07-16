"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

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
            aria-label="Go to services page"
            title="Services"
            className="relative inline-block font-[500] text-[#F5F5F5] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Tjänster
          </Link>
         <Link
  href="/case"
  aria-label="Go to case studies page"
  title="Case"
  className="relative inline-block font-[500] text-[#F5F5F5] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
>
 Kundcase
</Link>

          <Link
            href="/omzone90"
            aria-label="Learn more about Zone 90"
            title="About"
            className="relative inline-block text-[#F5F5F5] font-[500] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-[#F5F5F5] before:transition-all before:duration-200 before:ease-in-out hover:before:w-full"
          >
            Om Zone 90
          </Link>
          <Link
            href="/kontakt"
            aria-label="Contact Zone 90"
            title="Contact"
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
            title="Contact"
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
          className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-center px-8 py-4"
        >
          <div className="flex items-center justify-between  w-full">
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
                title="Contact"
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

          <div className="flex flex-col py-40 items-center space-y-6 text-white">
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
        </motion.div>
      )}
    </>
  );
};

export default Head;







