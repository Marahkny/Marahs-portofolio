import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
// Main Section component
const Problem = () => {
  return (
    <>
   <Container fluid className="d-flex flex-column align-items-center mb-5">
  
  <Row className="justify-content-center align-items-start mb-5" style={{ width: '100%', margin: '0' }}>
  <Col md={10} className='pt-5 pb-2 text-start' >
          
          <h3  className="fancy-underline">User research</h3>
        </Col>
    <Col md={10} className="text-start">
    
    <div className="d-flex align-items-center">
    <img 
      src="/Photos/pinkpaint.png" 
      alt="User research icon" 
      style={{ width: '40px', height: '40px',marginRight:'10px' }} 
    />
    <h4 >The problem</h4> 
   
  </div>
      <p>Research shows inconsistent user experiences (UX) across major e-commerce platforms like <a href="https://www.power.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}>Power</a> and <a href="https://www.elgiganten.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}>Elgiganten</a>.</p>
      <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Key issues:</p>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '15px' }}><strong>Wish list visibility:</strong> Users struggle to access or manage wish lists during purchases.</li>
        <li style={{ marginBottom: '15px' }}><strong>Login frustration:</strong> Users must log in to save items, often losing selected products afterward.</li>
      </ul>
    </Col>
  </Row>
 

  {/* Section 2: Solution Statement */}
  <Row className="justify-content-center align-items-start  py-5" style={{ width: '100%', margin: '0' }}>
  <Col xs={6} md={2} className="d-flex justify-content-center">
      <img className="img-fluid" src="/Photos/sök.png" alt="Solution Illustration" style={{maxWidth:'50%'}} />
    </Col>


   <Col 
  md={8} 
  style={{backgroundColor:'#f5c518', padding:'50px'
    
  }}
>
        <h4 style={{
        marginBottom: '20px'
    }}>
      TechCity’s solution:
    </h4>
    <ul style={{
        listStyleType: 'none',
        paddingLeft: '0',
        lineHeight: '1.8' // Förbättrad läsbarhet
    }}>
      <li style={{ marginBottom: '15px' }}>
        <strong>User-friendly wish list:</strong> A built-in, intuitive wish list feature designed from the ground up.
      </li>
      <li style={{ marginBottom: '15px' }}>
        <strong>Seamless experience:</strong> Users can easily add and keep track of items without unnecessary logins or re-selections.
      </li>
    </ul>
</Col>
  </Row>

  {/* Section 3: User Profile and Goals */}
  <Row className="justify-content-center align-items-start my-5 pt-5" style={{ width: '100%', margin: '0' }}>
    <Col md={10} className="text-start">
    <div className="d-flex align-items-center">
    <img 
      src="/Photos/yellowpaint.png" 
      alt="User research icon" 
      style={{ width: '40px', height: '40px',marginRight:'10px' }} 
    />
    <h4 >The user</h4> 
   
  </div>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
  <li style={{ marginBottom: '15px' }}>
    <strong>Technology enthusiasts and professionals</strong> interested in the latest technology, innovations, and IT trends.
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Students and developers</strong> looking to learn more and grow within the tech field.
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Small to medium-sized businesses</strong> seeking affordable and tailored tech solutions.
  </li>
  <li style={{ marginBottom: '15px' }}>
    <strong>Startups</strong> searching for innovation and digital solutions to scale their businesses.
  </li>
</ul>

    </Col>
  </Row>

  <Row className="justify-content-center align-items-start mb-5 mt-5" style={{ width: '100%', margin: '0' }}>
  <Col md={4} className="d-flex justify-content-center">
      <dotlottie-player
        src="https://lottie.host/93da8c31-555b-4ac6-b270-f05f60ff162a/szT1erCZPA.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
    </Col>
    <Col md={6} className="text-start">
    <div className="d-flex align-items-center">
    <img 
      src="/Photos/pinkpaint.png" 
      alt="User research icon" 
      style={{ width: '40px', height: '40px',marginRight:'10px' }} 
    />
    <h4 >Product goals</h4> 
   
  </div>
      <p><strong>Business goals</strong></p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8',  }}>
        <li>Position TechCity as a trusted source in technology and innovation.</li>
        <li>Convert visitors into leads with tailored products and resources.</li>
        <li>Enable users to manage wish lists throughout their journey.</li>
      </ul>
      <p><strong>User needs</strong></p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
        <li>Deliver current tech news and trends to engage users.</li>
        <li>Enable wish list viewing after login for easy purchases.</li>
        <li>Provide tailored tech solutions for small to medium businesses.</li>
      </ul>
    </Col>
 
  </Row>

</Container>

       </>
  );
};



export default Problem;