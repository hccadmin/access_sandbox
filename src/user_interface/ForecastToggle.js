import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { sentenceCase } from '../helpers/utilities';

const ForecastToggle = ({ name, labels, saved, handleChange }) => {
  return (
    <div className="setting-choice-buttons d-flex justify-content-center">
      <ButtonGroup toggle size="lg"> 
        { labels.map( (label, i) => {
          return (
            <ToggleButton 
              name="type" 
              value={ label } 
              checked={ saved === label }
              type="radio"
              key={ i } 
              onChange={ handleChange } 
            >
              { label }
            </ToggleButton>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ForecastToggle;
