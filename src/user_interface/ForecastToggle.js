import React, { useState, useRef } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { sentenceCase } from '../helpers/utilities';

const ForecastToggle = ({ name, extraClass, labels, saved, handleChange }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className={ `d-flex justify-content-center ${ extraClass }` }>
      <ButtonGroup toggle size="lg"> 
        { labels.map( (label, i) => {
          return (
            label === "Health system" ?
              <React.Fragment key={ i }>
                <ToggleButton 
                  bsPrefix="btn btn-primary disabled"
                  name={ name }
                  value={ label } 
                  checked={ saved === label }
                  type="radio"
                  key={ i } 
                  ref={ target }
                  onChange={ () => setShow(!show) } 
                >
                  { label }
                </ToggleButton>
                <Overlay target={ target.current } show={ show }>
                  <Tooltip>
                    This feature is temporarily disabled. Please choose 'Single institution'.
                  </Tooltip>
                </Overlay>
              </React.Fragment>
            :
            <ToggleButton 
              name={ name }
              value={ label } 
              checked={ saved === label }
              type="radio"
              key={ i } 
              onChange={ (e) => { setShow(false); handleChange(e); } } 
            >
              { label }
            </ToggleButton>
        /**
         * Temporarily changed to alpha test Single institution only
         *
              <ToggleButton 
                name={ name }
                value={ label } 
                checked={ saved === label }
                type="radio"
                key={ i } 
                onChange={ handleChange} 
              >
                { label }
              </ToggleButton>
        */
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ForecastToggle;
