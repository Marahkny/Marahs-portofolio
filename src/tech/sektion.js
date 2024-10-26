import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../FancyText.css'
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
            <p style={{ fontSize: '22px' }}>
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
    <Container fluid className="d-flex flex-column justify-content-center align-items-center mb-5">
  
  {/* Section 1: Problem Statement */}
  <Row className="justify-content-center align-items-center mb-5">
    <Col md={6} className="text-left">
      <h2 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '2rem', marginBottom: '20px' }}>Why Build This Product?</h2>
      <p><strong>Problem:</strong> Research shows inconsistent user experiences (UX) across major e-commerce platforms like Elgiganten and Power.</p>
      <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Key Issues:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Wish List Visibility:</strong> Users struggle to access or manage wish lists during purchases.</li>
        <li><strong>Login Frustration:</strong> Users must log in to save items, often losing selected products afterward.</li>
      </ul>
    </Col>
    <Col md={4} className="d-flex justify-content-center">
      <img src="/Photos/problem.png" alt="Product Illustration" style={{ maxWidth: '60%', height: 'auto' }} />
    </Col>
  </Row>

  {/* Section 2: Solution Statement */}
  <Row className="justify-content-center align-items-center mb-5">
    <Col md={4} className="d-flex justify-content-center">
      <img src="/Photos/thank.png" alt="Product Illustration" style={{ maxWidth: '80%', height: 'auto' }} />
    </Col>
    <Col md={6} className="text-left">
      <p style={{ fontWeight: 'bold', marginTop: '40px' }}>TechCity’s Solution:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>User-Friendly Wish List:</strong> A built-in, intuitive wish list feature designed from the ground up.</li>
        <li><strong>Seamless Experience:</strong> Users can easily add and keep track of items without unnecessary logins or re-selections.</li>
      </ul>
    </Col>
  </Row>

  {/* Section 3: User Profile and Goals */}
  <Row className="justify-content-center mb-5">
    <Col md={10} className="text-left">
      <h4 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>Who are the users?</h4>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Technology enthusiasts and professionals interested in the latest technology, innovations, and IT trends.</li>
        <li>Students and developers looking to learn more and grow within the tech field.</li>
        <li>Small to medium-sized businesses seeking affordable and tailored tech solutions.</li>
        <li>Startups searching for innovation and digital solutions to scale their businesses.</li>
      </ul>

      <hr style={{ borderColor: 'black', margin: '40px 0' }} />

      <h4 style={{ fontFamily: 'Patrick Hand, cursive', fontSize: '1.8rem', marginBottom: '20px' }}>Goals of the Product (For both business & users)</h4>
      
      <p><strong>Business Goals</strong></p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Establish TechCity as a leading authority and trusted source of information in technology and innovation.</li>
        <li>Convert website visitors into qualified leads or paying customers by offering valuable, tailored products, services, and resources.</li>
        <li>Improve the purchase process by enabling users to easily view and manage their wish list throughout their shopping journey.</li>
      </ul>

      <p><strong>User Goals</strong></p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Provide up-to-date technology news, trends, and innovations to keep users informed and engaged.</li>
        <li>Allow users to access and view their wish list after logging in and facilitate a smooth purchasing process for wish-listed items.</li>
        <li>Offer small to medium-sized businesses customized and cost-effective tech solutions that cater to their specific needs.</li>
      </ul>
    </Col>
  </Row>
</Container>


<div className="justify-content-center text-center mb-5"> 
<h3 className="display-4 fancy-underline mb-5" style={{ color: '#333', fontFamily: 'Patrick Hand, cursive',fontSize: '45px' }}>Market Analysis</h3>
<div >
  To conduct a market analysis, I have analyzed  <a href="https://www.power.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}> Power.se</a> and <a href="https://www.elgiganten.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}> Elgiganten.se</a>.
</div>
    </div>
  


   
<div className="container mt-4">
  {/* Table responsiveness for smaller screens */}
  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th style={{ backgroundColor: '#343a40', color: '#fff', textAlign: 'center', padding: '15px' }}>Company</th>
          <th style={{ backgroundColor: '#343a40', color: '#fff', textAlign: 'center', padding: '15px' }}>Elgiganten</th>
          <th style={{ backgroundColor: '#343a40', color: '#fff', textAlign: 'center', padding: '15px' }}>Power</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Focus area</strong></td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>Wish List Visibility: When the user purchases a product, the wish list is not visible during the checkout process.</li>
              <li>Login Frustration: When the user adds a product to the wish list, they are forced to log in, and after logging in, the system should return the user to their wish list or the last opened page.</li>
            </ul>
          </td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>Wish List Visibility: The wish list is not visible during the checkout process.</li>
              <li>Login Frustration: When the user wants to add an item to the wish list, they are required to log in first (login opens as a modal). After logging in, the item they wanted to add should be visible in the wish list, and the system should also return the user to the last opened page.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>Strengths</strong></td>
          <td>Modern</td>
          <td>Modern and easy to use.</td>
        </tr>
        <tr>
          <td><strong>Weaknesses</strong></td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>The user cannot return to the last opened page after logging in to add a product to the wish list.</li>
              <li>The user cannot see the wish list during the checkout process.</li>
            </ul>
          </td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>The user cannot see the wish list during the checkout process.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>UI/UX Analysis:</strong></td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>The forced login interrupts the smooth process of adding items to the wish list. A seamless modal login is crucial for reducing frustration, but the current implementation lacks this ease.</li>
              <li>To ensure users don’t forget anything, the wish list should be visible at step 2 of the checkout process.</li>
            </ul>
          </td>
          <td>
            <ul style={{ paddingLeft: '15px', textAlign: 'left' }}>
              <li>A good UX in Power would allow the user to add an item to the wish list by opening a modal on the same page.</li>
              <li>The wish list is not visible during the checkout process, which negatively impacts the user experience.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


<Container fluid className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: '#f7f9fc' }}>
  <Row className="justify-content-center text-center">
    <Col xs={12} md={8} className="mb-5">
      <h3 className=" fancy-underline" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>
      Personas
      </h3>
      
    </Col>

    <Col xs={12} md={8} className="d-flex justify-content-center">
      <img 
        src="/Photos/Emma (1).png"
        alt="Lo-fi Prototype"
        className="img-fluid" 
        style={{ 
          maxWidth: '90%', 
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
          <h3 className="fancy-underline mb-5" style={{ fontFamily: 'Patrick Hand, cursive', color: '#333',fontSize: '45px' }}>HMW</h3>
    </div>
    <section className="container py-5">
  <h3 className="text-center mb-4" style={{ fontFamily: 'Patrick Hand, cursive' }}>HMWs to Product Goals</h3>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4 shadow flex-grow-1" style={{ backgroundColor: '#e46698', borderRadius: '8px', color: 'white' }}>
        <h5 style={{fontFamily: 'Patrick Hand, cursive'}}>How might we help the user keep their wishlist items after logging in?</h5>
        <p>By implementing persistent storage mechanisms such as local storage or syncing wishlist data with the user's account, we ensure the wishlist is retained after login.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4 d-flex">
      <div className="p-4 shadow flex-grow-1" style={{ backgroundColor: '#0b6ba5', borderRadius: '8px', color: 'white' }}>
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
          maxWidth: '90%', 
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