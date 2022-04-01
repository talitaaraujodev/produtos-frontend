import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Navbar expand="lg" className="nav">
          <Container>
          <Navbar.Brand  className="navbar-brand">
            {"Plant Shop"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto" navbarScroll >
              <Nav.Link as={Link} to="/">
                {"Home"}
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                {"About"}
              </Nav.Link>
              <Nav.Link as={Link} to="/produto">
                {"Plantas"}
              </Nav.Link>
              <Nav.Link as={Link} to="/categoria">
                {"Categorias"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    </React.Fragment>
  );
}
