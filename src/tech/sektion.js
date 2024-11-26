import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css';
import Problem from './Problem';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Hmv from './hmv';
// Main Section component
const Sektion = () => {
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: '#E46698', color: '#ffffff' }}>
        <Row className="justify-content-center align-items-center py-5">
          {/* Left Section */}
          <Col xs={12} md={6} className="text-center">
            <img 
              src="/Photos/tech.gif" 
              alt="Techcity" 
              className="img-fluid mb-3" 
              style={{ height: 'auto' }} 
            />
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6}>
            <h1 style={{   paddingBottom:'20px' }}>TechCity</h1>
            <p >
              Designing an e-commerce website for selling tech products with 
              careful planning and attention to user experience, aesthetics, and functionality.
            </p>
            <p><strong>Project type:</strong> Design an e-commerce website</p>
            <p><strong>Role:</strong> User research + UI/UX designer + brand designer</p>
            <p><strong>Industry:</strong> E-commerce, Tech</p>
            <p><strong>Tools:</strong> Figma, Canva, Illustrator, Google Docs</p>
            <p><strong>Duration:</strong> 2 months, 2024</p>
            <div className="d-flex flex-column flex-md-row justify-content-start pt-3">
            <Button 
              href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&node-type=canvas&t=tpaCGDBPEb2loNS1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
              className='sty-knapp '
            >
              View hi-fi prototype
            </Button></div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
      
  </Row>
  </Container>
 
   <Container className="py-5 my-4">
      <Row className="d-flex justify-content-center text-start">
        {/* Discover Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-1"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontSize: 'clamp(18px, 2vw, 24px)'}}>Discover</h3>
          <ul style={{ padding: '10px', listStyleType: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />User research</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />Market analysis</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />Persona</li>
          </ul>
        </Col>

        {/* Define Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-1"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>Define</h3>
          <ul style={{ padding: '10px', listStyleType: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />HMW</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />User flow</li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />Wireframes</li>
          </ul>
        </Col>

        {/* Develop Column */}
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-1"> {/* Lägg till text-center för att centrera texten */}
          <h3 className="fancy-underline" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>Develop</h3>
          <ul style={{ padding: '10px', listStyleType: 'none' }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <TfiLayoutLineSolid style={{ marginRight: '8px', color: '#E46698' }} />Prototyping</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="justify-content-center text-center mb-5">
    <h2 style={{
        background: '#E46698',
        color: 'white',
        padding: '30px 40px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
       
    }}>
        Discover phase
    </h2>
</div>


   
<Problem />

  
    <Container fluid className="d-flex justify-content-center align-items-center py-5"  >
  <Row className="justify-content-center text-start">
    <Col xs={12} md={10}>
      <h3 className=" fancy-underline pb-2" >
      Market analysis
      </h3>
      <p className='pt-3' style={{textAlign: 'left'}}>
  This table compares the UI/UX of Elgiganten and Power. Both face issues with wish list visibility and login frustration during checkout, affecting user experience.
  <a href="https://www.canva.com/design/DAGVf61WhTw/lTfP-FXtbP858n8M9Abd7A/edit?utm_content=DAGVf61WhTw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}> See the table here.</a>
  </p>

    </Col>

    <Col xs={12} md={10} className="d-flex justify-content-center py-4"  >
      <img 
        src="/Photos/Company.png"
        alt="company"
        className="img-fluid" 
      />  
      
    </Col>
  </Row>
</Container>

<Container fluid className="d-flex justify-content-center align-items-center py-5" >
  <Row className="justify-content-center text-start">
    <Col xs={12} md={10} >
      <h3 className=" fancy-underline pb-2" >
      Persona
      </h3>
      <p  style={{textAlign: 'left'}}>Creating this persona, "Martin," involved analyzing user behaviors, goals, and pain points to better understand the needs of a tech-savvy online shopper. By identifying his motivations—such as a desire for convenience and efficient planning through wish lists—and his frustrations with intrusive login processes, the persona captures key elements for designing a smoother, more intuitive user experience. </p>
    </Col>

    <Col xs={12} md={10} className="d-flex justify-content-center pt-4">
      <img 
        src="/Photos/Emma (1).png"
        alt="Lo-fi Prototype"
        className="img-fluid"  
      />  
    </Col>
  </Row>
</Container>

<div className="justify-content-center text-center my-5">
    <h2 style={{
        background: '#E46698',
        color: 'white',
        padding: '30px 40px',

margin:'0',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
    }}>
        Define phase
    </h2>
</div>
    <Hmv />

    <Container fluid className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: 'white' }}>
  <Row className="justify-content-center text-start">
    <Col xs={12} md={10}>
      <div className='pb-3'><h3 className=" fancy-underline ">
      User flow
      </h3></div>
      <p style={{ textAlign: 'left'}}>The user flow illustrates how a user can add a product to their wishlist and access it during the checkout process. After choosing a product and logging in, the user can save it to the wishlist, continue shopping, and later find their wishlist items conveniently available at checkout. </p>
        <p><a href='https://www.canva.com/design/DAGVgKNW2VY/LJQWUYsL4Q5UJjWpzDxxXA/edit?utm_content=DAGVgKNW2VY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}>See the user story here</a></p>

