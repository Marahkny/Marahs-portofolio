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
      {/* Navbar för stora skärmar */}
      <nav 
        className={` top-0 left-0 w-full z-30 flex items-center justify-between  hidden lg:flex 
        ${!isHomePage ? "bg-[#121212] px-8 py-4  " : " px-8 py-8 absolute  "}`} 
      >
        <Link href="/">
          <img src="/Photos/Logo.png" alt="Logo" className="w-[40%]" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/service" className="hover:underline hover:decoration-[#F5F5F5]">Service</Link>
          <Link href="/case" className="hover:underline hover:decoration-[#F5F5F5]">Case</Link>
          <Link href="/about" className="hover:underline hover:decoration-[#F5F5F5]">About Zone 90</Link>
          <Link href="/contact" className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full hover:bg-[#2A2F7D]">
            Contact
          </Link>
        </div>
      </nav>

      {/* Navbar för små skärmar */}
      <nav className={`top-0 left-0 w-full z-30 flex lg:hidden items-center justify-between px-8 py-4 ${!isHomePage ? "bg-[#121212]" : "absolute "}`}>
      <Link href="/">
          <img src="/photos/Logo.png" alt="Logo" className="w-[100px] " />
        </Link>
        <div className="flex gap-2.5">
          <Link href="/contact" className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]">
            Contact
          </Link>
          <button onClick={toggleMenu} className="relative w-10 h-10 flex items-center justify-center">
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6 flex flex-col justify-between"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Fullscreen-meny */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-start px-8 py-4"
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <img src="/Photos/Logo.png" alt="Logo" className="w-[100px] " />
            </Link> 
            <div className="flex gap-2.5">
            <Link href="/contact" className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]">
            Contact
          </Link>
            <button onClick={toggleMenu} className="relative w-10 h-10 flex items-center justify-center">
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6 flex items-center justify-center"
              >
                <motion.span
                  className="absolute block w-6 h-0.5 bg-white"
                  variants={{ open: { rotate: 45 }, closed: { rotate: 0 } }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block w-6 h-0.5 bg-white"
                  variants={{ open: { rotate: -45 }, closed: { rotate: 0 } }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
            </div>
          </div>
          <div className="flex flex-col py-40 items-center space-y-6">
            <Link href="/case" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={toggleMenu}>Case</Link>
            <Link href="/service" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={toggleMenu}>Service</Link>
            <Link href="/about" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={toggleMenu}>About Zone 90</Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Head;







