import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ForecastSelect from './ForecastSelect';
import LevelsInputs from './LevelsInputs';
import HelpTextPopover from '../shared_components/HelpTextPopover';
import MarkupJSON from '../shared_components/MarkupJSON';
import { useSelector } from 'react-redux';
import { sentenceCase, toSingular, toPlural } from '../helpers/utilities';
import text from './text/steps';
import step1Text from './text/step1';

const SettingInputs = ({ selected, keyVals, uiLabels, saved, setOption }) => {

  const { REACT_APP_SETTING_SIMPLE } = process.env;

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const getSavedValue = (settingType) => {
    if (settingType === "health_systems") {
      return setting.subtype || 0;
    }
    return setting.name || 0;
  }

  const type = Object.keys(keyVals).find( setting => keyVals[setting].buttonText === selected);
  const settingText = step1Text[setting.typeHash] || {};

  return (
    <Fade in={ selected ? true : false } unmountOnExit="true">
      <Card>
        <Card.Body>
          <p>{ step1Text.intro }</p>
          { settingText.required &&
            <div className="required">
              <p>{ settingText.required.list_intro || "" }</p>
              <ul>
                <MarkupJSON tag="li">
                  { settingText.required.list_items }
                </MarkupJSON>
              </ul>
            </div>
          }
          { settingText.optional &&
            <div className="optional">
              <p>{ settingText.optional.list_intro || "" }</p>
              <ul>
                <MarkupJSON tag="li">
                  { settingText.optional.list_items }
                </MarkupJSON>
              </ul>
            </div>
          }
          { 
            settingText.instructions ? 
              <p>{ settingText.instructions }</p>
            :
            <p>
              To begin: Select from the dropdown menu the 
              <HelpTextPopover title="Geographical area" content={ settingText.geographical }>
                geographical area
              </HelpTextPopover>
              and the calendar year you wish to analyze.
              <HelpTextPopover title="High-income countries or regions" content={ settingText.high_income }>
                Note for high-income countries or regions.
              </HelpTextPopover>
            </p>
          }
          { selected &&
            <>
              <div className="d-flex flex-wrap">
                <ForecastSelect
                  name={ keyVals[type].next || keyVals[type].selectName }
                  label={ keyVals[type].label }
                  value={ getSavedValue(type) }
                  options={ uiLabels[type] }
                  sendSelection={ setOption }
                /> 
                <ForecastSelect
                  name="year"
                  label="Year"
                  value={ setting.year || 0 }
                  options={ uiLabels.years }
                  sendSelection={ setOption }
                /> 
              </div>
              { (setting.subtype && setting.subtype !== "worldwide") &&
                  <ForecastSelect
                    name="name"
                    id={ setting.subtype }
                    label={ toSingular( sentenceCase(setting.subtype) ) }
                    value={ setting.name }
                    options={ uiLabels[setting.subtype] }
                    sendSelection={ setOption }
                  /> 
                }
                { setting.subtype &&
                  <>
                  <Form.Group>
                    <Form.Label>Diagnosis type</Form.Label>
                    <p>{ settingText.diagnosis }</p>
                    {["diagnosed", "total"].map( (type, i) => {
                      return (
                        <Form.Check
                          checked={ setting.diagType === type }
                          key={ i }
                          type="radio"
                          name="diagType"
                          label={ sentenceCase(type) }
                          value={ type }
                          onChange={ setOption }
                        />
                      );
                    })}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Institution level types</Form.Label>
                    <MarkupJSON tag="p">
                      { settingText.levels }
                    </MarkupJSON>
                    <Col bsPrefix="col p-0 col-md-9">
                      <LevelsInputs 
                        defaults={ setting.levels.modeled }
                      >
                        Modeled institution level distribution:
                      </LevelsInputs>
                    </Col>
                  </Form.Group>
                </>
                }
            </>
        }
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default SettingInputs;
