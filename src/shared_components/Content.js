import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Content = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Content;
