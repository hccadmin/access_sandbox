import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import Form from 'react-bootstrap/Form';
import ForecastSelect from './ForecastSelect';
import { useSelector } from 'react-redux';
import { sentenceCase, toSingular, toPlural } from '../helpers/utilities';

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
                          key={ i }
                          type="radio"
                          name="diagType"
                          label={ sentenceCase(type) }
                          value={ `${type}_standard` }
                          onChange={ setOption }
                        />
                      );
                    })}
                  </Form.Group>
                }
            </>
        }
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default SettingInputs;
