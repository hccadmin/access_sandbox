import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import headerLogo from "../images/logo_header.svg";
import "./styles/styles.scss"

const Header = () => {
  return (
    <header className="bkgrd-ht">
      <div className="bkgrd-left logo-bkgrd-color bkgrd-ht"></div>
      <Container fluid="xxl">
        <Row>
          <Col md="3">
            <div className="logo-bkgrd-color logo-container bkgrd-ht d-flex align-items-center justify-content-center">
              <a href="/"><Image src={ headerLogo } fluid /></a>
            </div>
          </Col>
          <Col md="9">
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
