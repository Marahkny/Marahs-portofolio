import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Header */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/Photos/Logo.png"
              className="d-inline-block align-top"
              alt="Logo"
              style={{ width: 'auto', height: 'auto', maxWidth: '70px' }}  // Bildens egen storlek
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* Flytta navigationslänkarna till höger */}
              <Nav.Link href="/about" style={{ fontFamily: 'Patrick Hand, cursive', fontSize:'20px'}}>About</Nav.Link>
              <Nav.Link href="/" style={{ fontFamily: 'Patrick Hand, cursive',fontSize:'20px' }}>Work</Nav.Link>
              <Nav.Link href="/" style={{ fontFamily: 'Patrick Hand, cursive',fontSize:'20px' }}>Resume</Nav.Link>

            </Nav>
            <Nav className="d-flex align-items-center"> {/* Extra ikonsektion */}
              <Nav.Link href="mailto:Marahknyfaty@outlook.com">
                <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/marah-kn/">
                <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
    </>
  );
};

export default Header;