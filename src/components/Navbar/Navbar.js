import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'
// import { Redirect, Route, NavLink, Link } from "react-router-dom";


function Homebar() {
  return (
    <div>
      
<Navbar collapseOnSelect expand="lg"  className='navbar-custom'>
  <Container>
  <Navbar.Brand style={{color:"white"}} href="/">WhirlyKop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto justify-content-end ml-auto">
        <Nav.Link href="/home" style={{color:"white"}}>Home</Nav.Link>
        <Nav.Link href="/about" style={{color:"white"}}>About</Nav.Link>
        <Nav.Link href="/team" style={{ color:"white"}}>Team</Nav.Link>
        <Nav.Link href="/login" style={{ color:"white"}}>Login</Nav.Link>
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Homebar