"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
          !isHomePage ? "bg-[#121212] px-8 py-4" : "absolute px-8 py-8"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
          <img
            src="/photos/Logo.png"
            alt="Zone 90 logo"
            className="w-[40%] h-auto"
            loading="lazy"
          />
        </Link>
        <div className="flex items-center space-x-6 text-white">
          <Link
            href="/service"
            aria-label="Go to services page"
            title="Services"
            className="hover:underline hover:decoration-[#F5F5F5]"
          >
            Services
          </Link>
          <Link
            href="/case"
            aria-label="Go to case studies page"
            title="Case"
            className="hover:underline hover:decoration-[#F5F5F5]"
          >
            Case
          </Link>
          <Link
            href="/about"
            aria-label="Learn more about Zone 90"
            title="About"
            className="hover:underline hover:decoration-[#F5F5F5]"
          >
            About Zone 90
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Zone 90"
            title="Contact"
            className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full hover:bg-[#2A2F7D] focus:outline-none"
            role="button"
          >
            Contact
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
          <img
            src="/photos/Logo.png"
            alt="Zone 90 logo"
            className="w-[100px] h-auto"
            loading="lazy"
          />
        </Link>

        <div className="flex gap-2.5">
          <Link
            href="/contact"
            className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]"
            title="Contact"
          >
            Contact
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
                className="block w-6 h-0.5 bg-white"
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
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
          <div className="flex items-center justify-between w-full">
            <Link href="/" aria-label="Go to homepage">
              <img
                src="/photos/Logo.png"
                alt="Zone 90 logo"
                className="w-[100px] h-auto"
                loading="lazy"
              />
            </Link>

            <div className="flex gap-2.5">
              <Link
                href="/contact"
                className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]"
                title="Contact"
                onClick={toggleMenu}
              >
                Contact
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
                    className="absolute block w-6 h-0.5 bg-white"
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute block w-6 h-0.5 bg-white"
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </button>
            </div>
          </div>

          <div className="flex flex-col py-40 items-center space-y-6 text-white">
            <Link
              href="/service"
              className="text-[30px] hover:underline"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/case"
              className="text-[30px] hover:underline"
              onClick={toggleMenu}
            >
              Case
            </Link>
            <Link
              href="/about"
              className="text-[30px] hover:underline"
              onClick={toggleMenu}
            >
              About Zone 90
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Head;







