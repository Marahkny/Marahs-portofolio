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
        
        
  
      </div>
    </div>
  );
};

export default AnimatedCircle;





