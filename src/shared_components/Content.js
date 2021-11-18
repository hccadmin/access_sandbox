import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Content = () => {
  return (
    <div className="content-top-margin">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Content;
