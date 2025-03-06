
import AnimatedCircle from "./animatedcircle";


export default function ZoneSec() {
    return (
<section className="relative max-w-8xl px-6 flex flex-col items-center justify-center h-full 
                    py-6 xs:py-2 lg:py-20">
  {/* Heading */}
  <div className="max-w-6xl text-center py-6 lg:py-20">
    <h2>A zone for your success</h2>
    <p className="text-[18px] sm:text-[16px] md:text-[20px] lg:text-[24px] pt-6 leading-relaxed">
      Zone 90 is a web and design agency delivering innovative digital solutions locally in Sweden and globally. 
      We specialize in modern, high-performing web and design solutions infused with creativity and innovation. 
      From concept to launch, we bring your vision to life with the right tools and expertise.
    </p> 
  </div>

  {/* Content Grid */}
  <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center hidden md:grid py-6 lg:py-10">
    {/* Left Content - Background Animation */}
    <div className="flex flex-col justify-center items-center space-y-6">
      <p className="text-[60px] sm:text-[70px] md:text-[80px] text-center">Create</p>
      <p className="text-[60px] sm:text-[70px] md:text-[80px] text-center">Achieve</p>
    </div>

    {/* Center Content - Animation */}
    <div className="relative flex justify-center">
      <AnimatedCircle className="absolute inset-0 -z-10" />
    </div>

    {/* Right Content - Text Section */}
    <div className="flex flex-col justify-center items-center space-y-6">
      <p className="text-[60px] sm:text-[70px] md:text-[80px] text-center">Deliver</p>
      <p className="text-[60px] sm:text-[70px] md:text-[80px] text-center">Grow</p>
    </div>
  </div>
</section>

    );
}

  