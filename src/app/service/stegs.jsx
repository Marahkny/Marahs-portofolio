import { motion } from "framer-motion";

export default function Stegs() {
    return (
         
      <div className="relative flex flex-col items-center min-h-screen px-6 py-20">
      {/* Animerade små cirklar i bakgrunden */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-[#3B429F]  -z-10 blur-[30px]"
        animate={{ x: [-100, 20], y: [300, 200] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
          <motion.div
        className="absolute w-[300px] h-[300px] bg-[#B8336A]  -z-10 blur-[30px]"
        animate={{ x: [-100, 20], y: [300, 200] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      


      <h2 className="mb-20 text-center">Zone 90 way to create a design</h2>

      {/* Kortsamling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pb-20 max-w-8xl">
        {/* Kort 1 */}
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#F5F5F5]  rounded-[20px] flex flex-col shadow-lg w-full h-full justify-center items-center"
        >
          <div className="items-left p-5">
            <h3 className="text-[#121212] ">Discovery</h3>
            <p className="mt-2 text-[#121212] text-left">
            We begin with in-depth user research and market analysis to understand your target audience and their needs. Through data-driven insights, we identify key requirements and features for your website or digital product. Our goal is to create a solid strategy that sets you up for success.              </p>
          </div>
        </motion.div>

        {/* Kort 2 */}
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#F5F5F5]   rounded-[20px] flex flex-col shadow-lg w-full h-full justify-center items-center"
        >
          
          <div className="items-left p-5">
            <h3 className="text-[#121212]">Concept</h3>
            <p className="mt-2 text-[#121212] text-left">
            After the research phase, we develop wireframes, define colors, typography, and craft UI/UX designs to ensure an intuitive and engaging user experience. We focus on creating a visually appealing and functional interface that is optimized for both aesthetics and usability.
            </p>
          </div>
        </motion.div>

        {/* Kort 3 */}
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#F5F5F5] rounded-[20px] flex flex-col shadow-lg w-full h-full justify-center items-center"
        >
          <div className="items-left p-5">
            <h3 className="text-[#121212]">Development</h3>
            <p className="mt-2 text-[#121212] text-left">
            Once the design is finalized, we move into the development phase, writing clean and scalable code, implementing functionality, and ensuring responsiveness across all devices. We test, optimize, and iterate to ensure your website or digital solution is fast, secure, and performs at the highest level.
            </p>
          </div>

        </motion.div>
      </div>

      <p className="text-gray-300 text-center max-w-4xl mx-auto">
        Building a website involves several key stages, each crucial for ensuring a seamless user experience and effective functionality. Below are the essential steps to guide you through the process from research to development.
      </p>
    </div>
    );
}