import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
import Develop from './develop';

// Main Section component
const Sektionklimt = () => {
  return (
    <>
      <Container fluid className="p-4" style={{ backgroundColor: '#F5C518', color: 'black' }}>
        <Row className="justify-content-center align-items-center pt-5 pb-5">
          {/* Left Section */}
          <Col xs={12} md={6} className="text-center">
            <img 
              src="/Photos/klimat.gif" 
              alt="Techcity" 
              className="img-fluid mb-3" 
              style={{ borderRadius: '15px', height: 'auto' }} 
            />
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6}>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Klimatkoll</h1>
            <p style={{ fontSize: '20px' }}>
            Designing a website for a Swedish school aimed at educating students aged 13-15 about climate change and its impact.
            </p>
            <p><strong>Project Type:</strong> Design an educating website</p>
            <p><strong>Role:</strong> User research + UX/UI designer + brand designer + implementation</p>
            <p><strong>Industry:</strong> Educational, Climate</p>
            <p><strong>Tools:</strong> Figma, Canva, Illustrator, ReactJS, Firebase</p>
            <p><strong>Duration:</strong> 2 months, 2024</p>
           
  <Button
    href="https://www.figma.com/proto/cZxBC4r3YraBsDtpqB4IjC/Prototyp?node-id=55-3&node-type=canvas&t=Sok9u0fcFfz6DrjO-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A2"
    target="_blank"
    rel="noopener noreferrer" style={{ backgroundColor: '#0B6BA5', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '50px' }}
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
  
  <Container className='pt-5 pb-5'>
  <Row className="d-flex justify-content-center text-center">
    {/* Discover Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>
        Discover
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>User Research</li>
        <li>Personas</li>
        <li>Scenario</li>
      </ul>
    </Col>

    {/* Define Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>
        Define
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>MoSCoW</li>
        <li>UML-diagram</li>
      </ul>
    </Col>

    {/* Develop Column */}
    <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-2">
      <h3 className="fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>
        Develop
      </h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem' }}>
        <li>Lo-fi prototype</li>
        <li>Design system</li>
        <li>Prototyping</li>
        <li>Implementation</li>
      </ul>
    </Col>
  </Row>
</Container>


<div className="justify-content-center text-center mb-5" style={{backgroundColor:'white'}}> 
    <h2 style={{ backgroundColor: '#E46698', color: 'White', padding: '30px', fontFamily: 'Patrick Hand, cursive'}}>
    Discover phase
          </h2>
          
    </div>
    <div className="container-fluid ">
  {/* User Research Section */}
  <Container fluid className="mb-5">
    <Row className="justify-content-center text-center">
      <Col md={12}>
        <p className="lead fancy-underline" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User Research</p>
      </Col>
    </Row>
  </Container>

  {/* Problem and Key Issues Section */}
  <Container fluid className="d-flex justify-content-center align-items-center mb-5">
    <Row className="justify-content-center text-center">
      <Col md={8}>
        <h2 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '2rem', marginBottom: '20px' }}>Why Build This Product?</h2>
        <p><strong>Problem:</strong> A middle school in a large Swedish city needs a web application for students aged 13-15 from diverse backgrounds. While they've likely heard of climate change, they struggle to understand its impact and haven't studied it in school. The application aims to fill this gap by providing clear and engaging educational content on climate change.</p>

        <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Key Issues:</p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>Raise Awareness:</strong> To educate students about climate change, promoting awareness of its causes and effects.</li>
          <li><strong>Engage Diverse Audiences:</strong> To provide an inclusive platform that caters to students aged 13-15 from various backgrounds, regardless of their prior knowledge.</li>
          <li><strong>Interactive Learning:</strong> To incorporate various educational tools, including quizzes and challenges, to enhance understanding and foster sustainable behaviors.</li>
        </ul>
      </Col>
    </Row>
  </Container>

  {/* Target Audience Research Section */}
  <Container fluid className="mb-5">
    <Row className="justify-content-center text-center">
      <Col md={8}>
        <h2 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '2rem', marginBottom: '20px' }}>Target Audience Research</h2>
        <p>The target audience for this website is teenagers aged 13-15 in Swedish schools, as defined by the educators.</p>
        <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Research Process:</p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li>Articles and reports on youth engagement in climate issues were collected and analyzed.</li>
          <li>The predefined target audience of students aged 13-15 was studied through secondary sources.</li>
          <li>Research focused on topics such as climate anxiety, youth involvement in environmental issues, and their understanding of climate change.</li>
          <li>It was discovered that many young people had not received in-depth education on climate issues, affecting their awareness and interest.</li>
        </ul>
      </Col>
    </Row>
  </Container>
</div>


<Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
  <Row className="justify-content-center text-center mb-5">
    <Col md={8}>
      <p className="lead fancy-underline" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Personas</p>
      <p>
        Two personas, Alicia Perry and Gabriel Andersson, were created based on the collected data to represent different segments of the target audience. Alicia, our primary persona, reflects the more engaged segment interested in climate issues, while Gabriel represents those with less knowledge or interest in the topic.
      </p>
    </Col>
  </Row>

  {/* Personas Images */}
  <Row className="justify-content-center mb-5">
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
        <img 
          src="/Photos/persona 1.png" 
          alt="Persona Alicia" 
          className="img-fluid"
          style={{ borderRadius: '15px', transition: 'transform 0.3s ease', maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Alicia Perry</p>
      </div>
    </Col>
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
        <img 
          src="/Photos/persona 2.png" 
          alt="Persona Gabriel" 
          className="img-fluid"
          style={{ borderRadius: '15px', transition: 'transform 0.3s ease', maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Gabriel Andersson</p>
      </div>
    </Col>
  </Row>
</Container>

{/* Scenario Section */}
<Container fluid className="py-5" style={{ backgroundColor: '#f0f4f8' }}>
  <Row className="justify-content-center text-center mb-5">
    <Col md={8}>
      <p className="lead fancy-underline" style={{ fontSize: '1.5rem', fontWeight: 'bold'  }}>Scenario</p>
      <p >
        Detailed scenarios for each persona were crafted to better represent their expectations and create a more engaging experience.
      </p>
    </Col>
  </Row>

  {/* Scenario Images */}
  <Row className="justify-content-center mb-5">
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
        <img 
          src="/Photos/AlicaSen.png" 
          alt="Scenario Alicia" 
          className="img-fluid"
          style={{ borderRadius: '15px', transition: 'transform 0.3s ease', maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Alicia's Scenario</p>
      </div>
    </Col>
    <Col xs={12} md={6} className="text-center mb-4">
      <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }}>
        <img 
          src="/Photos/gaberilsSen.png" 
          alt="Scenario Gabriel" 
          className="img-fluid"
          style={{ borderRadius: '15px', transition: 'transform 0.3s ease', maxHeight: '500px' }}
        />
        <p className="mt-2" style={{ fontWeight: 'bold' }}>Gabriel's Scenario</p>
      </div>
    </Col>
  </Row>
</Container>

    <div className="justify-content-center text-center " style={{backgroundColor:'white'}}> 
    <h2 style={{ backgroundColor: '#0B6BA5', color: 'White', padding: '30px', fontFamily: 'Patrick Hand, cursive'}}>
    Define phase
          </h2>
          <p className="lead fancy-underline" style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>MoSCoW</p>
    </div>
    <section className="container py-5">
  <p className="text-center mb-4">The MoSCoW method is a prioritization technique used to manage requirements in a project</p>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4 shadow flex-grow-1" style={{ backgroundColor: '#e46698', borderRadius: '8px', color: 'white' }}>
        <h5 style={{fontFamily: 'Patrick Hand, cursive'}}>Key Requirements for Alicia</h5>
        <ul>
          <li>Must have: Easy navigation, clear graphs, minimal text.</li>
          <li>Should have: Videos, quizzes, challenges, profile picture options.</li>
          <li>Could have: Log-in page.</li>
          <li>Want to have: A page where different schools can compete against each other.</li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4 shadow flex-grow-1" style={{ backgroundColor: '#0b6ba5', borderRadius: '8px',  color: 'white' }}>
        <h5 style={{fontFamily: 'Patrick Hand, cursive'}}>Key Requirements for Gabriel</h5>
        <ul>
          <li>Must have: Basic information, three educational sections.</li>
          <li>Should have: Quizzes, challenges, images.</li>
          <li>Could have: Modern design, profile page with picture and collected points.</li>
          <li>Want to have: Ability to compare scores with others in the app.</li>
        </ul>
      </div>
    </div>
  </div>
</section>



    
    <div className="d-flex justify-content-center ">
    <section className="container py-5">
  <div className="row justify-content-center">
    <div className="col-md-12 text-center">
    <p className="lead fancy-underline" style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>UML-diagram</p>
    </div>
    <div className="col-md-8 text-center">
    <img 
        src="/Photos/Uml.png" // Replace with your image URL
        alt="persona"
        className="img-fluid shadow" // This class makes the image responsive
        style={{ maxWidth: '800px', width: '100%', height: 'auto' }} // Optional for additional responsiveness
      />    </div>
  </div>
</section>
 
     
    </div>
    
    
    <Develop />
    
    
    </>
  );
};



export default Sektionklimt;