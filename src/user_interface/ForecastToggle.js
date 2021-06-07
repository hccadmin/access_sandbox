import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { sentenceCase } from '../helpers/utilities';

const ForecastToggle = ({ name, extraClass, labels, saved, handleChange }) => {
  return (
    <div className={ `d-flex justify-content-center ${ extraClass }` }>
      <ButtonGroup toggle size="lg"> 
        { labels.map( (label, i) => {
          return (
            <React.Fragment key={ i }>
              <ToggleButton 
                bsPrefix="btn btn-primary"
                name={ name }
                value={ label } 
                checked={ saved === label }
                type="radio"
                key={ i } 
                onChange={ handleChange } 
              >
                { label }
              </ToggleButton>
            </React.Fragment>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ForecastToggle;
