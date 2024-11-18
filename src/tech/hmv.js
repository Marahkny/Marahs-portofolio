import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Hmv = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center mb-5">
      <Row className="justify-content-center align-items-start my-5" style={{ width: '100%', margin: '0' }}>
        {/* Textintroduktion */}
        <Col md={10} className="text-start">
          <h3 className="fancy-underline" style={{ color: 'black' }}>HMW</h3>
          <p style={{ color: 'black', paddingTop: '20px' }}>
          HMW (How Might We) is a problem-framing technique used in UX design to transform challenges into opportunities. By framing problems as open-ended questions, it encourages creative, user-centered solutions.
          </p>
        </Col>

        {/* Kolumn 1 */}
        <Col md={5} className="d-flex flex-column align-items-start justify-content-start m-4" style={{
          backgroundColor: '#f5c518',
          textAlign: 'start',
          color:'black',
          padding:'50px'
        }}>
          <div style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            marginBottom: '20px', 
          }}>
            <img 
              src="/Photos/pinkpaint.png" 
              alt="Number 1" 
              className="img-fluid" 

            />
            <p style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
    
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '30px',
            }}>1</p>
          </div>
          <p style={{color:'black' }}>
            How might we help the user keep their wishlist items after logging in?
          </p>
          <p>
            By implementing persistent storage mechanisms such as local storage or syncing wishlist data with the user's account, we ensure the wishlist is retained after login.
          </p>
        </Col>

      

        {/* Kolumn 2 */}
        <Col md={5} className="d-flex flex-column align-items-start justify-content-start m-4 " style={{
          backgroundColor: '#f5c518',
padding:'50px',
          textAlign: 'start',
        }}>
          <div style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            marginBottom: '20px',
          }}>
            <img 
              src="/Photos/pinkpaint.png" 
              alt="Number 2" 
              className="img-fluid" 

            />
            <p style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: ' 30px',
            }}>2</p>
          </div>
          <p style={{ color: 'black' }}>
            How might we help the user remember their wishlist items during the checkout process?
          </p>
          <p>
            Integrating wishlist reminders within the checkout flow, perhaps by displaying them in the cart, can help users remember and consider adding these items to their purchase.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hmv;
