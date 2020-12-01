import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListModule from '../ListModule/ListModule';

const PracticeInterface = ({ cancers }) => {
  const [risks, setRisks] = useState([]);
  const [regimens, setRegimens] = useState([]);
  return (
    <Container>
      <h1>Practice interface</h1>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default PracticeInterface;
