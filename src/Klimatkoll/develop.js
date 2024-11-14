import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Develop = () => {
  return (
    < >
    <div className="justify-content-center text-center my-5"> 
    <h2 style={{
        background: '#0b6ba5',
        color: 'white',
        padding: '20px 40px',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Responsive font size
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
    }}>
    Develop phase
          </h2>
    </div>
    <Container fluid className="d-flex justify-content-center align-items-center py-5" >
  <Row className="justify-content-center text-start">
    <Col xs={12} md={8}>
    <div className='pb-3'>
      <h3 className="fancy-underline" style={{fontSize: '45px'}}>
        Lo-fi Prototype
      </h3></div>
      <p style={{textAlign: 'left' }}>
        A low-fidelity prototype is a simple and rough sketch of a design used to explore different ideas and features early in the development process. It was utilized to refine concepts and ensure effective decision-making before finalizing the design.
      </p>
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center">
      <img 
        src="/Photos/lo-fi.png" 
        alt="Lo-fi Prototype"
        className="img-fluid shadow-lg rounded" 
      
      />  
    </Col>
  </Row>
</Container>

    <Container fluid className="d-flex justify-content-center align-items-center py-5">
    <Row className="justify-content-center">
      <Col md={8} className='text-start' >
       <div className='pb-3'>
        <h3 className=" fancy-underline" style={{fontSize: '45px' }}>Design system</h3>
        </div> 
        <p style={{textAlign: 'left' }}>
        After the low-fidelity prototypes were selected, a design system was developed, and the application’s colors were determined. Shades of green and beige were chosen for their earthy tones, and the calming effect of green was deemed suitable for addressing the sensitive topic of climate change.
        </p>
      </Col>

      <Col xs={5} md={5} className="d-flex justify-content-center ">
        <img 
          src="/Photos/färger.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
      <Col xs={5} md={5} className="d-flex justify-content-center ">
        <img 
          src="/Photos/text.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  <Container fluid className="d-flex justify-content-center align-items-center py-5">
  <Row className="justify-content-center text-start">
    <Col md={8} className='pb-3'>
      {/* Title centered */}
      <h3 className=" fancy-underline" style={{fontSize: '45px' }}>Prototyping</h3>
    </Col>
  


    {/* Images in responsive layout */}
    <Col xs={12} md={8} className="d-flex justify-content-center p-2">
      <img 
        src="/Photos/proto1.png" 
        alt="Prototyping " 
        className="img-fluid " 
       
      />
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center p-2">
      <img 
        src="/Photos/proto2.png" 
        alt="Prototyping " 
        className="img-fluid" 
      
      />
    </Col>
  </Row>
</Container>

  <Container fluid className="d-flex justify-content-center align-items-center py-5">
  <Row className="justify-content-center text-start pb-5">
    <Col xs={12} md={8}>
      {/* First paragraph centered */}
      <h3 className=" fancy-underline" style={{ fontSize: '45px' }}>Implementation</h3>
      
      {/* Second paragraph left-aligned but horizontally centered */}
      <p className=" py-4" style={{textAlign: 'left' }}>
        The website was built using ReactJS, styled with the CSS framework Bootstrap, and powered by Firebase for backend services. You can view the website and the component tree below.
      </p>

      {/* Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
        <Button 
          href="https://klimatkoll.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: '#0B6BA5', 
            color: 'white', 
            border: 'none', 
            padding: '12px 36px', 
            borderRadius: '50px', 
            fontSize: '1.1rem',
          
           
          }}
         
        >
          View Website
        </Button>
        <Button 
          href="https://github.com/Marohaa/klimatkoll-ClimateCheck-.git" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: '#E46698', 
            color: 'white', 
            border: 'none', 
            padding: '12px 36px', 
            borderRadius: '50px', 
            fontSize: '1.1rem',
          
          }}
      
        >
          View Code
        </Button>
      </div>
    </Col>

    {/* Image section */}
    <Col xs={12} className="d-flex justify-content-center pt-5">
      <img 
        src="/Photos/componentTree.png" 
        alt="Component Tree" 
        className="img-fluid" 
       
      
      />
    </Col>
  </Row>
</Container>

  </>
  );
}

export default Develop;
