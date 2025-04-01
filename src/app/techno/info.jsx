
import Image from "next/image";

export default function Info() {
  return (<>
  
     <section className="bg-[#003B7A] ">
        
     <div className="flex justify-center px-6 ">
            <img
              src="/photos/technostartpage.jpg"
              
              alt="techno start page"
              className="shadow-lg rounded-[20px] w-[100%] h-auto relative top-[-50px] "
            />
          </div>
  <div className=" flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto px-6">
    <h3 >With focus on seamless user experience</h3>
    <p className="mt-5 ">
        Techno is designed with a user-first approach, ensuring an intuitive and seamless interaction with the interface. Our platform caters to students, developers, and small to medium-sized businesses, offering a modern and elegant digital experience. The new website is built to combine sleek design with a hassle-free shopping process, making every step smooth, efficient, and enjoyable.
    </p>
</div>
<div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
    {/* Bilden */}
    <img
        src="/photos/tech.png"
        alt="Techno start page"
        className="w-full h-full object-cover"
    />

    {/* Svart overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Rubrik */}
    <h2 className="px-6 absolute max-w-3xl text-center ">
    Tech that you'll love
</h2>

</div>


</section>
<section className="bg-[#F5F5F5] px-6 py-20 ">
      <div className=" max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        {/* Left Side: Images Grid */}
       

        {/* Right Side: Text & Mobile Mockup */}
        <div className="space-y-6 ">
          <h3 className="text-[#121212]">The power of the name</h3>
          <p className="text-[#121212]">
          The name  Techno was carefully crafted to reflect the company’s vision—simple, distinctive, and deeply connected to technology. It blends “Tech” from “technology” with "no" which subtly hints at Nordic influence, embodying the Scandinavian principles of minimalism, innovation, and cutting-edge design. This fusion creates a name that is modern and perfectly aligned with company forward-thinking approach to technology.
          </p>
       
        </div>
        <div className="flex justify-center ">
            <Image
              src="/photos/technologo.png"
              width={400}
              height={500}
              alt="technologo"
              
            />
          </div>
      </div>
      <div className="max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* Left Side: Images Grid */}
  <div className="flex justify-center order-last lg:order-first">
    <Image
      src="/photos/brandtechno.png"
      width={600}
      height={500}
      alt="Mobile Mockup"
    />
  </div>

  {/* Right Side: Text & Mobile Mockup */}
  <div className="space-y-6">
    <h3 className="text-[#121212]">Brand guide</h3>
    <p className="text-[#121212]">
      Techno brand is built on simplicity, clarity, and a user-first approach. The carefully curated color palette reflects a modern and professional aesthetic, ensuring a clean and visually appealing experience. The typography is not only accessible but also chosen to enhance readability and usability across all devices.
    </p>
  </div>
</div>


      <div className=" max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        {/* Left Side: Images Grid */}
       

        {/* Right Side: Text & Mobile Mockup */}
        <div className="space-y-6 ">
          <h3 className="text-[#121212]" >Icon design</h3>
          <p className="text-[#121212]">
         Techno icons are meticulously designed to align with our technological vision, ensuring they not only enhance usability but also reinforce our brand identity. Each icon is crafted to be intuitive, visually consistent, and user-friendly, creating a seamless interaction for our audience. By balancing aesthetics with functionality, our icons effectively bridge the gap between technology, user experience, and the company’s core values.         </p>
       
        </div>
        <div className="flex justify-center ">
            <Image
              src="/photos/uiguide.png"
              width={700}
              height={500}
              alt="Mobile Mockup"
              
            />
          </div>
      </div>

      <div className=" h-full justify-center pb-20">
      <h3 className="  text-[#121212]  text-left pb-5">Prodact final design</h3>
 
     <div className="flex justify-start">
       
       <img
         src="/photos/protoyp.png"
         
         alt="Prototype"
       className="w-[100%] h-auto shadow-md rounded-[20px]"
       />
       
     </div>
     
    
     </div>
     </section>
    </>
  );
}
