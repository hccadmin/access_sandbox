import React from 'react';
import Button from 'react-bootstrap/Button';
import { sentenceCase } from '../helpers/utilities';

const SettingButtons = ({ names, setSetting }) => {
  return (
    <div className="setting-choice-buttons d-flex justify-content-center">
      { names.map( (name, i) => {
        return (
          <Button 
            name="setting" 
            value={ name } 
            key={ i } 
            onClick={ setSetting } 
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
