import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Servic = () => {
  const sectionStyle = {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', // Set your desired background color
    minHeight: '100vh', // Ensure full height if necessary
    margin: 0, // Remove margin to eliminate white space
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const textStyle = {
    fontSize: '16px',
    marginBottom: '5px'
  };

  const emailStyle = {
    color: '#0B6BA5',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <Container fluid style={sectionStyle}> {/* Use fluid to make it full width */}
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="mb-4">
          <div style={headingStyle}>TOOLS</div>
          <div style={textStyle}>Figma</div>
          <div style={textStyle}>Sketch</div>
          <div style={textStyle}>Adobe Creative Suite</div>
          <div style={textStyle}>ReactJS</div>
          <div style={textStyle}>Firebase</div>
          <div style={textStyle}>CMS</div>
        </Col>
        <Col xs={12} md={3} className="mb-4">
          <div style={headingStyle}>SKILLSET</div>
          <div style={textStyle}>User Centered Design</div>
          <div style={textStyle}>User Research</div>
          <div style={textStyle}>Information Architecture</div>
          <div style={textStyle}>Interactive Prototyping</div>
          <div style={textStyle}>Wireframing</div>
          <div style={textStyle}>Programming</div>
          <div style={textStyle}>SEO</div>
          <div style={textStyle}>User Testing</div>
          <div style={textStyle}>WCAG</div>
        </Col>
        <Col xs={12} md={3} className="mb-4">
          <div style={headingStyle}>CONTACT</div>
          <div style={textStyle}>Portfolio</div>
          <div style={textStyle}>
  <a href="https://studiomk.netlify.app/" style={emailStyle}>studiomk.netlify.app</a>
</div>
<div style={textStyle}>Email</div>
<a href="mailto:Marahknyfaty@outlook.com" style={emailStyle}>Marahknyfaty@outlook.com</a>
<div style={textStyle}>Linkedin</div>
<a href="https://www.linkedin.com/in/marah-kn/" style={emailStyle}>linkedin.com/in/marah-kn</a>

        </Col>
      </Row>
    </Container>
  );
};

export default Servic;



