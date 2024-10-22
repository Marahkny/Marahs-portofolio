import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../FancyText.css';

const Herobild = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '100vh' }}>
        
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: '0',
            left: '0',
            zIndex: '-1',
          }}
        >
          <source src="/Photos/back.mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
           
            zIndex: '1',
          }}
        ></div>

        {/* Content */}
        <Container
          fluid
          className="d-flex justify-content-center align-items-center text-center"
          style={{ minHeight: '100vh', position: 'relative', zIndex: '2', color: '#fff' }} // Centered content with white text
        >
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-6" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                Hello! I’m
              </h1>
              <h2 style={{ color: '#e46698', fontSize: '10vw', fontFamily: 'Patrick Hand, cursive', fontWeight: 'bold' }}>
  Marah Kn
</h2>

              <p className="lead fancy-text" style={{ fontSize: '24px', fontFamily: 'Patrick Hand, cursive' }}>
                A <span className="fancy-underline">web editor </span> with an educational background in UI/UX design, frontend development, and graphic design.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Herobild;

