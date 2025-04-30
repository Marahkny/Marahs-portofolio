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
  className="w-full group font-[500] sm:w-auto bg-[#B8336A] text-[#F5F5F5] py-3 px-6 justify-center rounded-full transition-all hover:bg-[#9D2A56] inline-flex items-center gap-2 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-white"

  aria-label="Contact Zone 90"
  title="Contact Zone 90"
  role="button"
>
<span className="text-[#F5F5F5]">Contact Zone 90</span>
              <LiaArrowRightSolid
                className="text-[#F5F5F5] text-[24px] transition-transform 
                           duration-300 group-hover:translate-x-2"
                aria-hidden="true"
              />
            
</Link>

      </div>
    </div>
  );
}
