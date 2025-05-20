import React from "react";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Zone90Section() {
  return (
    <div className="flex justify-center items-center h-full px-6 py-20">
      <div className="text-center max-w-4xl w-full">
        <h2 >
       Looking for tech solutions in Sweden?
        </h2>
        <p className="text-gray-300 leading-relaxed py-6 text-2xl">
Let’s talk over a digital fika — and turn your ideas into results  </p>
       
<Link
  href="/contact"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#B8336A] text-[#F5F5F5] py-4 px-8 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
  aria-label="Contact Zone 90"
  title="Contact Zone 90"
  role="button"
>
  <span
    className="inline-flex items-center text-[#F5F5F5] transition-all duration-300 group-hover:-translate-x-4 "
  >
     Contact Zone 90
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-3 opacity-0 translate-x-6 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-0"
  >
    <HiArrowSmallRight  className="text-[#F5F5F5] text-[26px] items-center" />
  </span>
</Link>
      </div>
    </div>
  );
}
