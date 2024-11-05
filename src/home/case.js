import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, } from 'react-bootstrap';

const Case = () => {
  return (
    <>
    <section className=" py-5" style={{ backgroundColor: '#E46698', color: '#ffffff' }}>
      <Container className="py-5">
        <Row className=" justify-content-center align-items-center">
          {/* Bild på vänster sida */}
          <Col lg={6} md={12} className="text-center">
            <img
              src="/Photos/Namnlös design (47).png"  
              alt="TechCity"
              className="img-fluid"
             
            />
          </Col>

          {/* Text och knapp på höger sida */}
          <Col lg={6} md={12} className="text-lg-start  mt-4 mt-lg-0">
          <h2 style={{ fontSize: '55px', fontWeight: 'bold' }}>TechCity</h2>

            <p style={{ fontSize: '20px' }}>
              Designing an e-commerce website for selling tech products with careful planning and attention to user experience, aesthetics, and functionality.
            </p>
            <p>
              <strong>Role:</strong> User research + UX/UI designer + brand designer <br />
              <strong>Industry:</strong> e-commerce, Tech
            </p>
            <Link 
  to="/techcity" 
  className="btn mt-3 no-border-button" 
  style={{ 
    backgroundColor: '#F5C518',  
    border: 'none', 
    padding: '12px 24px', 
    borderRadius: '50px', 
    color: 'black', 
    
    textDecoration: 'none', // Prevents default underline styling
    display: 'inline-block' // Makes sure it behaves like a button
  }}
>
  View Case Study
</Link>


          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5" style={{ backgroundColor: '#F5C518', color: 'black' }}>
  <Container className="py-5">
    <Row className="justify-content-center align-items-center">

      {/* Bild visas först på små skärmar, men efter text på stora skärmar */}
      <Col lg={6} md={12} className="text-center order-1 order-lg-2">
        <img
          src="/Photos/Namnlös design (49).png"  
          alt="TechCity"
          className="img-fluid"
        />
      </Col>

      {/* Text visas först på stora skärmar, men efter bild på små skärmar */}
      <Col lg={6} md={12} className="text-lg-start mt-4 mt-lg-0 order-2 order-lg-1">
        <h2 style={{ fontSize: '55px', fontWeight: 'bold' }}>Klimatkoll</h2>
        <p style={{ fontSize: '20px' }}>
          Designing a website for a Swedish school aimed at educating students aged 13-15 about climate change and its impact.
        </p>
        <p>
          <strong>Role:</strong> User research + UX/UI designer + brand designer + implementation <br />
          <strong>Industry:</strong> Educational, Climate
        </p>
        
        <Link 
  to="/klimat" 
  className="btn mt-3 no-border-button" 
  style={{ 
    backgroundColor: '#E46698',  
    border: 'none', 
    padding: '12px 24px', 
    borderRadius: '50px', 
    color:'white',
    
    
    textDecoration: 'none', // Prevents default underline styling
    display: 'inline-block' // Makes sure it behaves like a button
  }}
>
  View Case Study
</Link>
      </Col>

    </Row>
  </Container>
</section>


 
  
    </>
  );
};

export default Case;