import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Content = () => {
  return (
    <div className="content-bkgrd">
      <div className="content-padding">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default Content;
