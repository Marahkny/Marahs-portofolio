import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../FancyText.css';

const Herobild = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '80vh' }}>
        


        {/* Content */}
        <Container
          fluid
          className="d-flex justify-content-center align-items-center text-center"
          style={{ minHeight: '85vh', zIndex: '2', color: '#fff', background:'white' }} 
        >
          <Row className="justify-content-center text-start" >
            <Col md={6} >
              <h1 style={{  fontSize: '6vw',  color:'#e46698', paddingBottom:'20px'}}>
              Hello!  <span style={{ fontWeight:'bold'}}>I’m Marah </span>
</h1>
              <p className=" fancy-text" style={{ fontSize: '20px',color:'#e46698' }}>
                A <span className="fancy-underline">web editor</span> with an educational background in UI/UX design, frontend development, and graphic design.
              </p>
            </Col>
            <Col 
  md={4} 
  className="text-center d-flex justify-content-center align-items-center"
  style={{
    minHeight: '300px', // Säkerställer att det är tillräckligt med utrymme runt bilden
  }}
>
  {/* Ny Lottie-spelare */}
  <dotlottie-player
    src="https://lottie.host/fc314af5-d10b-4db9-8422-796f6d90e091/zR2mUFJ6GA.json"
    background="transparent"
    speed="1"
    style={{ width: '300px', height: '300px' }}
    loop
    autoplay
  ></dotlottie-player>
</Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Herobild;

