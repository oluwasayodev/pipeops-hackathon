import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LuBone } from "react-icons/lu";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Container>
        <LinkContainer to="/" >
          <Navbar.Brand >
            <LuBone /> Vertebrae Counter 
         </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse 
            id="basic-navbar-nav" 
            className="justify-content-end">
            <Nav className="ml-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/detect">
                    <Nav.Link>Detect</Nav.Link>
                </LinkContainer>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;