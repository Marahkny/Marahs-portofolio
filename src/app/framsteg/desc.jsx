
import Image from "next/image";

export default function Desc() {
  return (<>
  
     <section className="bg-[#35536d] ">
        
     <div className="flex justify-center px-6 ">
            <img
              src="/photos/framstegföreningstartpage.png"
              
              alt="techno start page"
              className="shadow-lg rounded-[20px] w-[100%] h-auto relative top-[-50px] "
            />
          </div>
  <div className=" flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto px-6">
    <h3 >With focus on connecting communities</h3>
    <p className="mt-5 ">
    Framsteg Förening’s website is designed to seamlessly inform visitors about upcoming activities, provide key insights into the organization, and send timely reminders to members. Built for accessibility, responsiveness, and optimal performance, it ensures a smooth and engaging user experience.     </p>
</div>
<div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
    {/* Bilden */}
    <img
        src="/photos/integration.jpg"
        alt="Techno start page"
        className="w-full h-full object-cover"
    />

    {/* Svart overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Rubrik */}
    <h2 className="px-6 absolute max-w-3xl text-center ">
   Stay connected, stay informed
</h2>

</div>


</section>
<section className="bg-[#F5F5F5] px-6 py-20 ">
      <div className=" max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ">
        {/* Left Side: Images Grid */}
       

        {/* Right Side: Text & Mobile Mockup */}
        <div className="space-y-6 ">
          <h3 className="text-[#121212]">The logo’s power</h3>
          <p className="text-[#121212]">
          The logo has been thoughtfully crafted, with careful attention to both color and shape to capture the essence of Framsteg Förening. The flowing, curved line symbolizes progress and connection, illustrating how the organization supports individuals at every level of society. It represents Framsteg Förening’s collective journey towards integration, inclusion, and shared growth.

The chosen colors radiate warmth, openness, and diversity, serving as a reminder that our strength lies in unity and collaboration. The organic shape of the curve reflects movement and energy, embodying the organization mission to drive positive change and build meaningful bridges between people from different backgrounds.     </p>
       
        </div>
        <div className="flex justify-center ">
            <Image
              src="/photos/Framstegföreninglogo.png"
              width={400}
              height={500}
              alt="Framstegföreninglogo"
              
            />
          </div>
      </div>
      <div className="max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* Left Side: Images Grid */}
  <div className="flex justify-center order-last lg:order-first">
    <Image
      src="/photos/brandframstegförening.png"
      width={600}
      height={500}
      alt="brandframstegförening"
    />
  </div>

  {/* Right Side: Text & Mobile Mockup */}
  <div className="space-y-6">
    <h3 className="text-[#121212]">Brand guide</h3>
    <p className="text-[#121212]">
    Framsteg Förening’s brand identity is built on simplicity, accessibility, energy, and consistency. We focus on clean, functional design to ensure clear communication across all platforms. Accessibility is key, with strong color contrasts and readable typography for all. Consistency in color and design elements reinforces a professional, unified appearance. Our accent color adds energy, symbolizing progress and community engagement. Together, these elements reflect our values of progress, clarity, and connection.    </p>
  </div>
</div>


      <div className=" max-w-8xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        {/* Left Side: Images Grid */}
       

        {/* Right Side: Text & Mobile Mockup */}
        <div className="space-y-6 ">
          <h3 className="text-[#121212]" >SEO</h3>
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