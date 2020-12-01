import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const CancerSelector = ({ cancers, setSelected }) => {

  return (
    <Form.Group>
      <Form.Label role="label">Select a cancer</Form.Label>
      <Form.Control 
        as="select" 
        onChange={ setSelected }
      >
      { cancers.map( (cancer, i) => {
        return (
          <option data-testid={ i + 1 } value={ cancer } key={ i }>{ cancer }</option>
        )
      })};
      </Form.Control>
    </Form.Group>
  );
}

export default CancerSelector;
