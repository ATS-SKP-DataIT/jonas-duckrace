import React from "react";
import "./navbar.style.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navigation = () => {
  return (
    <>
      <Navbar className="primary-color" expand="lg">
        <Container>
          <Navbar.Brand href="/aarhus-duck-race-demo">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/aarhus-duck-race-demo/concept">Hvad er Århus Duck Race?</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/buy">Køb din and her</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/donate">Doner til os her!</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/event">Hvor foregår det?</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/prizes">Præmier</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/purpose">Formål</Nav.Link>
              <Nav.Link href="/aarhus-duck-race-demo/aboutus">Om os</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
