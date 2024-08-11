import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyComponent } from './assets/Mycomponent';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import Carousel_comp from './Carousel/Carousel_comp';
import Mains from './Mains/Mains';


const App = () => {
  
  return (
    <div>
     
        {/* <Header/> */}
        <Mains/>
        <Cards/>
        <Carousel_comp/>
        {/* <Footer/> */}
    
      
    </div>
  );
}

export default App;
