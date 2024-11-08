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
          <source src="/Photos/Back.mp4" />
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
            <Col md={10}>
              <h1 style={{  fontSize: '12vw', fontFamily: 'Patrick Hand, cursive', fontWeight: 'bold' }}>
              Hello! I’m Marah 
</h1>

              <p className=" fancy-text" style={{ fontSize: '30px'  }}>
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

