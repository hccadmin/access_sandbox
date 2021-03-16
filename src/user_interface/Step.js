import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

const Step = ({ title, fade, children }) => {
  return (
    <Fade in={ fade } unmountOnExit>
      <section>
        <Card border="0">
          <Card.Body>
            <Card.Title as="h2">
              { title }
            </Card.Title>
            <Card.Text as="div">
              { children }
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </Fade>
  );
}

export default Step;
