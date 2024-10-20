import React from 'react';
import Header from './header';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';
import Footer from './footer';
import Servic from './servic';
const About = () => {
    return (
        <>
            <Header />
           
            <Container className="about-page mt-4 pt-4 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} >
        <h1 className="display-4" style={{ fontFamily: 'Patrick Hand, cursive', textAlign: 'left',color:'#e46698' }}>Hello, I’m Marah</h1>
          <Image src="/Photos/mara.gif"  fluid className="about-image mb-4" style={{width:'30%'}}/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          
          <p className="about-text">
          A web editor based in Sweden, originally from Syria. My journey began when I moved to Sweden a few years ago and decided to pursue a career in web editing. With passion and determination, I graduated in 2024 and started my career in this field.
          </p>
          <p className="about-text">
          With a strong focus on UX design, I specialize in identifying and analyzing needs and requirements to guide projects in the right direction. I provide solution-oriented proposals and enjoy implementing them with attention to both the UX and frontend aspects. My deep interest and skill set in UX design, paired with frontend development, allow me to create user-centered, functional, and aesthetically pleasing digital experiences.
          </p>
          <p className="about-text">
          As a person, I am positive, adaptable, and confident, qualities that help me embrace new challenges and work efficiently both independently and as part of a team. I am deeply committed to personal growth and always open to feedback and new learning opportunities, as I believe in continuous personal and professional development.
          </p>
        </Col>
      </Row>
    </Container>
    <Servic />
<Footer />
    </>
    );
};

export default About;