import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCompletedInputs } from '../hooks';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { setSettingInput } from '../state/slices/settingSlice';
import { setSelection } from '../state/slices/userSlice';
import { sentenceCase } from '../helpers/utilities';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Step from './Step';
import ForecastSelect from './ForecastSelect';
import SettingButtons from './SettingButtons';
import SettingInputs from './SettingInputs';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';


const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const { name, year, type, diagType, incidences } = setting;

  const areComplete = useCompletedInputs(name, year, diagType);

  useEffect( () => {
    if (areComplete) {
      dispatch(loadIncidencesAndBsa({
        name, type, year, diagType
      }));
    }
      /*
      */
  }, [name, type, year, diagType]);

  const settingsKeyVal = {
    health_systems: {
      buttonText: "Health system",
      label: "geographical area",
      next: "subtype",
    },
    countries: {
      buttonText: "Single institution",
      label: "country",
      selectName: "name"
    }
  };
  
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

  const handleSettingInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const input = { name, value, reset: false };
    if (name === "type") {
      input.reset = true;
    }
    dispatch( setSettingInput(input) );
    /*
    */
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
          <SettingButtons 
            names={ Object.keys(settingsKeyVal).map( setting => settingsKeyVal[setting].buttonText) } 
            setSettingType={ handleSettingInput } 
            saved={ setting.type }
          />
          <SettingInputs 
            keyVals={ settingsKeyVal }
            selected={ setting.type } 
            uiLabels={ uiLabels }
            setOption={ handleSettingInput } 
          /> 
        </Step>
          <Step title="Step 2: Cancers" fade={ areComplete }>
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
