import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { resetClicks } from '../state/slices/userSlice';
import { sentenceCase } from '../helpers/utilities';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Step from './Step';
import ForecastSelect from './ForecastSelect';
import Step1Setting from './Step1Setting';
import Step2Cancers from './Step2Cancers';
import Step3Prices from './Step3Prices';


const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const [stepVisible, setStepVisible] = useState(false);

  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const user = useSelector( (state) => {
    return state.user;
  });

  const initCostCalc = () => {
    setVisible({ inputs: false, results: true });
    dispatch( resetClicks() );
    loadAllCosts();
  }

  return (
    <div>
      <Container>
        <Step title="Step 1: Setting" fade={ true }>
          <p>Choose to view costs as a Health System or a Single Institution</p>
          <Step1Setting
            uiLabels={ uiLabels }
            setComplete={ setStepVisible }
          />
        </Step>
          <Step title="Step 2: Cancers" fade={ stepVisible }>
            <p>Click on the cancer buttons below to enter incidence details</p>
            <Step2Cancers
              selected={ user.selected }
              executeCosts={ loadAllCosts }
              uiCancers={ uiLabels.cancers }
              predictedIncs={ setting.type === "Health system" && setting.incidences }
            />
          </Step>
        <Step title="Step 3: Prices" fade={ setting.type === "Single institution" ? user.initialized : stepVisible }>
          <p>Select price source and override default prices</p>
          <Step3Prices 
            drugNames={ uiLabels.drugs }
          />
        </Step>
        <Step title="Calculate results" fade={ setting.type === "Single institution" ? user.initialized : stepVisible }>
          <Button onClick={ initCostCalc } size="lg">Calculate</Button>
        </Step>
      </Container>
    </div>
  );
}

export default UserInterface;
