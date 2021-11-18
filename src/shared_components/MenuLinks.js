import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MenuLinks = () => {
  return (
    <div className="menu-links d-flex">
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Item as="li">
              <Nav.Link as={ NavLink } to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={ NavLink } to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={ NavLink } to="/references">References</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={ NavLink } to="/assumptions">Assumptions</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MenuLinks;

