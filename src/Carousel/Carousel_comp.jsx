import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import { MyComponent } from '../assets/Mycomponent';
const Carousel_comp = () => {
  return (
    <Container>
    <Carousel id="carouselExampleIndicators">
      <Carousel.Item>
        <img src= {MyComponent.dog} className="d-block w-100" alt="dog" />
      </Carousel.Item>
      <Carousel.Item>
        <img src= {MyComponent.family} className="d-block w-100" alt="family" />
      </Carousel.Item>
      <Carousel.Item>
        <img src = {MyComponent.couple} className="d-block w-100" alt="couple" />
      </Carousel.Item>
    </Carousel>
  </Container>
  )
}

export default Carousel_comp