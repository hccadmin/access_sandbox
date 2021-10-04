import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { resetClicks } from '../state/slices/cancerSelectionsSlice';
import { sentenceCase } from '../helpers/utilities';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Step from './Step';
import ForecastSelect from './ForecastSelect';
import Step1Setting from './Step1Setting';
import Step2Cancers from './Step2Cancers';
import Step3Prices from './Step3Prices';
import text from './text/steps';
import './styles/styles.scss';


const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const [stepVisible, setStepVisible] = useState(false);

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;

  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const initCostCalc = () => {
    setVisible({ inputs: false, results: true });
    dispatch( resetClicks() );
    loadAllCosts();
  }

  return (
    <div className="mt-3">
      <Container>
        <div className="lead-in">
          <h1>
            Welcome to<br />
            <strong>ACCESS </strong>
            (Access to Childhood Cancer Essentials)
            <strong> FORECAST</strong>
          </h1>
          <p className="lead">{ text.siteDescription }</p>
        </div>
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
              selected={ cancerSelections.selected }
              executeCosts={ loadAllCosts }
              uiCancers={ uiLabels.cancers }
              setting={ setting }
            />
          </Step>
        <Step title={ text.step3.title } fade={ setting.type === REACT_APP_SETTING_SIMPLE ? cancerSelections.initialized : stepVisible }>
          { text.step3.description.map( (desc, i) => {
            return (
              <p key={ i } dangerouslySetInnerHTML={ { __html: desc } } />
            );
          })}
          <Step3Prices 
            drugNames={ uiLabels.drugs }
          />
        </Step>
        <Step title={ text.step4.title } fade={ setting.type === REACT_APP_SETTING_SIMPLE ? cancerSelections.initialized : stepVisible }>
          <Button onClick={ initCostCalc } size="lg">Calculate</Button>
        </Step>
      </Container>
    </div>
  );
}

export default UserInterface;
