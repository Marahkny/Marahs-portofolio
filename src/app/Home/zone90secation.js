import React from "react";
import Link from "next/link";

export default function Zone90Section() {
  return (
    <div className="flex justify-center items-center h-full px-6 xs:py-20 lg:py-20">
      <div className="text-center max-w-4xl w-full">
        <h2 >
        Looking for web and design digital solutions?
        </h2>
        <p className="text-gray-300 leading-relaxed py-6 text-[24px]">
        We create impactful, results-driven solutions. Contact us for a digital fika and let's bring your ideas to life in your zone!   </p>
       
        <Link
              href="/contact"
              className="bg-[#B8336A] text-[#F5F5F5] py-3 px-6 rounded-full transition-all hover:bg-[#9D2A56]"
            >
             Contact Zone 90
            </Link>
      </div>
    </div>
  );
}
