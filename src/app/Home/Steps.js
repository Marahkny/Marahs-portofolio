import { motion } from "framer-motion";



const Steps = () => {
  const techStack = [
    "User research",
    "UI/UX design",
    "Wireframes",
    "Prototyper",
    "Grafisk design",
    "Copywriting",
    "SEO",
    "WordPress",
    "E-handel",
    "Frontendutveckling",
    "Sociala media",
    "Semrush",
    "Google Analytics",
  ];
  

  return (
    <>
    <div className="w-full overflow-hidden pb-20">
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: ["0%", "-50%"] }} // Sömlös scroll
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech, index) => ( 
          <div
            key={index}
            className="relative inline-block rounded-[15px] "
          >
            <div className="bg-[#E95D0F] rounded-[15px] px-3 py-3">
              <span className=" whitespace-nowrap text-[18px] text-[#F5F5F5] font-['Space Grotesk']">{tech}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

    </>
  );
};

export default Steps;




