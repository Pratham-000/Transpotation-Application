import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
import { MyComponent } from '../assets/Mycomponent';
const Header = () => {
    const handleSearch = () => {
        const postcode = document.getElementById('postcode').value;
        if (!postcode) {
          alert('Please enter the value');
        } else if (/^\d{6}$/.test(postcode)) {
          alert('Deliverable');
      
        } else {
          alert('Error, enter the correct value');
      
          
        }
      };
    
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src= {MyComponent.box} height="30" alt="" /> Move it
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
               <NavDropdown title="More" id="basic-nav-dropdown">
                 <NavDropdown.Item as={NavLink} to="/Sign" >Sign Up</NavDropdown.Item>
                 <NavDropdown.Item as={NavLink} to="/price">Pricing</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item as={NavLink} to="/review">Reviews</NavDropdown.Item>
               </NavDropdown>
            </Nav>
             <Form className="d-flex" role="search">
               <Form.Control type="search" placeholder={"postcode"} className="me-2" aria-label="Search"  id="postcode" />
               <Button variant="outline-success" onClick={handleSearch }>Search</Button>
             </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </div>
  )
     
}

export default Header