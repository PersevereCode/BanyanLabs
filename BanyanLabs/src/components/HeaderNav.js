import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Image, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../styles/images/Logo.png'
const HeaderNav = (props) => {
    const [isOpen, updateIsOpen] = useState(false)
    const [isOpen2, updateIsOpen2] = useState(false)
      return (
        <div>
            <Navbar fixed="top" bg="light" className="zero-dawn" expand="lg" collapseOnSelect >
                    <Navbar.Brand href="/"><Image className="logo" src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="d-flex align-items-end">
                        <Nav.Link className="mx-2" href="#"><Link to="/">Home</Link></Nav.Link>
                            <NavDropdown className="mx-2" as="div" title="Who We Are" id="basic-dropdown1" 
                            {...props}
                            onMouseOver={() => updateIsOpen2(true)}
                            onMouseLeave={() => updateIsOpen2(false)}
                            show={isOpen2}
                            >
                                <NavDropdown.Item href="/about_us">About</NavDropdown.Item>
                                <NavDropdown.Item href="/mission">Mission</NavDropdown.Item>
                                <NavDropdown.Item href="/team">Team</NavDropdown.Item>
                                <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </NavDropdown>
                            <NavDropdown className="mx-2" as="div" title="What We Do" id="basic-dropdown2" 
                            {...props}
                            onMouseOver={() => updateIsOpen(true)}
                            onMouseLeave={() => updateIsOpen(false)}
                            show={isOpen}
                            >
                                <Dropdown.Item href="/services/1">Our Process</Dropdown.Item>
                                <Dropdown.Item href="/services/2">Web Apps</Dropdown.Item>
                                <Dropdown.Item href="/services/3">Mobile Apps</Dropdown.Item>
                                <Dropdown.Item href="/services/4">Quality Assurance</Dropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="mx-2 mr-lg-5" href="#contact_us">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
      )
}
export default HeaderNav