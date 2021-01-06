import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CancerButtons = ({ cancers }) => {
  return (
    cancers.map( (cancer, i) => {
      return (
        <Button block variant="secondary" key={ i } size="lg">
          { cancer }
        </Button>
      );
    })
  );
}

export default CancerButtons;
