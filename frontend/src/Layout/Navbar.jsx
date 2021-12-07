// Basics Import
import React from "react";
import "./navbar.style.css";

// Billeder
import burgerLogo from "../assets/img/burger-button.png"
import navLogo from "../assets/img/home-button.png"

// React Components import
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navigation = () => {
  return (
    <>
      <Navbar id="navbar" className="primary-color navMain" expand="lg">
        <Container id="container">
          <Navbar.Brand className="homeLogo" href="/">
            <img
              src={navLogo}
              width="50"
              height="56"
              id="logo"
              className="d-inline-block align-top"
              alt="HomeLogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img
              src={burgerLogo}
              width="36"
              height="54"
              className="d-inline-block align-top"
              alt="MenuLogo"
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="navCollapse">
            <Nav className="me-auto">
              <Nav.Link href="concept">Hvad er Århus Duck Race?</Nav.Link>
              <Nav.Link href="/buy">Køb din and her</Nav.Link>
              <Nav.Link href="/donate">Doner til os her!</Nav.Link>
              <Nav.Link href="/event">Hvor foregår det?</Nav.Link>
              <Nav.Link href="/prizes">Præmier</Nav.Link>
              <Nav.Link href="/purpose">Formål</Nav.Link>
              <Nav.Link href="/aboutus">Om os</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
