import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UserInterface from './user_interface/UserInterface';

const App = () => {

  return (
    <Container>
      <h1>Access Forecast</h1>
      <UserInterface />
    </Container>
  );
}

export default App;
