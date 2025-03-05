import { motion } from "framer-motion";
import Section from "./Secation";
import Zone90Section from "./zone90secation";


const Steps = () => {
  const techStack = [
    "User research",
    "User testing",
    "Information architecture",
    "Wireframing",
    "Interactive prototyping",
    "Figma",
    "Copywriting",
    "SEO",
    "WordPress",
    "Next.js",
    "ReactJS",
    "Firebase",
  ];

  return (
    <>
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: ["0%", "-50%"] }} // Sömlös scroll
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech, index) => ( // Duplicera listan för att fylla luckor
          <div
            key={index}
            className="relative inline-block p-[2px] rounded-2xl bg-gradient-to-r from-[#B8336A] to-[#3B429F]"
          >
            <div className="bg-[#121212] rounded-2xl px-4 py-2">
              <span className="text-white whitespace-nowrap">{tech}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    <Section /> 
      <Zone90Section />
    </>
  );
};

export default Steps;




