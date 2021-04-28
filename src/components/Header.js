import React from "react";
import { Nav, Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar classname="bg-primary navbar-expand">
      <Container>
        <NavbarBrand>TDAY</NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/hotel" classname="nav-link">
              Hotel{" "}
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addhotel" classname="nav-link">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" classname="nav-link">
              LOG IN
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" classname="nav-link">
              SIGN UP
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
