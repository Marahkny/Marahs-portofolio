import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4" style={{ borderTop: '1px solid #dee2e6' }}>
      <div className="container">
        <p className="mb-2" style={{ fontSize: '20px', color: 'black',  fontFamily: 'Patrick Hand, cursive'  }}>
          I make your web easy to use.
        </p>
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="mailto:Marahknyfaty@outlook.com" >
            <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/marah-kn/" >
            <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
          </Nav.Link>
        </Nav>
      </div>
    </footer>
  );
};

export default Footer;