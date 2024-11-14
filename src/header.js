import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false); // New state to control header visibility
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isHeroPage = location.pathname === '/';

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header initially, then hide if scrolled past 100vh and scrolling down
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsHeaderHidden(true); // Hide header when scrolling down
      } else if (currentScrollY <= 100 || currentScrollY < lastScrollY) {
        setIsHeaderHidden(false); // Show header when scrolling up or near the top
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <Navbar
      expand="lg"
      className={`header ${isScrolled ? 'scrolled' : ''} ${isHeaderHidden ? 'hidden' : ''} ${!isHeroPage ? 'alt-header' : ''} d-none d-lg-block`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="/Photos/Logo.png" alt="Logo" style={{ maxWidth: '15%' }} />
        </Navbar.Brand>
        <Nav className="ms-auto nav-links">
          <Nav.Link 
            as={Link} 
            to="/about" 
            className={`nav-link-custom ${isScrolled ? 'scrolled-link' : ''}`} 
            style={{  fontSize: '16px' }}
          >
            About
          </Nav.Link>
          <Nav.Link 
            href="/" 
            className={`nav-link-custom ${isScrolled ? 'scrolled-link' : ''}`}
            style={{ fontSize: '16px' }} 
          >
            Work
          </Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-link-custom ${isScrolled ? 'scrolled-link' : ''}`}
            style={{  fontSize: '16px' }} 
          >
            Resume
          </Nav.Link>
          <div className="icon-links">
            <Nav.Link href="mailto:Marahknyfaty@outlook.com">
              <FaEnvelope className="icon" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/marah-kn/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="icon" />
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>

      {/* Hamburger icon for small and medium screens */}
      <Navbar bg="light" expand="lg" sticky="top" className="d-lg-none">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              alt="Logo"
              style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}
            />
          </Navbar.Brand>
          <Button variant="link" onClick={handleOpenMenu} className="ms-auto">
            <FaBars style={{ fontSize: '20px', color: '#E46698' }} />
          </Button>
        </Container>
      </Navbar>

      {/* Fullscreen menu when hamburger menu is open */}
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <div className="menu-header">
            <Navbar.Brand href="/">
              <img
                src="/Photos/Logo.png"
                alt="Logo"
                style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}
              />
            </Navbar.Brand>
            <div className="menu-icons">
              <Nav.Link href="mailto:Marahknyfaty@outlook.com">
                <FaEnvelope style={{ color: '#E46698', fontSize: '20px' }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
                <FaLinkedinIn style={{ color: '#E46698', fontSize: '20px' }}   target="_blank"
            rel="noopener noreferrer" />
              </Nav.Link>
              <Button variant="link" onClick={handleCloseMenu}>
                <FaTimes style={{ fontSize: '20px', color: '#E46698' }} />
              </Button>
            </div>
          </div>

          <div className="menu-links text-center">
            <Nav.Link as={Link} to="/about" className="nav-link-custom" style={{ fontSize: '20px' }}>
              About
            </Nav.Link>
            <Nav.Link href="/" className="nav-link-custom" style={{ fontSize: '20px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-custom"
              style={{  fontSize: '20px' }}
            >
              Resume
            </Nav.Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;


