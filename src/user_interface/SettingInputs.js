import React from 'react';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import ForecastSelect from './ForecastSelect';
import { useSelector } from 'react-redux';
import { sentenceCase, toSingular, toPlural } from '../helpers/utilities';

const SettingInputs = ({ selected, settings, uiLabels, saved, setOption }) => {

  const user = useSelector( (state) => {
    return state.user;
  });

  const type = Object.keys(settings).find( setting => settings[setting] === selected);
  return (
    <Fade in={ selected ? true : false }>
      <Card>
        <Card.Body>
        { selected &&
            <ForecastSelect
              name={ type }
              value={ user[type] || 0 }
              options={ uiLabels[type] }
              sendSelection={ setOption }
            /> 
        }
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default SettingInputs;
