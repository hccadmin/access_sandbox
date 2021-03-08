import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { sentenceCase } from '../helpers/utilities';

const SettingButtons = ({ names, saved, setSettingType }) => {
  return (
    <div className="setting-choice-buttons d-flex justify-content-center">
      <ButtonGroup toggle size="lg"> 
        { names.map( (name, i) => {
          return (
            <ToggleButton 
              name="type" 
              value={ name } 
              checked={ saved === name }
              type="radio"
              key={ i } 
              onChange={ setSettingType } 
            >
              { name }
            </ToggleButton>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default SettingButtons;
