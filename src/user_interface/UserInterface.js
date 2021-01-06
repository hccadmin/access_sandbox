import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const UserInterface = () => {
  return (
    <Container>
      <h1>Temporary static inputs</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Country</Card.Title>
              <Card.Text>Argentina</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInterface;
