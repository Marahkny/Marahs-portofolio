import React from 'react';
import { Link } from 'react-router-dom';
import './knapp.css'
import { Container, Row, Col, } from 'react-bootstrap';
import '../FancyText.css'
const Case = () => {
  return (
    <>
 
    <section className=" py-5" style={{ backgroundColor: '#E46698', color: '#ffffff' }}>
      <Container className="py-5">
        <Row className=" justify-content-center align-items-center">
          {/* Bild på vänster sida */}
          <Col 
  lg={6} 
  md={12} 
  className="text-center position-relative" // Använd position-relative för overlay-effekten
  style={{
    backgroundImage: "url('/Photos/yellowpaint.png')", // Bakgrundsbild
    backgroundSize: 'contain', // Anpassar storlek
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   
  }}
>
  {/* Första vanliga bilden */}
  <Link to="/techcity" style={{ textDecoration: 'none' }}>
    <img
      src="/Photos/Namnlös design (47).png"
      alt="TechCity"
      className="img-fluid"
      style={{ 
        zIndex: 1, // Prioriterar denna framför overlay
        position: 'relative', // Behåller sin placering
      }}
    />
  </Link>

</Col>



          {/* Text och knapp på höger sida */}
          <Col lg={6} md={12} className="text-lg-start  mt-4 mt-lg-0">
          <h2 style={{  fontSize: 'clamp(24px, 5vw, 52px)',paddingBottom:'20px' }}>TechCity</h2>

            <p style={{ fontSize: '20px', paddingBottom:'20px'}}>
              Designing an e-commerce website for selling tech products with careful planning and attention to user experience, aesthetics, and functionality.
            </p>
            <p style={{paddingBottom:'20px'}}>
              <strong>Role:</strong> User research + UX/UI designer + brand designer <br />
              <strong>Industry:</strong> e-commerce, Tech
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-start">
            <Link 
  to="/techcity" 
  className="   sty-knapp 
"  style={{textDecoration: 'none'}}

>
  View Case Study
</Link>
</div>

          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5" style={{ backgroundColor: '#F5C518', color: 'black',  }}>
  <Container className="py-5">
    <Row className="justify-content-center align-items-center">

      {/* Bild visas först på små skärmar, men efter text på stora skärmar */}

      <Col 
  lg={6} 
  md={12} 
  className="text-center position-relative order-1 order-lg-2" // Använd position-relative för overlay-effekten
  style={{
    backgroundImage: "url('/Photos/pinkpaint.png')", // Bakgrundsbild
    backgroundSize: 'contain', // Anpassar storlek
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }}
>
  {/* Första vanliga bilden */}
  <Link to="/klimat" style={{ textDecoration: 'none' }}>
    <img
      src="/Photos/Namnlös design (49).png"
      alt="TechCity"
      className="img-fluid"
      style={{ 
        borderRadius: '8px', // Rundade hörn
        zIndex: 1, // Prioriterar denna framför overlay
        position: 'relative', // Behåller sin placering
      }}
    />
  </Link>


</Col>

      {/* Text visas först på stora skärmar, men efter bild på små skärmar */}
      <Col lg={6} md={12} className="text-lg-start mt-4 mt-lg-0 order-2 order-lg-1">
        <h2 style={{  fontSize: 'clamp(24px, 5vw, 52px)', fontFamily: 'Capriola, sans-serif', paddingBottom:'20px' }}>Klimatkoll</h2>
        <p style={{ fontSize: '20px', paddingBottom:'20px' }}>
          Designing a website for a Swedish school aimed at educating students aged 13-15 about climate change and its impact.
        </p>
        <p style={{paddingBottom:'20px'}}>
          <strong>Role:</strong> User research + UX/UI designer + brand designer + implementation <br />
          <strong>Industry:</strong> Educational, Climate
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-start">
        <Link 
  to="/klimat" 
  className="styled-button" style={{textDecoration: 'none'}}

>
  View Case Study
</Link>
</div>
      </Col>

    </Row>
  </Container>
</section>


 
  
    </>
  );
};

export default Case;