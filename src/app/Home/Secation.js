
import Link from "next/link";
export default function Section() {


  return (
  <>
  <div id="success-section" className="text-[#F5F5F5] py-20 mx-auto">
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
    
    {/* Vänster sektion */}
    <div className="md:w-[40%] px-6 flex flex-col items-start">
      <h2 className="text-left">
        Your zone, our focus
      </h2>

      <p className="text-left text-gray-300 mt-6 leading-relaxed">
        We turn your passion and ideas into powerful digital products. We listen closely to your vision and work tirelessly to bring it to life in a way that helps your brand shine and succeed. Our focus is on creating impactful, tailored solutions that not only meet your needs but exceed your expectations.
      </p>

      <div className="group pt-6">
        <Link
          href="/about"
          className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all 
                     hover:bg-[#2A2F7D] inline-flex items-center gap-2 text-sm w-fit"
        >
          <span className="text-[#F5F5F5]">Want to know more?</span>
        </Link>
      </div>
    </div>

    {/* Höger sektion */}
    <div className="md:w-[60%] flex justify-center">
      <img src="/photos/Zone.png" alt="working" className="w-full h-auto object-contain rounded-l-[50px] rounded-r-none" />
    </div>

  </div>
</div>


<div id="success-section" className="text-[#F5F5F5] py-20 mx-auto">
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between gap-6">

    {/* Höger sektion - Bild */}
    <div className="md:w-[60%] flex justify-center">
      <img
        src="/photos/web-design.jpg"
        alt="working"
        className="w-full h-auto mx-auto object-contain rounded-r-[50px] rounded-l-none"
      />
    </div>

    {/* Vänster sektion - Text */}
    <div className="md:w-[40%] px-6 flex flex-col justify-center">
      <h2 className="text-left ">
        We bring it
      </h2>

      <p className="text-left text-gray-300 pt-6 leading-relaxed">
        Zone 90 delivers high-quality digital solutions in web development and design. Our expertise spans web development, UI/UX design, SEO, and graphic design—creating impactful, results-driven experiences. Whether it's a sleek website, a complex platform, or a custom  digital solution, we combine creativity and precision to bring your vision to life.
      </p>

      <div className="group pt-6">
        <Link
          href="/service"
          className="bg-[#3B429F] text-[#F5F5F5] py-3 px-6 rounded-full transition-all hover:bg-[#2A2F7D] inline-flex items-center gap-2 text-sm w-fit"
        >
          <span className="text-[#F5F5F5]">Our services</span>
        </Link>
      </div>
    </div>

  </div>
</div>

    </>
  );
}



