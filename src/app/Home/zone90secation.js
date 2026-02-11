import React from "react";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Zone90Section() {
  return (
    <div className="flex justify-center items-center h-full px-6 mb-[-70px]">
<div className="text-center max-w-7xl w-full bg-[#E95D0F] p-4 sm:p-20 rounded-[15px]">
        <h2 >
     Letar du efter Webbyrå i Nörrköping & Linköping?
        </h2>
        <p className="text-[#F5F5F5] leading-relaxed py-6 text-[22px]">
Låt oss ta en digital fika – och förvandla dina idéer till resultat. </p>
       
  <Link
  href="/kontakt"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#F5F5F5] py-4 px-10 rounded-full
             group transition-colors duration-300 overflow-hidden"
 aria-label="kom i kontkakt med oss"
              title="Kontakta oss"
              role="button"
>
  <span
    className="inline-flex text-[#E95D0F] font-[600] items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
    Boka ett kostnadsfritt möte

  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-5 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#E95D0F] text-[24px] items-center" />
  </span>
</Link>
      </div>
    </div>
  );
}
