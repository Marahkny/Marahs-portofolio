import React, { useEffect, useState } from 'react';

const Brush = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / maxScroll) * 100;
      setScrollPosition(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        width: '50%',
        height: '5px', // Brush stroke height
        background: ' #0b6ba5',
        transform: `translateX(${scrollPosition}%)`, // Moves the brush stroke
        transition: 'transform 0.1s linear', // Smooth movement
        
      }}
    ></div>
  );
};

export default Brush;


