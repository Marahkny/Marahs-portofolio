"use client";
import { usePathname } from "next/navigation"; // ✅ Använd usePathname istället
import Link from "next/link";
import React, { useState } from "react";

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const pathname = usePathname(); 
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Navbar för stora skärmar */}
      <nav 
        className={`absolute top-0 left-0 w-full z-30 flex items-center justify-between  hidden md:flex 
        ${!isHomePage ? "bg-[#121212] px-8 py-4 " : "px-8 py-8"}`} 
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
      <nav className="fixed top-0 left-0 w-full z-30 flex md:hidden items-center justify-between shadow-md px-8 py-4 bg-transparent backdrop-blur-md">
        <Link href="/">
          <img src="/photos/Logo.png" alt="Logo" className="max-w-[50%]" />
        </Link>
        <div className="flex gap-2.5">
          <Link href="/contact" className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]">
            Contact
          </Link>
          <button onClick={handleOpenMenu} className="hover:text-pink-500">
            Menu
          </button>
        </div>
      </nav>

      {/* Fullscreen-meny */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-start px-8 py-4">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <img src="/Photos/Logo.png" alt="Logo" className="max-w-[50%]" />
            </Link>
            <div className="flex gap-2.5">
              <Link href="/contact" className="bg-[#3B429F] text-[#F5F5F5] py-2 px-4 rounded-full hover:bg-[#2A2F7D]">
                Contact
              </Link>
              <button onClick={handleCloseMenu} className="hover:text-pink-500">
                Close
              </button>
            </div>
          </div>
          <div className="flex flex-col py-40 items-center space-y-6">
            <Link href="/case" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={handleCloseMenu}>Case</Link>
            <Link href="/service" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={handleCloseMenu}>Service</Link>
            <Link href="/about" className="text-[30px] hover:decoration-[#F5F5F5]" onClick={handleCloseMenu}>About Zone 90</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Head;







