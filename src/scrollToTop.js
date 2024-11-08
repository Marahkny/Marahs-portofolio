import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top without any animation
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For compatibility with older browsers
  }, [pathname]);

  return null;
};

export default ScrollToTop;


