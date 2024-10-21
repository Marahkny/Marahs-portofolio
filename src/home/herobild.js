import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../FancyText.css';

const Herobild = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: 'url("/Photos/backgrind.gif")', // Ändra till din bilds URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Sektionen täcker hela skärmen
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          color: '#fff', // Gör texten vit för att synas bättre på mörk bakgrund
        }}
      >
        <Container fluid className="text-center">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-6" style={{ fontFamily: 'Patrick Hand, cursive' }}>
                Hello! I’m
              </h1>
              <h2 className="display-1" style={{ color: '#e46698', fontFamily: 'Patrick Hand, cursive', fontWeight: 'bold' }}>
                Marah Kn
              </h2>
              <p className="lead fancy-text" style={{ fontSize: '20px', fontFamily: 'Patrick Hand, cursive' }}>
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
