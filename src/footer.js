import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-5" >
      <div className="container">
        <p className="mb-2" style={{ fontSize: '24px', color: 'black',  fontFamily: 'Patrick Hand, cursive'  }}>
          I make your web easy to use.
        </p>
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="mailto:Marahknyfaty@outlook.com" >
            <FaEnvelope style={{ color: '#E46698', fontSize: '24px' }} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/marah-kn/" >
            <FaLinkedinIn style={{ color: '#E46698', fontSize: '24px' }}  target="_blank"
            rel="noopener noreferrer" />
          </Nav.Link>
        </Nav>
        <p style={{ fontSize: '16px', color: 'black',  fontFamily: 'Patrick Hand, cursive'  }}>© 2024 Marah kn</p>
      </div>
    </footer>
  );
};

export default Footer;