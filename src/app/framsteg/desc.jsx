
export default function Desc() {
  return (
    <>
      <section className="bg-[#35536d]">
        {/* Hero Image */}
        <div className="flex justify-center px-6">
          <img
            src="/photos/framstegföreningstartpage.png"
            alt="Framsteg förening start page"
            className="shadow-lg rounded-[20px] w-full h-auto relative top-[-50px]"
            loading="lazy"
          />
        </div>

        {/* Intro Text */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-3xl mx-auto">
          <h3 >With focus on connecting communities</h3>
          <p className="mt-5">
            Framsteg Förening’s website is designed to seamlessly inform visitors about upcoming activities,
            provide key insights into the organization, and send timely reminders to members. Built for
            accessibility, responsiveness, and optimal performance, it ensures a smooth and engaging user experience.
          </p>
        </div>

        {/* Full-width Image with overlay and title */}
        <div className="relative flex justify-center items-center w-full h-[500px] overflow-hidden">
          <img
            src="/photos/integration.jpg"
            alt="Integration and connection"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <h2 className="px-6 absolute max-w-3xl  text-center ">
            Stay connected, stay informed
          </h2>
        </div>
      </section>

      {/* Second Section - Logo and Brand */}
      <section className="bg-[#F5F5F5] px-6 py-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center h-screen">
          {/* Logo description */}
          <div className="space-y-6">
            <h3 className="text-[#121212] ">The logo’s power</h3>
            <p className="text-[#121212] leading-relaxed">
              The logo captures Framsteg Förening’s essence through thoughtful color and shape. The curved line
              symbolizes progress, connection, and shared growth, while warm, diverse colors reflect unity and
              openness. Its organic form embodies movement and energy, highlighting the mission to drive change and
              connect people across communities.
            </p>
          </div>

          {/* Logo image */}
          <div className="flex justify-center">
            <img
              src="/photos/Framstegföreninglogo.png"
              alt="Framsteg Förening logo"
              width={400}
              height={500}
              className="rounded-lg object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Brand Guide */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  h-screen items-center ">
          <div className="flex justify-center order-last lg:order-first">
            <img
              src="/photos/brandframstegförening.png"
              alt="Brand visuals"
              width={600}
              height={500}
              className="rounded-lg object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Brand guide</h3>
            <p className="text-[#121212] leading-relaxed">
              Framsteg Förening’s brand identity is built on simplicity, accessibility, energy, and consistency.
              We focus on clean, functional design to ensure clear communication across all platforms.
              Accessibility is key, with strong color contrasts and readable typography for all. Consistency in
              color and design elements reinforces a professional, unified appearance. Our accent color adds
              energy, symbolizing progress and community engagement.
            </p>
          </div>
        </div>

        {/* Responsive Design Section */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-screen">
          <div className="space-y-6">
            <h3 className="text-[#121212] ">Responsiv design</h3>
            <p className="text-[#121212] leading-relaxed">
              Framsteg Förening is built with a responsive design that adapts to all screen sizes,
              ensuring accessibility for everyone and easy navigation throughout the site.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/photos/mobilmockup.png"
              alt="Mobile mockup"
              width={700}
              height={600}
              className="rounded-lg  object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Final Design */}
        <div className="pt-20">
          <h3 className="text-[#121212]  pb-5">Product final design</h3>
          <div className="flex justify-start">
            <img
              src="/photos/finaldesigntoframstegförening.png"
              alt="Final design of website"
              className="w-full h-auto shadow-md rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
