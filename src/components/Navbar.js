import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
//style="background-color: #e3f2fd;"
class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="https://www.linkedin.com/in/martha-fitz-189a83211/">fitz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link eventKey={1} href="#memes">Skills</Nav.Link>
            <Nav.Link href="#pricing">Proyects</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
