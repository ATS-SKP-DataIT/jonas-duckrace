import React from "react";
import './prizes.css';

// Bootstrap Import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from "../../assets/img/page-header-duck.png";


export const Prizes = () => {
  return(
    <div style={{ flex: 1, textAlign: "center", alignItems: "center", justifyContent: "center" }}>
      <p style={{ marginTop: 20, color: "#2B2E34", fontSize: 25, fontFamily: "Roboto" }}> 
        <img src={Logo} alt="Error"/> Præmier
      </p>
      <Container>
        <Row>
          <Col>1 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
