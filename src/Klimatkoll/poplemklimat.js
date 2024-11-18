import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
// Main Section component
const Poblemklimat = () => {
  return (
    <>
   <Container fluid className="d-flex flex-column align-items-center mb-5">
  
  {/* Section 1: Problem Statement */}
  <Row className="justify-content-center align-items-start mb-5" style={{ width: '100%', margin: '0' }}>
  <Col md={10} className='pb-3' >
          
          <h3  className=" fancy-underline pt-5" >User research</h3>
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
<p>A middle school in a large Swedish city needs a web application for students aged 13-15 from diverse backgrounds. While they've likely heard of climate change, they struggle to understand its impact and haven't studied it in school. The application aims to fill this gap by providing clear and engaging educational content on climate change.</p>      <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Key issues:</p>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '15px' }}><strong>Raise awareness:</strong> To educate students about climate change, promoting awareness of its causes and effects.</li>
        <li style={{ marginBottom: '15px' }}><strong>Engage diverse audiences:</strong> To provide an inclusive platform that caters to students aged 13-15 from various backgrounds, regardless of their prior knowledge.</li>
        <li style={{ marginBottom: '15px' }}><strong>Interactive learning:</strong> To incorporate various educational tools, including quizzes and challenges, to enhance understanding and foster sustainable behaviors.</li>
   </ul>
    </Col>
  </Row>

  <Row className="justify-content-center align-items-start mb-5 mt-5" style={{ width: '100%', margin: '0' }}>
    <Col md={10} className="text-start">
    <div className="d-flex align-items-center">
    <img 
      src="/Photos/yellowpaint.png" 
      alt="User research icon" 
      style={{ width: '40px', height: '40px',marginRight:'10px' }} 
    />
    <h4 >Target audience research</h4> 
   
  </div>
      <p>The target audience for this website is teenagers aged 13-15 in Swedish schools, as defined by the educators.</p>
   
    </Col>
    
    <Col md={7} className="text-start pt-5">
    <p><strong>Research process:</strong></p>
      <ul >
  <li style={{ marginBottom: '15px' }}>
  Articles and reports on youth engagement in climate issues were collected and analyzed.
  </li>
  <li style={{ marginBottom: '15px' }}>
  The predefined target audience of students aged 13-15 was studied through secondary sources.
  </li>
  <li style={{ marginBottom: '15px' }}>
  Research focused on topics such as climate anxiety, youth involvement in environmental issues, and their understanding of climate change.
  </li>
  <li style={{ marginBottom: '15px' }}>
  It was discovered that many young people had not received in-depth education on climate issues, affecting their awareness and interest.
  </li>
</ul></Col>
<Col md={3} className="d-flex justify-content-center">
    <img className="img-fluid" src="/Photos/plan.png" alt="Solution Illustration" style={{maxWidth:'60%'}} /></Col>
  </Row>
</Container>

       </>
  );
};



export default Poblemklimat;