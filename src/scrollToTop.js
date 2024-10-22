import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolla snabbt till toppen utan animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Använd "auto" för direkt scrollning
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
