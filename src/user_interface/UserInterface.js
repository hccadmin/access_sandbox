import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StaticTitle from './StaticTitle';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CancerModel } from '../models';

const UserInterface = () => {
  const [cancersFull, setCancersFull] = useState([]);
  const [cancersOnly, setCancersOnly] = useState([]);
  const titles = {
    country: 'Argentina',
    year: '2020',
    calculation_source: 'Consolidated'
  }

  useEffect( () => {
    if (cancersFull.length === 0 && cancersOnly.length === 0) {
      DBQueryer.getAll("cancers")
        .then( (dbCancers) => {
          CancerModel.load(dbCancers);
          setCancersFull(CancerModel.getCancersFull());
          setCancersOnly(CancerModel.getCancerNames());
        });
    }
  });

  return (
    <Container>
      <h2>Temporary static inputs</h2>
      <header role="header">
        <Row>
            { Object.keys(titles).map( (prop, i) => {
              return (
                <Col key={ i }>
                  <StaticTitle 
                    heading={ prop }
                    text={ titles[prop] }
                  />
                </Col>
              );
            })}
        </Row>
      </header>
      <UserInputs
        cancersOnly={ cancersOnly }
        cancersFull={ cancersFull }
      />
    </Container>
  );
}

export default UserInterface;
