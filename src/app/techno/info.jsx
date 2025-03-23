
import Image from "next/image";

export default function Info() {
  return (<>
     <section className="bg-[#F5F5F5] pb-20 px-6  rounded-[20px] ">

  <div className="flex flex-col items-center justify-center text-center py-20 max-w-2xl mx-auto">
    <h3 className="text-[#121212]">With focus on the user</h3>
    <p className="mt-5 text-[#121212]">
        Techno is designed with a user-first approach, ensuring an intuitive and seamless interaction with the interface. Our platform caters to students, developers, and small to medium-sized businesses, offering a modern and elegant digital experience. The new website is built to combine sleek design with a hassle-free shopping process, making every step smooth, efficient, and enjoyable.
    </p>
</div>
  <div className=" flex justify-center">
    <Image
      src="/photos/protoyp.png"
      width={1200} 
      height={500} 
      alt="Prototype"
      
    />
  </div>


      <div className="max-w-8xl py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
      <div className="max-w-8xl py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Images Grid */}
        <div className="flex justify-center ">
            <Image
              src="/photos/brandtechno.png"
              width={600}
              height={500}
              alt="Mobile Mockup"
              
            />
          </div>

        {/* Right Side: Text & Mobile Mockup */}
        <div className="space-y-6 ">
          <h3 className="text-[#121212]">Brand guide</h3>
          <p className="text-[#121212]">
          Techno brand is built on simplicity, clarity, and a user-first approach. The carefully curated color palette reflects a modern and professional aesthetic, ensuring a clean and visually appealing experience. The typography is not only accessible but also chosen to enhance readability and usability across all devices.          </p>
       
        </div>
       
      </div>
      <div className="max-w-8xl py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
    </section>
    </>
  );
}
