


 "use client";
import { useEffect } from "react";
import "./cirkle.css"
const Circles = () => { 
  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <>
      <div id="blob" className="blob"></div>
      <div id="blur"></div>
      
    </>
  );
};

export default Circles;
