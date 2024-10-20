import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Vi använder en separat CSS-fil för stilen
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Header för stora skärmar */}
      <Navbar bg="light" expand="lg" sticky="top" className="d-none d-lg-block">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              alt="Logo"
              style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}>
  About
</Nav.Link>
            <Nav.Link href="/" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}
            >
              Resume
            </Nav.Link>
            <Nav.Link href="mailto:Marahknyfaty@outlook.com">
              <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
              <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hamburger ikon för små och medelstora skärmar */}
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
            <FaBars style={{ fontSize: '24px', color: '#000' }} />
          </Button>
        </Container>
      </Navbar>

      {/* Fullskärmsmeny vid hamburgermeny */}
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
            <div className="menu-icons ">
              <Nav.Link href="mailto:Marahknyfaty@outlook.com">
                <FaEnvelope style={{ color: '#E46698', fontSize: '24px',  }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
                <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px',  }} />
              </Nav.Link>
              <Button variant="link" onClick={handleCloseMenu}>
                <FaTimes style={{ fontSize: '24px', color: '#000' }} />
              </Button>
            </div>
          </div>

          <div className="menu-links text-center">
          <Nav.Link as={Link} to="/about" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '20px' }}>
  About
</Nav.Link>
            <Nav.Link href="/" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '24px' }}>
              Work
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1QDNclcjHPXfaxCqg-uQxOFidRnqGoT-z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '24px' }}
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
