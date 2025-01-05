import React from "react";
import {Container,Row,Col,Nav} from 'react-bootstrap'

function Footer() {
  return (
  <>
    <Container style={{backgroundColor:"#212529"}} fluid>
      <Row className="py-5 border-top border-light">
        <Col className="mb-3 text-light">
          <a
            href="/"
            className="text-decoration-none"
          >
          <h1 className="text-light text-center">VALO HUB</h1>
          </a>
          <p className="text-center">&copy; 2024</p>
        </Col>
        <Col></Col>
        <Col className="mb-3 text-light">
          <h5>Pages</h5>
          <Nav className="flex-column">
            <Nav.Item className="mb-2">
              <Nav.Link href="/home" className="text-light p-0">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="/home" className="text-light p-0">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="/home" className="text-light p-0">
                Pricing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link className="text-light p-0" href="/home">
                FAQs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mb-2">
              <Nav.Link href="/home" className="text-light p-0">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Footer;
