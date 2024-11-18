import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Head.css' 
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Navbar  expand="lg" className="d-none d-lg-block" >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              alt="Logo"
              style={{  maxWidth: '15%' }}
            />
          </Navbar.Brand>
          <Nav className="ms-auto nav-links">
          <Nav.Link as={Link} to="/about" className="nav-link-custom" style={{  fontSize: '16px' }}>
  About
</Nav.Link>
<Nav.Link href="/" className="nav-link-custom" style={{ fontSize: '16px' }}>
  Work
</Nav.Link>
<Nav.Link
  href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link-custom"
  style={{  fontSize: '16px' }}
>
  Resume
</Nav.Link>

            <Nav.Link href="mailto:Marahknyfaty@outlook.com">
              <FaEnvelope style={{ color: '#E46698', fontSize: '20px' }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/marah-kn/"   target="_blank"
            rel="noopener noreferrer">
              <FaLinkedinIn style={{ color: '#E46698', fontSize: '20px' }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hamburger icon for small and medium screens */}
      <Navbar  expand="lg" sticky="top" className="d-lg-none">
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
                <FaLinkedinIn style={{ color: '#E46698', fontSize: '20px' }} />
              </Nav.Link>
              <Button variant="link" onClick={handleCloseMenu}>
                <FaTimes style={{ fontSize: '20px', color: '#E46698' }} />
              </Button>
            </div>
          </div>

          <div className="menu-links text-center">
            <Nav.Link as={Link} to="/about" className="nav-link-custom" style={{ fontSize: '16px' }}>
              About
            </Nav.Link>
            <Nav.Link href="/" className="nav-link-custom" style={{  fontSize: '16px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-custom"
              style={{  fontSize: '16px' }}
            >
              Resume
            </Nav.Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Head;