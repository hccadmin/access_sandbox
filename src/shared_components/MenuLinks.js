import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuLinks = () => {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav defaultActiveKey="/">
          <Nav.Item as="li">
            <Nav.Link as={ Link } to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={ Link } to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={ Link } to="/references">References</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={ Link } to="/assumptions">Assumptions</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuLinks;

