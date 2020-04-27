import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import Logo from '../styles/images/Logo.png'

const HeaderNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }
    
    const handleClose = () => {
        setIsOpen(false)
    }

      return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><Image className="logo" src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">
                        <NavDropdown onMouseEnter={() => handleOpen()} onMouseLeave={handleClose} noCaret open={isOpen} flip={true} title="Who We Are" id="basic-nav-dropdown1">
                            <NavDropdown.Item href="/about_us">About</NavDropdown.Item>
                            <NavDropdown.Item href="#">Mission</NavDropdown.Item>
                            <NavDropdown.Item href="#">Team</NavDropdown.Item>
                            <NavDropdown.Item href="#">Partners</NavDropdown.Item>
                            <NavDropdown.Divider/>
                        </NavDropdown>
                        </Nav.Link>
                        <NavDropdown title="What We Do" id="basic-nav-dropdown2">
                            <NavDropdown.Item href="#">Our Process</NavDropdown.Item>
                            <NavDropdown.Item href="#">Web Apps</NavDropdown.Item>
                            <NavDropdown.Item href="#">Mobile Apps</NavDropdown.Item>
                            <NavDropdown.Item href="#">Testing Services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact_us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      )
}

export default HeaderNav