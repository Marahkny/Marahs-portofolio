import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Develop = () => {
  return (
    <><Container fluid className="d-flex justify-content-center align-items-center ">
      <Row className="justify-content-center text-center">
        <Col xs={12}>
        <p className="lead fancy-underline text-center p-2">Lo-fi prototype</p>
        </Col>
        <Col xs={12} md={8}>
        <img 
        src="/Photos/lo-fi.png" // Replace with your image URL
        alt="persona"
        className="img-fluid shadow" // This class makes the image responsive
        style={{ maxWidth: '800px', width: '100%', height: 'auto' }} // Optional for additional responsiveness
      />  
        </Col>
      </Row>
    </Container>
    <Container fluid className="d-flex justify-content-center align-items-center p-4" style={{backgroundColor:'#f8f9fa'}}>
    <Row className="justify-content-center pb-5">
      <Col md={8} className=' text-center' >
        {/* First paragraph centered */}
        <p className="lead fancy-underline text-center p-2">Design system</p>
        {/* Second paragraph left-aligned but horizontally centered */}
        <p className="text-left">
        Detailed scenarios for each persona were crafted to better represent their expectations and create a more engaging experience.
        </p>
      </Col>
  <p className='p4'></p>
      <Col xs={12} md={6} className="d-flex justify-content-center p-3">
        <img 
          src="/Photos/AlicaSen.png" 
          alt="Persona Alicia" 
          className="img-fluid"
        />
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-center p-3 ">
        <img 
          src="/Photos/gaberilsSen.png" 
          alt="Persona Gabriel" 
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  </>
  );
}

export default Develop;
