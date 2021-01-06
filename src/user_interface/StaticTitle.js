import React from 'react';
import Card from 'react-bootstrap/Card';
import { sentenceCase } from '../helpers/utilities';

const StaticTitle = ({ heading, text }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h4">{ sentenceCase(heading) }</Card.Title>
        <Card.Text>{ text }</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StaticTitle;
