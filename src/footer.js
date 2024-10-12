import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4" style={{ borderTop: '1px solid #dee2e6' }}>
      <div className="container">
        <p className="mb-2" style={{ fontSize: '20px', color: '#343a40', fontFamily: 'Dancing Script, cursive' }}>
          I make your web easy to use.
        </p>
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="mailto:Marahknyfaty@outlook.com" className="mx-2">
            <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/marah-kn/" className="mx-2">
            <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }} />
          </Nav.Link>
        </Nav>
      </div>
    </footer>
  );
};

export default Footer;