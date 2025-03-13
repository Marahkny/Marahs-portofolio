import React, { useState, useEffect } from 'react';
import './animated.circle.css'; // Importera CSS

const AnimatedCircle = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY); // Uppdatera scrollvärdet vid scrollning
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Ta bort eventlistener vid komponentavmontering
    };
  }, []);

  return (
    <div className="borderWrapper">
      <div
        className="circleWrapper"
        style={{
          transform: `translate(${Math.min(scroll * 0.05, 20)}px, ${Math.min(scroll * 0.05, 20)}px) rotate(${scroll * 0.2}deg)`, // Flytta och rotera beroende på scrollposition
          boxShadow: `inset 0 0 ${Math.min(scroll * 0.1, 50)}px 4px rgba(59, 66, 159, 0.7), inset 0 0 ${Math.min(scroll * 0.1, 20)}px 2px rgba(245, 245, 245, 0.6), inset 0 0 ${Math.min(scroll * 0.2, 50)}px 12px rgba(184, 51, 106, 0.7)`, // Inner shadow förändras vid scroll
          transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out', // Lägg till smidig övergång
        }}
      >
        <img className="image1" src="/photos/90-icon (1).png" alt="Animated 1" />
        <img className="image2" src="/photos/90-icon (1).png" alt="Animated 2" />
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
        
  
      </div>
    </div>
  );
};

export default AnimatedCircle;





