import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
const Herobild = () => {
    return (
      <>
         {/* Hero Section */}
         <section className="hero-section">
        <Container fluid className="bg-light text-center py-5" >
          <Row className="justify-content-center">
            <Col md={8}>
            <h1 className="display-6" style={{ fontFamily: 'Patrick Hand, cursive' }}>
  Hello! I’m
</h1>

              <h2 className="display-1" style={{color:'#e46698' }}>Marah Kn</h2>
              <p className="lead" style={{fontSize:'20px'}}>
                A web editor with an educational background in UI/UX design, frontend development, and graphic design.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      </>
        );
    };
    
    export default Herobild;