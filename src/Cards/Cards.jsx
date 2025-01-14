import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import { MyComponent } from '../assets/Mycomponent';
import {NavLink} from 'react-router-dom';
const Cards = () => {
  return (
    <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Why Move With Us?</h2>
        <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
          <Col className="feature">
            <Card className="h-100">
              <Card.Body>
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img src= {MyComponent.brief} alt="" height="30" />
                </div>
                <Card.Title className="fs-2">Professional</Card.Title>
                <Card.Text>
                  We offer a range of services to suit your individual needs, whether you're moving locally or across the country. Our team can handle everything from packing and loading to unloading and unpacking, so you can focus on settling into your new home. And with our transparent pricing and no hidden fees, you can trust that you're getting a fair and competitive rate for our services.
                </Card.Text>
                <NavLink to="/review" className="icon-link">
                  Get a Quote <img src= {MyComponent.chevron} alt="chevron-right" />
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col className="feature">
            <Card className="h-100">
              <Card.Body>
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img src={MyComponent.bus}  height="30" alt="" />
                </div>
                <Card.Title className="fs-2">Countrywide</Card.Title>
                <Card.Text>
                  Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail. We understand that your possessions are more than just objects - they are a reflection of your life, memories, and experiences. That's why we take extra care to ensure that everything is packed and transported with the utmost care and attention.
                </Card.Text>
                <NavLink to="/review" className="icon-link">
                  Get a Quote <img src={MyComponent.chevron} alt="chevron-right" />
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col className="feature">
            <Card className="h-100">
              <Card.Body>
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <img src={MyComponent.chat} alt="" height="30" />
                </div>
                <Card.Title className="fs-2">Personal Touch</Card.Title>
                <Card.Text>
                  At our core, we believe that moving should be an exciting and positive experience, not a stressful one. By providing exceptional moving services in the US, we hope to revolutionize the way people think about moving and provide a better, more personalized experience for our customers. Contact us today to learn more about how we can help you with your next move.
                </Card.Text>
                <NavLink to="/review" className="icon-link">
                  Get a Quote <img src={MyComponent.chevron} alt="chevron-right" />
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Cards