</Col>

    <Col xs={12} md={10} className="d-flex justify-content-center">
      <img 
        src="/Photos/USERFLOW.png"
        alt="Lo-fi Prototype"
        className="img-fluid " 

      />  
    </Col>
  </Row>
</Container>
<Container fluid className="d-flex justify-content-center align-items-center pt-5" >
  <Row className="text-start">
    <Col xs={12} md={10} className='pb-3 text-start'>
      <h3 className="fancy-underline ">
        Wireframes
      </h3>
    </Col>
  </Row>
</Container>

    <div style={{paddingTop:'20px', paddingBottom:'20px'}}></div>
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/Photos/Wi.png" className="d-block w-100 img-fluid" alt="First slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wi (2).png" className="d-block w-100 img-fluid" alt="Second slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
        </div>
        <div className="carousel-item">
          <img src="/Photos/Wi (3).png" className="d-block w-100 img-fluid" alt="Third slide" style={{ maxWidth: '800px', margin: '0 auto' }} />
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

<div className="justify-content-center text-center py-5 my-5">
    <h2 style={{
        background: '#E46698',
        color: 'white',
        padding: '30px 40px',

        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Softer, larger shadow for depth
    }}>
        Develop phase
    </h2>
</div>
    
    <Container fluid className="d-flex justify-content-center align-items-center pb-5" >
  <Row className="justify-content-center text-start">
    <Col xs={12} md={10}>
      {/* First paragraph centered */}
      <h3 className=" fancy-underline pb-2 " >Prototyping</h3>
      
      {/* Second paragraph left-aligned but horizontally centered */}
      <p tyle={{ textAlign: 'left' }}>
      The website's design was created using Figma. You can view the high-fidelity prototype for a detailed representation of the final design.      </p>

      {/* Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-start py-3">
        
        <Button 
          href="https://www.figma.com/proto/pOWFMhv3VEgEDve2R6JBAN/Marah?node-id=1-3&node-type=canvas&t=tpaCGDBPEb2loNS1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
          target="_blank" 
          rel="noopener noreferrer"
        className='styled-button'

        >
          View hi-fi prototype
        </Button>
      </div>
    </Col>

    {/* Image section */}
    <Col xs={10} className="d-flex justify-content-center py-5">
      <img 
        src="/Photos/Wifi (2).png" 
        alt="prototyp" 
        className="img-fluid" 
      style={{maxHeight:'100%'}}
      />
    </Col>
  </Row>
</Container>
    </>
  );
};



export default Sektion;