import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

const Step = ({ title, fade, noBorder=false, children }) => {
  const border = noBorder ? "" : " card-border"
  return (
    <Fade in={ fade } unmountOnExit>
      <section className="mb-5">
        <Card border="0">
          <Card.Body>
            <Card.Title as="h2">
              { title }
            </Card.Title>
            <Card.Text as="div" bsPrefix={ `card-text ${ border } `}>
              { children }
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </Fade>
  );
}

export default Step;
