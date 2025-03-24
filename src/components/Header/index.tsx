import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavbarBrand href="#home">Navbar</NavbarBrand>
        <Nav className="me-auto">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
