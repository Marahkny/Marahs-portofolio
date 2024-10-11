import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';

const Case = () => {
  return (
    <>
    <section className=" py-5" style={{ backgroundColor: '#E46698', color: '#ffffff' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Bild på vänster sida */}
          <Col lg={6} md={12} className="text-center">
            <img
              src="/Photos/Namnlös design (47).png"  // Byt ut till korrekt bildväg
              alt="TechCity"
              className="img-fluid"
             
            />
          </Col>

          {/* Text och knapp på höger sida */}
          <Col lg={6} md={12} className="text-lg-start text-center mt-4 mt-lg-0">
          <p style={{ fontSize: '60px', fontWeight: 'bold' }}>TechCity</p>

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

    <section className=" py-5" style={{ backgroundColor: '#F5C518', color: 'black' }}>
      <Container className=" py-5">
        <Row className="align-items-center">
        

          {/* Text och knapp på höger sida */}
          <Col lg={6} md={12} className="text-lg-start text-center mt-4 mt-lg-0">
            <p style={{ fontSize: '60px', fontWeight: 'bold' }}>Klimatkoll</p>
            <p style={{ fontSize: '20px' }}>
            Designing an e-commerce website for selling tech products with careful planning and attention to user experience, aesthetics, and functionality            </p>
            <p>
              <strong>Role:</strong> User research + UX/UI designer + brand designer + implementation <br />
              <strong>Industry:</strong> Educational, Climate
            </p>
            <Button 
  href="#Techcity"  
  className="mt-3 no-border-button" 
  style={{ backgroundColor: '#0B6BA5',
  
    border: 'none', // Tar bort bordern
    padding: '12px 24px', // Lägger till padding
    borderRadius: '50px'
  }} 
>
  View Case Study
</Button>

          </Col>
            {/* Bild på vänster sida */}
            <Col lg={6} md={12} className="text-center">
            <img
              src="/Photos/Namnlös design (49).png"  // Byt ut till korrekt bildväg
              alt="TechCity"
              className="img-fluid"
              
            />
          </Col>
        </Row>
      </Container>
    </section>

    <section className=" py-5" style={{ backgroundColor: '#0B6BA5', color: '#ffffff' }}>
      <Container className=" py-5">
        <Row className="align-items-center">
          {/* Bild på vänster sida */}
          <Col lg={6} md={12} className="text-center">
            <img
              src="/Photos/Namnlös design (48).png"  // Byt ut till korrekt bildväg
              alt="TechCity"
              className="img-fluid"
              
            />
          </Col>

          {/* Text och knapp på höger sida */}
          <Col lg={6} md={12} className="text-lg-start text-center mt-4 mt-lg-0">
            <p style={{ fontSize: '60px', fontWeight: 'bold' }}>noQ</p>
            <p style={{ fontSize: '20px' }}>
            Designing an e-commerce website for selling tech products with careful planning and attention to user experience, aesthetics, and functionality            </p>
            <p>
              <strong>Role:</strong> Web designer  <br />
              <strong>Industry:</strong> Association, Homeless
            </p>
            <Button 
  href="#case-study"  
  className="mt-3 no-border-button" 
  style={{ 
    backgroundColor: '#E46698', 
     
    border: 'none', // Tar bort bordern
    padding: '12px 24px', // Lägger till padding
    borderRadius: '50px'
  }}
>
  View Case Study
</Button>


          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Case;