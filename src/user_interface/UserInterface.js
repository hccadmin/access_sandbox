import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadIncidencesAndBsa } from '../state/slices/settingSlice';
import { resetClicks } from '../state/slices/cancerSelectionsSlice';
import { setLoading } from '../state/slices/loadingSlice';
import { sentenceCase } from '../helpers/utilities';
import { useStepVisibility } from '../hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Step from './Step';
import ForecastSelect from './ForecastSelect';
import HelpTextPopover from '../shared_components/HelpTextPopover';
import MarkupJSON from '../shared_components/MarkupJSON';
import Step1Setting from './Step1Setting';
import Step2Cancers from './Step2Cancers';
import Step3Prices from './Step3Prices';
import text from './text/steps';
import './styles/styles.scss';


const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const [stepVisible, setStepVisible] = useState(false);
  const [stepsVis, changeVis] = useStepVisibility(4);

  const { REACT_APP_SETTING_SIMPLE, REACT_APP_SETTING_COMPLEX } = process.env;

  const dispatch = useDispatch();

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const initCostCalc = () => {
    dispatch( setLoading(true) );
    setVisible(true);
    dispatch( resetClicks() );
    loadAllCosts();
  }

  //console.log(stepsVis);
  return (
      <div className="user-interface">
        <div className="lead-in">
          <h1>
            Welcome to<br />
            <strong>ACCESS </strong>
            (Access to Childhood Cancer Essentials)
            <strong> FORECAST</strong>
          </h1>
          <div className="lead">
            { text.siteDescription.map( (desc, i) => {
              return (
                <p key={ i } dangerouslySetInnerHTML={ { __html: desc } } />
              );
            })}
          </div>
        </div>

{/* STEP 1 SETTING */}
        <Step title={ text.step1.title } fade={ true }>
          <p>
            Select
            <HelpTextPopover title="Single institution" content={ text.step1.tooltips.single }>
              "Single institution"
            </HelpTextPopover>
            or
            <HelpTextPopover title="Health system" content={ text.step1.tooltips.health }>
              "Health system"
            </HelpTextPopover>
            to begin
          </p>
          <Step1Setting
            uiLabels={ uiLabels }
            setComplete={ (vis) => changeVis(vis, 1) }
          />
        </Step>

{/* STEP 2 CANCERS */}
        <Step title={ text.step2.title } fade={ stepsVis[1] }>
          <p>{ text.step2.description[setting.typeHash] }</p>
          <Step2Cancers
            selected={ cancerSelections.selected }
            executeCosts={ loadAllCosts }
            uiCancers={ uiLabels.cancers }
            setting={ setting }
          />
        </Step>

{/* STEP 3 PRICES */}
        <Step title={ text.step3.title } fade={ setting.type === REACT_APP_SETTING_SIMPLE ? cancerSelections.initialized : stepsVis[1] }>
          <MarkupJSON tag="p">
            { text.step3.description }
          </MarkupJSON>
          <Step3Prices 
            drugNames={ uiLabels.drugs }
            setComplete={ (vis) => changeVis(vis, 3) }
          />
        </Step>

{/* STEP 4 CALCULATE*/}
        <Step noBorder={ true } title={ text.step4.title } fade={ stepsVis[3] }>
        <p className="text-center">
          <Button bsPrefix="active btn btn-primary d-inline-block btn-xl"  onClick={ initCostCalc } >Calculate</Button>
          </p>
        </Step>
      </div>
  );
}

export default UserInterface;
