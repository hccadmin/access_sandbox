import React from 'react';
import Button from 'react-bootstrap/Button';
import { sentenceCase } from '../helpers/utilities';

const SettingButtons = ({ names, setSettingType }) => {
  return (
    <div className="setting-choice-buttons d-flex justify-content-center">
      { names.map( (name, i) => {
        return (
          <Button 
            name="type" 
            value={ name } 
            key={ i } 
            onClick={ setSettingType } 
            variant="primary"
          >
            { sentenceCase(name) }
          </Button>
        );
      })}
    </div>
  );
}

export default SettingButtons;
