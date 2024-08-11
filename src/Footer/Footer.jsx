import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <Container>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="text-body-secondary">© 2023</p>
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">  <a href="#" className="nav-link p-0 text-body-secondary">Move.it</a></li>
            <li className="nav-item mb-2"> <a href="#" className="nav-link p-0 text-body-secondary">More ..</a></li>
            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/review" className="nav-link p-0 text-body-secondary">Pricing</Nav.Link></li>
            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/review" className="nav-link p-0 text-body-secondary">Features</Nav.Link></li>
            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/about" className="nav-link p-0 text-body-secondary">About</Nav.Link></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/review" className="nav-link p-0 text-body-secondary">Features</Nav.Link></li>
            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/review" className="nav-link p-0 text-body-secondary">Pricing</Nav.Link></li>

            <li className="nav-item mb-2"><Nav.Link as={NavLink} to="/about" className="nav-link p-0 text-body-secondary">About Us</Nav.Link></li>
          </ul>
        </div>

      </footer>
    </Container>
  )
}

export default Footer;