import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import Form from 'react-bootstrap/Form';
import ForecastSelect from './ForecastSelect';
import LevelsInputs from './LevelsInputs';
import { useSelector } from 'react-redux';
import { sentenceCase, toSingular, toPlural } from '../helpers/utilities';
import text from './text/steps';

const SettingInputs = ({ selected, keyVals, uiLabels, saved, setOption }) => {

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const getSavedValue = () => {
    if (type === "health_systems") {
      return setting.subtype || 0;
    }
    return setting.name || 0;
  }

  const type = Object.keys(keyVals).find( setting => keyVals[setting].buttonText === selected);

  return (
    <Fade in={ selected ? true : false }>
      <Card>
        <Card.Body>
          <p>{ text.step1.instructions.single }</p>
          { selected &&
            <>
              <div className="d-flex flex-wrap">
                <ForecastSelect
                  name={ keyVals[type].next || keyVals[type].selectName }
                  label={ keyVals[type].label }
                  value={ getSavedValue() }
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
                  <Form.Group>
                    <Form.Label>Diagnosis type</Form.Label>
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
                }
                <Form.Group>
                  <Form.Label>Institution level types</Form.Label>
                  <Form.Text>
                    Descriptions of level types
                  </Form.Text>
                  <LevelsInputs />
                </Form.Group>
            </>
        }
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default SettingInputs;
