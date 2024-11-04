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
  
  {/* Section 1: Problem Statement */}
  <Row className="justify-content-center align-items-start mb-5" style={{ width: '100%', margin: '0' }}>
    <Col md={8} className="text-start">
      <h4 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '2rem', marginBottom: '20px' }}>Why Build This Product?</h4>
      <p>Research shows inconsistent user experiences (UX) across major e-commerce platforms like <a href="https://www.power.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}>Power</a> and <a href="https://www.elgiganten.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#0b6ba5', textDecoration: 'underline' }}>Elgiganten</a>.</p>
      <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Key Issues:</p>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '15px' }}><strong>Wish List Visibility:</strong> Users struggle to access or manage wish lists during purchases.</li>
        <li style={{ marginBottom: '15px' }}><strong>Login Frustration:</strong> Users must log in to save items, often losing selected products afterward.</li>
      </ul>
    </Col>
  </Row>

  {/* Section 2: Solution Statement */}
  <Row className="justify-content-center align-items-start mb-5 mt-5" style={{ width: '100%', margin: '0' }}>
  <Col md={5} className="d-flex justify-content-center">
      <img className="img-fluid" src="/Photos/problem.png" alt="Solution Illustration" style={{maxWidth:'60%'}} />
    </Col>
    <Col md={3} style={{
    background: 'linear-gradient(135deg, #e46698, #f48fb1)', // Pink gradient
    color: 'white',
    padding: '40px 20px', // Adds even top and bottom padding
    borderRadius: '20% 20% 20% 0', // Asymmetric rounded corners
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Soft shadow
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    textAlign: 'left', // Centers text within elements
    maxWidth: '100%',
}}>
  <h4 style={{
      fontFamily: 'Patrick Hand, cursive',
      fontSize: 'clamp(1.5rem, 2vw, 2.2rem)', // Responsive font size
      marginBottom: '20px',
      color: 'white'
  }}>
    TechCity’s Solution:
  </h4>
  <ul style={{
      listStyleType: 'none',
      paddingLeft: '0',
      lineHeight: '1.8', // Line height for readability
      marginBottom: '0' // Removes bottom margin on the last item
  }}>
    <li style={{ marginBottom: '15px' }}>
      <strong>User-Friendly Wish List:</strong> A built-in, intuitive wish list feature designed from the ground up.
    </li>
    <li style={{ marginBottom: '15px' }}>
      <strong>Seamless Experience:</strong> Users can easily add and keep track of items without unnecessary logins or re-selections.
    </li>
  </ul>
</Col>
  </Row>

  {/* Section 3: User Profile and Goals */}
  <Row className="justify-content-center align-items-start mb-5 mt-5" style={{ width: '100%', margin: '0' }}>
    <Col md={8} className="text-start">
      <h4 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>Who are the users?</h4>
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
    <Col md={5} className="text-start">
      <h4 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '2rem', marginBottom: '30px' }}>Product goals for business and user needs</h4>
      <p>Business goals</p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', fontSize: '1rem' }}>
        <li>Position TechCity as a trusted source in technology and innovation.</li>
        <li>Convert visitors into leads with tailored products and resources.</li>
        <li>Enable users to manage wish lists throughout their journey.</li>
      </ul>
      <p>User needs</p>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', fontSize: '1rem' }}>
        <li>Deliver current tech news and trends to engage users.</li>
        <li>Enable wish list viewing after login for easy purchases.</li>
        <li>Provide tailored tech solutions for small to medium businesses.</li>
      </ul>
    </Col>
    <Col md={3} className="d-flex justify-content-center">
      <img className="img-fluid" src="/Photos/Man.gif" alt="Solution Illustration" />
    </Col>
  </Row>

</Container>

       </>
  );
};



export default Problem;