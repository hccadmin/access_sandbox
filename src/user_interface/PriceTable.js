import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PriceTable = ({ drugs, prices }) => {
  return (
    <>
      { drugs.map( (drug, i) => {
          return (
            <Row key={ i }>
              <Col>
                { drug }
              </Col>
              <Col>
                $1.23
              </Col>
            </Row>
          );
        })}
    </>
  );
}

export default PriceTable;
