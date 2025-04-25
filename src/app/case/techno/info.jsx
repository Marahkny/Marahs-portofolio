"use client"
import Image from "next/image";
export default function Info() {
  return (
    <>
      <section className="bg-[#003B7A] ">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
        <Image
  src="/photos/technostartpage.jpg"
  alt="Techno start page"
  width={800}  
  height={500} 
  
  loading="lazy"
  className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
/>
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto">
          <h3 >
            With focus on seamless user experience
          </h3>
          <p className="mt-5 text-white leading-relaxed">
            Techno is designed with a user-first approach, ensuring an intuitive and seamless interaction with the interface. Our platform caters to students, developers, and small to medium-sized businesses, offering a modern and elegant digital experience. The new website is built to combine sleek design with a hassle-free shopping process, making every step smooth, efficient, and enjoyable.
          </p>
        </div>

        {/* Full-width Hero Section */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
        <Image
  src="/photos/tech.png"
  alt="Techno full background"
  width={1920}  // Justera bredd vid behov (passande storlek för bakgrund)
  height={1080} // Justera höjd vid behov (passande storlek för bakgrund)
  unoptimized
  loading="lazy"
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/70" />
          <h2 className="absolute  px-6 text-center max-w-3xl">
            Tech that you'll love
          </h2>
        </div>
      </section>

      {/* White section */}
      <section className="bg-[#F5F5F5] px-6 py-20 space-y-40">
        {/* The power of the name */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className=" text-[#121212] ">The power of the name</h3>
            <p className="text-[#121212] leading-relaxed">
              The name Techno was carefully crafted to reflect the company’s vision—simple, distinctive, and deeply connected to technology. It blends “Tech” from “technology” with "no", subtly hinting at Nordic influence and embodying Scandinavian principles of minimalism, innovation, and cutting-edge design.
            </p>
          </div>
          <div className="flex justify-center">
          <Image
  src="/photos/technologo.png"
  alt="Techno logo"
  width={400}  
  height={500} 
  loading="lazy"
  className="w-auto h-auto"
/>
          </div>
        </div>

        {/* Brand Guide */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-last lg:order-first flex justify-center">
          <Image
  src="/photos/brandtechno.png"
  alt="Techno brand mockup"
  width={600}  // Justera vid behov
  height={500} 
  className="w-auto h-auto"
/>
          </div>
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Brand guide</h3>
            <p className="text-[#121212] leading-relaxed">
              Techno brand is built on simplicity, clarity, and a user-first approach. The carefully curated color palette reflects a modern and professional aesthetic. The typography is chosen to enhance readability and usability across all devices.
            </p>
          </div>
        </div>

        {/* Icon design */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className=" text-[#121212] ">Icon design</h3>
            <p className="text-[#121212] leading-relaxed">
              Techno icons are meticulously designed to align with our technological vision. They enhance usability and reinforce our brand identity. Each icon is crafted to be intuitive and visually consistent, bridging the gap between aesthetics and functionality.
            </p>
          </div>
          <div className="flex justify-center">
          <Image
  src="/photos/uiguide.png"
  alt="UI guide and icons"
  width={700}  // Justera vid behov
  height={500} // Justera vid behov
  className="w-auto h-auto"
/>
          </div>
        </div>

        {/* Final design */}
        <div className="max-w-8xl mx-auto space-y-6">
          <h3 className=" text-[#121212] ">Product final design</h3>
          <div className="flex justify-start">
          <Image
  src="/photos/protoyp.png"
  alt="Techno prototype final design"
  width={800}  // Justera vid behov
  height={600} // Justera vid behov
  className="w-full h-auto shadow-md rounded-[20px]"
/>
          </div>
        </div>
      </section>
    </>
  );
}

