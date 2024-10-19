import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Develop = () => {
  return (
    < >
    <div className="justify-content-center text-center mt-4 pt-4"> 
    <h2 style={{ backgroundColor: '#F5C518', color: 'black', padding: '30px', fontFamily: 'Patrick Hand, cursive'  }}>
    Develop phase
          </h2>
    </div>
    <Container fluid className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: '#f7f9fc' }}>
  <Row className="justify-content-center text-center">
    <Col xs={12} md={8} className="mb-4">
      <h2 className="display-4 fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333' }}>
        Lo-fi Prototype
      </h2>
      <p >
        A low-fidelity prototype is a simple and rough sketch of a design used to explore different ideas and features early in the development process. It was utilized to refine concepts and ensure effective decision-making before finalizing the design.
      </p>
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center">
      <img 
        src="/Photos/lo-fi.png" 
        alt="Lo-fi Prototype"
        className="img-fluid shadow-lg rounded" 
        style={{ 
          maxWidth: '90%', 
          height: 'auto', 
          borderRadius: '15px', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', 
       
        }}
        
      />  
    </Col>
  </Row>
</Container>

    <Container fluid className="d-flex justify-content-center align-items-center p-4" style={{backgroundColor:'#f8f9fa'}}>
    <Row className="justify-content-center pb-5">
      <Col md={8} className=' text-center' >
        {/* First paragraph centered */}
        <h2 className="display-4 fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333' }}>Design system</h2>
        {/* Second paragraph left-aligned but horizontally centered */}
        <p className="text-left py-5">
        After the low-fidelity prototypes were selected, a design system was developed, and the application’s colors were determined. Shades of green and beige were chosen for their earthy tones, and the calming effect of green was deemed suitable for addressing the sensitive topic of climate change.
        </p>
      </Col>
  <p className='p4'></p>
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
  <Container fluid className="d-flex justify-content-center align-items-center p-5" style={{ backgroundColor: '#f7f9fc' }}>
  <Row className="justify-content-center text-center pb-5">
    <Col md={8}>
      {/* Title centered */}
      <h2 className="display-4 fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333' }}>Prototyping</h2>
    </Col>
  
    {/* Spacer for added breathing room */}
    <div style={{ marginBottom: '2rem' }}></div>

    {/* Images in responsive layout */}
    <Col xs={12} md={12} className="d-flex justify-content-center p-3">
      <img 
        src="/Photos/proto1.png" 
        alt="Prototyping " 
        className="img-fluid shadow rounded" 
        style={{ 
         
          borderRadius: '15px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
          
        }}
     
      />
    </Col>

    <Col xs={12} md={12} className="d-flex justify-content-center p-3">
      <img 
        src="/Photos/proto2.png" 
        alt="Prototyping " 
        className="img-fluid shadow rounded" 
        style={{ 
         
          borderRadius: '15px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        
        }}
     
      />
    </Col>
  </Row>
</Container>

  <Container fluid className="d-flex justify-content-center align-items-center p-5" style={{ backgroundColor: '#f4f6f9' }}>
  <Row className="justify-content-center text-center pb-5">
    <Col xs={12} md={8}>
      {/* First paragraph centered */}
      <h2 className="display-4 fancy-underline" style={{ color: '#333', fontFamily: 'Patrick Hand, cursive' }}>Implementation</h2>
      
      {/* Second paragraph left-aligned but horizontally centered */}
      <p className="text-left py-4" >
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
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
           
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
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            transition: 'background-color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#ec7ba6'; e.target.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#E46698'; e.target.style.transform = 'scale(1)'; }}
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
        style={{ 
          borderRadius: '15px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
        
          
        }}
      
      />
    </Col>
  </Row>
</Container>

  </>
  );
}

export default Develop;
