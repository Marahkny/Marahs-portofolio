import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css';
import Problem from './Problem';
// Main Section component
const Sektion = () => {
  return (
    <>
      <Container fluid className="p-4" style={{ backgroundColor: '#E46698', color: '#ffffff' }}>
        <Row className="justify-content-center align-items-center pt-5 pb-5">
          {/* Left Section */}
          <Col xs={12} md={6} className="text-center">
            <img 
              src="/Photos/tech.gif" 
              alt="Techcity" 
              className="img-fluid mb-3" 
              style={{ borderRadius: '15px', height: 'auto' }} 
            />
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6}>
            <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>TechCity</h1>
            <p >
              Designing an e-commerce website for selling tech products with 
              careful planning and attention to user experience, aesthetics, and functionality.
            </p>
            <p><strong>Project Type:</strong> Design an e-commerce website</p>
            <p><strong>Role:</strong> User research + UX/UI designer + brand designer</p>
            <p><strong>Industry:</strong> E-commerce, Tech</p>
            <p><strong>Tools:</strong> Figma, Canva, Illustrator, Google Docs</p>
            <p><strong>Duration:</strong> 2 months, 2024</p>
            <Button 
              href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&node-type=canvas&t=tpaCGDBPEb2loNS1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
              style={{ backgroundColor: '#F5C518', color: 'black', border: 'none', padding: '12px 24px', borderRadius: '50px' }}
            >
              View hi-fi prototype
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
      
  </Row>
  </Container>
  <div ></div>
   <Container className="pt-5 pb-5">
      <Row className="d-flex justify-content-center text-center">
        {/* Discover Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive',fontSize: '45px'}}>Discover</h3>
          <ul style={{ listStyleType: 'none', padding: '20px' }}>
            <li>User Research</li>
            <li>Market Analysis</li>
            <li>Personas</li>
          </ul>
        </Col>

        {/* Define Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>Define</h3>
          <ul style={{ listStyleType: 'none', padding: '20px' }}>
            <li>HMW</li>
            <li>User flow</li>
            <li>Wireframes</li>
          </ul>
        </Col>

        {/* Develop Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>Develop</h3>
          <ul style={{ listStyleType: 'none', padding: '20px'}}>
            <li>Prototyping</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="justify-content-center text-center mb-5"> 
    <h2 style={{ backgroundColor: '#F5C518', color: 'black', padding: '30px',fontSize: '55px', fontFamily: 'Patrick Hand, cursive' }}>
     Discover phase
          </h2>
    </div>
    <Container fluid className="mb-5"  >
      {/* User Research Header */}
      <Row className="justify-content-center text-center p-2">
        <Col md={12} >
          
          <h3  className=" fancy-underline" style={{ color: '#333', fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>User Research</h3>
        </Col>
      </Row>

     
    </Container>
   
<Problem />

  
    <Container fluid className="d-flex justify-content-center align-items-center py-5" >
  <Row className="justify-content-center text-center">
    <Col xs={12} md={10}>
      <h3 className=" fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>
      Market Analysis
      </h3>
      <p className='pt-5' style={{textAlign: 'left'}}>
  This table compares the UI/UX of Elgiganten and Power. Both face issues with wish list visibility and login frustration during checkout, affecting user experience. Elgiganten has a modern design but lacks smooth login, while Power’s modal makes wish list addition easier.
</p>

    </Col>

    <Col xs={12} md={12} className="d-flex justify-content-center">
      <img 
        src="/Photos/Company.png"
        alt="company"
        className="img-fluid" 
      />  
    </Col>
  </Row>
</Container>

<Container fluid className="d-flex justify-content-center align-items-center py-5" >
  <Row className="justify-content-center text-center">
    <Col xs={12} md={8} >
      <h3 className=" fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>
      Personas
      </h3>
      <p  className='pt-5' style={{textAlign: 'left'}}>Creating this persona, "Martin," involved analyzing user behaviors, goals, and pain points to better understand the needs of a tech-savvy online shopper. By identifying his motivations—such as a desire for convenience and efficient planning through wish lists—and his frustrations with intrusive login processes, the persona captures key elements for designing a smoother, more intuitive user experience. </p>
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center">
      <img 
        src="/Photos/Emma (1).png"
        alt="Lo-fi Prototype"
        className="img-fluid" 
        style={{ 
        
          height: 'auto', 
       
        }}
        
      />  
    </Col>
  </Row>
</Container>

    <div className="justify-content-center text-center"> 
    <h2 style={{ backgroundColor: '#0b6ba5', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive',fontSize: '55px'}}>
    Define phase
          </h2>
          <h3 className="fancy-underline " style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>HMW</h3>
    </div>
    <section className="container py-5">
  <h3 className="text-center mb-4" style={{ fontFamily: 'Patrick Hand, cursive' }}>HMWs to Product Goals</h3>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4 flex-grow-1" style={{ backgroundColor: '#e46698', borderRadius: '8px', color: 'white',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h5 style={{fontFamily: 'Patrick Hand, cursive'}}>How might we help the user keep their wishlist items after logging in?</h5>
        <p>By implementing persistent storage mechanisms such as local storage or syncing wishlist data with the user's account, we ensure the wishlist is retained after login.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4  flex-grow-1" style={{ backgroundColor: '#0b6ba5', borderRadius: '8px', color: 'white',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h5 style={{fontFamily: 'Patrick Hand, cursive'}}>How might we help the user remember their wishlist items during the checkout process?</h5>
        <p>Integrating wishlist reminders within the checkout flow, perhaps by displaying them in the cart, can help users remember and consider adding these items to their purchase.</p>
      </div>
    </div>
  </div>
</section>

    <Container fluid className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: 'white' }}>
  <Row className="justify-content-center text-center">
    <Col xs={12} md={8} className="mb-4">
      <h3 className=" fancy-underline mb-5" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>
      User flow
      </h3>
      
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center">
      <img 
        src="/Photos/Green and White Project Phases Flowchart.png"
        alt="Lo-fi Prototype"
        className="img-fluid " 
        style={{ 
           
          height: 'auto', 
        }}
      />  
    </Col>
  </Row>
</Container>
<Container fluid className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: 'white' }}>
  <Row className="justify-content-center text-center">
    <Col xs={12} md={8} className="mb-4">
      <h3 className=" fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>
      Wireframes

      </h3>
      
    </Col>
  </Row>
</Container>
    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Photos/Namnlös design (46).png" className="d-block w-100 img-fluid shadow" alt="First slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wifi.png" className="d-block w-100 img-fluid shadow" alt="Second slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wifi (1).png" className="d-block w-100 img-fluid shadow" alt="Third slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
    </svg>
  </span>
  <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </span>
  <span className="visually-hidden">Next</span>
</button>
</div>
<div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
<div className="justify-content-center text-center mt-4"> 
    <h2 style={{ backgroundColor: '#E46698', color: 'white', padding: '30px', fontFamily: 'Patrick Hand, cursive',fontSize: '55px' }}>
    Develop phase
          </h2>

    </div>
    
    <Container fluid className="d-flex justify-content-center align-items-center mb-5" style={{ backgroundColor: 'white' }}>
  <Row className="justify-content-center text-center mb-5">
    <Col xs={12} md={8}>
      {/* First paragraph centered */}
      <h3 className="display-4 fancy-underline mb-5" style={{ color: '#333', fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>Prototyping</h3>
      
      {/* Second paragraph left-aligned but horizontally centered */}
      <p className="text-left py-4" >
      The website's design was created using Figma. You can view the high-fidelity prototype for a detailed representation of the final design.      </p>

      {/* Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center">
        
        <Button 
          href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&node-type=canvas&t=tpaCGDBPEb2loNS1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
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
          View hi-fi prototype
        </Button>
      </div>
    </Col>

    {/* Image section */}
    <Col xs={12} className="d-flex justify-content-center pt-5">
      <img 
        src="/Photos/Wifi (2).png" 
        alt="Component Tree" 
        className="img-fluid" 
      
      />
    </Col>
  </Row>
</Container>
    </>
  );
};



export default Sektion;