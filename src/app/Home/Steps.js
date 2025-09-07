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
            className="relative inline-block p-[2px] rounded-2xl bg-gradient-to-r from-[#B8336A] to-[#3B429F]"
          >
            <div className="bg-[#121212]  rounded-2xl px-4 py-2">
              <span className=" whitespace-nowrap text-[24px] font-['Syne']">{tech}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

    </>
  );
};

export default Steps;




