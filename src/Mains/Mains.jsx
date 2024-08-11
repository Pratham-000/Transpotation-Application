import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyComponent } from '../assets/Mycomponent';
import {NavLink} from 'react-router-dom';
const Mains = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Move with joy</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Move.it is a premier transportation service offering reliable, comfortable, and timely travel solutions. Our commitment to excellence ensures a seamless journey, whether for daily commutes or special occasions. Experience top-tier service with Move.it—your trusted partner in effortless mobility.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Button variant="primary" size="lg" className="px-4 me-sm-3">Give us a Quote</Button>
           <NavLink to= "/review"><Button variant="outline-secondary" size="lg" className="px-4">Reviews</Button> </NavLink> 
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div className="container px-5">
            <img src= {MyComponent.moving_van} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>
  )
}

export default Mains