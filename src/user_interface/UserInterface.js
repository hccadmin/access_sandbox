import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loadCancers } from '../state/cancersSlice';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StaticTitle from './StaticTitle';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';
import { DBQueryer } from '../dbqueryer/DBQueryer';
import { CancerModel } from '../models';

const mapStateToProps = (state) => {
  return {
    names: state.cancers.names,
    full: state.cancers.full
  }
}

const UserInterface = ({ names, full }) => {
  const dispatch = useDispatch();
  const titles = {
    country: 'Argentina',
    year: '2020',
    calculation_source: 'Consolidated'
  }

  if (names.length === 0 && full.length === 0) {
    dispatch(loadCancers());
  }


  /*
    loadCancers().then( (cancers) => {
      setCancersFull(cancers.full);
      setCancersOnly(cancers.names);
    });
  */
  useEffect( () => {
  /*
    dispatch(loadCancers()).then( (cancers) => {
      setCancersFull(cancers.full);
      setCancersOnly(cancers.names);
    });
  */
  });

    /*
    loadCancers().then( (cancers) => {
      setCancersFull(cancers.full);
      setCancersOnly(cancers.names);
    });
    if (cancersFull.length === 0 && cancersOnly.length === 0) {
      DBQueryer.getAll("cancers")
        .then( (dbCancers) => {
          CancerModel.load(dbCancers);
          setCancersFull(CancerModel.getCancersFull());
          setCancersOnly(CancerModel.getCancerNames());
        });
    }
  });
    */

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
        cancersOnly={ names }
        cancersFull={ full }
      />
    </Container>
  );
}

export default connect(mapStateToProps)(UserInterface);
