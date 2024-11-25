import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

const Om = () => {
  return (
    <Container>
      <Row className="my-5 py-5 justify-content-center">
        {/* Första kolumnen */}
        <Col md={10} className="align-items-center pb-4">
          <h1
            className="fancy-underline"
            style={{
              textAlign: 'center',
              color: '#e46698',
              margin: '0 auto',
            }}
          >
            Hello! I'm Marah kn
          </h1>
        </Col>
        
        {/* Centralt innehåll */}
        <Col xs={12} md={10} className="center-content">
          <p className="about-text py-2">
            Ten years ago, I was a math teacher in Damascus, where I discovered my passion for solving problems and finding creative solutions. I dreamed of learning coding and design to apply that same problem-solving mindset in new ways. After moving to Sweden, I decided to pursue an education that combined these interests.
          </p>

          <div className="pb-5">
            <p>My Journey to becoming a Web Editor</p>
            <img
              className="img-fluid"
              src="/Photos/2014.png"
              alt="tallinje"
              style={{ maxWidth: '100%' }}
            />
          </div>

          <h2 style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>Who am I today?</h2>
          <p className="about-text pb-3">
            Today, I’m a web editor based in Sweden, originally from Syria. My journey has been fueled by determination and a desire to grow. In 2024, I graduated and began my career, blending skills in coding, design, and innovative thinking to create meaningful digital solutions.
          </p>

          <h2 style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>What drives me?</h2>
          <p className="about-text pb-3">
            With a strong focus on UX design, I specialize in identifying and analyzing needs and requirements to guide projects in the right direction. I provide solution-oriented proposals and enjoy implementing them with attention to both the UX and frontend aspects. My deep interest and skill set in UX design, paired with frontend development, allow me to create user-centered, functional, and aesthetically pleasing digital experiences.
          </p>

          <h2 style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>My mindset</h2>
          <p className="about-text">
            As a person, I am positive, adaptable, and confident, qualities that help me embrace new challenges and work efficiently both independently and as part of a team. I am deeply committed to personal growth and always open to feedback and new learning opportunities, as I believe in continuous personal and professional development.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Om;

