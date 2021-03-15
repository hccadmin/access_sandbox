import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { setSelection } from '../state/slices/userSlice';
import { sentenceCase } from '../helpers/utilities';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Step from './Step';
import ForecastSelect from './ForecastSelect';
import Step1Setting from './Step1Setting';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';


const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const [step2Visible, setStep2Visible] = useState(false);

  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const cancers = useSelector( (state) => {
    return state.cancers.full;
  });

  const user = useSelector( (state) => {
    return state.user;
  });

  const priceSource = useSelector( (state) => {
    return state.costs.priceSource;
  });

  const initCostCalc = () => {
    setVisible({ inputs: false, results: true });
    loadAllCosts();
  }


  const evaluateSelection = (e) => {
    const selection = {
      name: e.target.name,
      value: e.target.value
    };
    dispatch( setSelection(selection) );
  }

  if (Object.keys(cancers).length < 1) {
    dispatch( loadCancers() );
  }

  return (
    <div>
      <Container>
        <Step title="Step 1: Setting" fade="true">
          <p>Choose to view costs as a Health System or a Single Institution</p>
          <Step1Setting
            uiLabels={ uiLabels }
            setComplete={ setStep2Visible }
          />
        </Step>
          <Step title="Step 2: Cancers" fade={ step2Visible }>
            <Row>
              <Col md="3">
                <CancerButtons cancers={ uiLabels.cancers } />
              </Col>
              <Col md="9">
                { 
                  !user.selected.hasOwnProperty("name") ? <p>Please select cancer</p> :
                    <UserInputs selected={ user.selected } />
                }
              </Col>
              <Button onClick={ initCostCalc } size="lg">Calculate costs</Button>
            </Row>
          </Step>
      </Container>
    </div>
  );
}

export default UserInterface;
