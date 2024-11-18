import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-center py-5" >
      <div className="container">
        <p className="mb-2" style={{ fontSize: '16px', color: '#e46698'  }}>
        Thank you for watching! Feel free to reach out.
        </p>
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="mailto:Marahknyfaty@outlook.com" >
            <FaEnvelope style={{ color: '#E46698', fontSize: '20px' }} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/marah-kn/" >
            <FaLinkedinIn style={{ color: '#E46698', fontSize: '20px' }}  target="_blank"
            rel="noopener noreferrer" />
          </Nav.Link>
        </Nav>
        <p style={{ fontSize: '16px', color: '#e46698'  }}>© 2024 Marah kn</p>
      </div>
    </footer>
  );
};

export default Footer;