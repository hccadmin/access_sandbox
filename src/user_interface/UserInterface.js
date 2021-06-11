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
import text from './text/steps';
import './styles/styles.css';


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
    <div className="mt-3">
      <Container>
        <Step title={ text.step1.title } fade={ true }>
          <p>{ text.step1.description }</p>
          <Step1Setting
            uiLabels={ uiLabels }
            setComplete={ setStepVisible }
          />
        </Step>
          <Step title={ text.step2.title } fade={ stepVisible }>
            <p>{ text.step2.description }</p>
            <Step2Cancers
              selected={ user.selected }
              executeCosts={ loadAllCosts }
              uiCancers={ uiLabels.cancers }
              setting={ setting }
            />
          </Step>
        <Step title={ text.step3.title } fade={ setting.type === "Single institution" ? user.initialized : stepVisible }>
          { text.step3.description.map( (desc, i) => {
            return (
              <p key={ i } dangerouslySetInnerHTML={ { __html: desc } } />
            );
          })}
          <Step3Prices 
            drugNames={ uiLabels.drugs }
          />
        </Step>
        <Step title={ text.step4.title } fade={ setting.type === "Single institution" ? user.initialized : stepVisible }>
          <Button onClick={ initCostCalc } size="lg">Calculate</Button>
        </Step>
      </Container>
    </div>
  );
}

export default UserInterface;
