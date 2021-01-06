import React from 'react';
import Card from 'react-bootstrap/Card';

const StaticTitle = ({ heading, text }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h3">{ heading }</Card.Title>
        <Card.Text>{ text }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StaticTitle;
