import React from "react";
import Link from "next/link";
import { LiaArrowRightSolid } from "react-icons/lia";
export default function Zone90Section() {
  return (
    <div className="flex justify-center items-center h-full px-6 py-20">
      <div className="text-center max-w-4xl w-full">
        <h2 >
        Looking for web and design digital solutions?
        </h2>
        <p className="text-gray-300 leading-relaxed py-6 text-2xl">
        We create impactful, results-driven solutions. Contact us for a digital fika and let's bring your ideas to life in your zone!   </p>
       

          <Link
  href="/contact"
  className=" w-full sm:w-auto relative inline-flex items-center justify-center bg-[#B8336A] text-[#F5F5F5] py-3 px-6 rounded-full
             group font-[500] transition-colors duration-300 overflow-hidden"
 aria-label="Contact Zone 90"
  title="Contact Zone 90"
  role="button"
>
  <span
    className="inline-flex items-center transition-all duration-300 group-hover:-translate-x-4 "
  >
   Contact Zone 90
  </span>

  {/* Arrow - appears on hover */}
  <span
    className="absolute right-4 opacity-0 translate-x-2 transition-all duration-300
               group-hover:opacity-100 group-hover:translate-x-2"
  >
    <LiaArrowRightSolid className="text-[#F5F5F5] text-[24px]" />
  </span>
</Link>
      </div>
    </div>
  );
}
