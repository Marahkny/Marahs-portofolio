
import { MdArrowOutward } from "react-icons/md";
import Desc from "./desc";
import Zone90Section from "../Home/zone90secation";

export default function Framsteg() {
    return (<>
     <div className=" px-6 pt-20">
     <h1>Framsteg förening</h1>
     <p className=" pt-5 text-[24px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
     A website for connection and integration association
</p>
     </div>
   <div className="flex justify-center items-center pt-10 px-6 ">
    <img
        src="/photos/project 1.png" 
        alt="framsteg förening website" 
       
        className="w-full h-auto object-contain rounded-[20px]"
    />
</div>


    <div className=" py-40 px-6 ">
      <div className="grid md:grid-cols-[60%_30%] grid-cols-1 gap-10 max-w-8xl mx-auto">
        {/* Vänster kolumn */}
        <div>
        <h2>Overview</h2>
          <p className="mt-6 lg:w-[80%] md:w-[100%]">
          Framsteg Förening is a cultural association that supports integration between newcomers and Swedish families by providing essential resources, services, and opportunities for engagement. The goal of the project was to design and develop a website that enhances accessibility, strengthens community connections, and simplifies user interaction.          </p>
        </div>
        {/* Höger kolumn */}
        <div className="space-y-6 justify-center">
          <div>
            <h3 className="text-[24px]">Case client</h3>
            <p>Framsteg förening</p>
          </div>
          <div>
            <h3 className="text-[24px]">When</h3>
            <p>Jan - Feb 2025</p>
          </div>
          <div>
            <h3 className="text-[24px]">What</h3>
            <p>Brand & WordPress website</p>
          </div>
          <div>
            <h3 className="text-[24px]">Visit</h3>
            <a 
  href="https://webbred2.utb.hb.se/~s2105409/wp/" 
  className=" hover:underline flex items-center gap-2"
  target="_blank" 
  rel="noopener noreferrer"
>
  Framsteg förening
  <MdArrowOutward className="text-[24px]" />
</a>          </div>
        </div>
      </div>
    </div>
<Desc />
    <Zone90Section />
    </>
    );
}