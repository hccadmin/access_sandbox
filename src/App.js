import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import UserInterface from './user_interface/UserInterface';

const App = () => {

/*
  const output = (bundle) => {
    if (!Array.isArray(bundle)) {
      return;
    }
    return bundle.map( (items, i) => {
      return (
        <ul>
          <li key={ i }>{ items.name }</li>
          { output(items.getContents()) }
        </ul>
      );
    });
  }
*/

  return (
    <Container>
      <h1>Access Forecast</h1>
      <UserInterface />
    </Container>
  );
}

export default App;
