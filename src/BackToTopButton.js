import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="d-flex align-items-center justify-content-center"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#0b6ba5',
            color: '#fff',
            border: 'none', 
            borderRadius: '50px 50px 0 50px', // Curved corners with an asymmetric shape
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
            padding: '10px 20px',
            fontSize: '16px',
            zIndex: 1000,
          }}
        >
          <FaArrowUp style={{ marginRight: '8px' }} />
          Back To Top
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
