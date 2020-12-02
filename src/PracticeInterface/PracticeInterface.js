import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListModule from '../ListModule/ListModule';
import CancerSelector from '../CancerSelector/CancerSelector';

const PracticeInterface = ({ data }) => {
  const [risks, setRisks] = useState([]);
  const [regimens, setRegimens] = useState([]);

  const cancers = data.map( (cancer) => {
    return cancer.cancer;
  });

  const getSelected = (e) => {
    const selected = e.target.value;
    const risks = data.find( (cancers) => {
      return cancers.cancer === selected;
    }).risk_strats.map( (risk) => {
      return risk.strat_name;
    });
    setRisks(risks);
  }

  return (
    <Container>
      <h1>Practice interface</h1>
      <Row>
        <Col>
          <CancerSelector 
            cancers={ cancers } 
            setSelected={ getSelected }
          />
        </Col>
        <Col>
          <ListModule
            heading="Risk stratification"
            list={ risks }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PracticeInterface;
