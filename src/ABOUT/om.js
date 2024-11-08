import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import './about.css';

const Om = () => {
  const [Atday, setIsAtday] = useState(false);

  // Function to toggle between weekday and weekend
  const toggleImage = () => {
    setIsAtday(!Atday);
  };

  return (
    <Container>
      <Row className="my-5">
        {/* First column with the image and controls */}
        <Col md={4} className="d-flex flex-column align-items-center">
          <div className="modern-card">
            <p className="status-text">
              {Atday ? 'At day ' : 'At night'}
            </p>
            <img
              src={Atday ? '/Photos/day.png ' : '/Photos/weekend.png'}
              alt="Display"
              className="responsive-image"
            />
            <div onClick={toggleImage} className="toggle-button">
              <span className={`toggle-option ${!Atday ? 'active' : ''}`}>
                <FaSun />
              </span>
              <span className={`toggle-option ${Atday ? 'active' : ''}`}>
                <FaMoon />
              </span>
            </div>
          </div>
        </Col>


        {/* Second column (col-md-8) for additional content */}
        <Col xs={12} md={8}>
        <h1 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', textAlign: 'center', fontSize: '65px'}}>Hello, I’m Marah</h1>

          <p className="about-text pt-4">
          A web editor based in Sweden, originally from Syria. My journey began when I moved to Sweden a few years ago and decided to pursue a career in web editing. With passion and determination, I graduated in 2024 and started my career in this field.
          </p>
          <p className="about-text">
          With a strong focus on UX design, I specialize in identifying and analyzing needs and requirements to guide projects in the right direction. I provide solution-oriented proposals and enjoy implementing them with attention to both the UX and frontend aspects. My deep interest and skill set in UX design, paired with frontend development, allow me to create user-centered, functional, and aesthetically pleasing digital experiences.
          </p>
          <p className="about-text">
          As a person, I am positive, adaptable, and confident, qualities that help me embrace new challenges and work efficiently both independently and as part of a team. I am deeply committed to personal growth and always open to feedback and new learning opportunities, as I believe in continuous personal and professional development.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Om;
