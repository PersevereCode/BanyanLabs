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
                    <Navbar.Brand href="#"><Link to="/" className="no-dec"><Image className="logo" src={Logo} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="d-flex align-items-end">
                        <Nav.Link className="mx-2" href="/"><Link className="no-dec" to="/">Home</Link></Nav.Link>
                            <NavDropdown className="mx-2" as="div" title="Who We Are" id="basic-dropdown1" 
                            {...props}
                            onMouseOver={() => updateIsOpen2(true)}
                            onMouseLeave={() => updateIsOpen2(false)}
                            show={isOpen2}
                            >
                                <NavDropdown.Item href="/about_us"><Link to="/about_us" className="no-dec">About</Link></NavDropdown.Item>
                                <NavDropdown.Item href="/mission"><Link to="/mission" className="no-dec">Mission</Link></NavDropdown.Item>
                                <NavDropdown.Item href="/team"><Link to="/team" className="no-dec">Team</Link></NavDropdown.Item>
                                <NavDropdown.Item href="/partners"><Link to="/partners" className="no-dec">Partners</Link></NavDropdown.Item>
                                <NavDropdown.Divider/>
                            </NavDropdown>
                            <NavDropdown className="mx-2" as="div" title="What We Do" id="basic-dropdown2" 
                            {...props}
                            onMouseOver={() => updateIsOpen(true)}
                            onMouseLeave={() => updateIsOpen(false)}
                            show={isOpen}
                            >
                                <Dropdown.Item href="/services/1"><Link to="/services/1" className="no-dec">Our Process</Link></Dropdown.Item>
                                <Dropdown.Item href="/services/2"><Link to="/services/2" className="no-dec">Web Apps</Link></Dropdown.Item>
                                <Dropdown.Item href="/services/3"><Link to="/services/3" className="no-dec">Mobile Apps</Link></Dropdown.Item>
                                <Dropdown.Item href="/services/4"><Link to="/services/4" className="no-dec">Quality Assurance</Link></Dropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="mx-2 mr-lg-5" href="#contact_us">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
      )
}
export default HeaderNav