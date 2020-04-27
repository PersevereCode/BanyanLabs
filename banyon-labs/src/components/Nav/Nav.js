import React, { Component } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import './Nav.css';
class Nav extends Component {
  render() {
    return (
  
      //   <Navbar bg="dark" variant="dark">
      //     <Navbar.Brand href="#home">
      //     <img
      //   alt="logo"
      //   src="/banlabs.png"
      //   width="50"
      //   height="50"
      //   // className="d-inline-block align-top"
      // />
          
      //     </Navbar.Brand>
      //   </Navbar>
  

     <Container>
  <nav>
    <div className="nav-wrapper">

      <a href="#" className="brand-logo">Home
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">About</a>
        </li>
        <li>
          <a href="badges.html">Services</a>
        </li>
        <li>
          <a href="collapsible.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</Container> 
    );
  }
}
export default Nav;
