import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import UserOverrideValidation from './UserOverrideValidation';
import { arrayFrom } from '../../helpers/utilities';
import { useUserOverride } from '../../hooks';

const UserOverrideToggle = ({ name, setOverride, handleRemoval, saved, numInputs, className, btnSize }) => {
  const [visibility, setVisibility] = useUserOverride(saved);
  const [error, showError] = useState(false);
  const dispatch = useDispatch();
  const numArr = numInputs && arrayFrom(numInputs);

  const handleButtonClick = (e) => {
    handleRemoval(e);
    setVisibility({
      modeled: !visibility.modeled,
      custom: !visibility.custom
    });
  }

  return (
    <>
      <UserOverrideButtons 
        name={ `${name}-override-buttons` }
        visibility={ visibility }
        handleEvent={ handleButtonClick }
        size={ btnSize }
      />
      <div className={ visibility.custom ? "visibile position-relative" : "invisible position-absolute" }>
        { numArr && 
          <div className="percentage-validation">
            <div className="is-invalid"></div>
            <div className="invalid-feedback">Percentage values must add up to 100</div>
          </div>
        }
        <div className={ className }>
        { 
          numArr ?
            numArr.map( (num, i) => {
              return (
                <UserOverrideValidation>
                  <Form.Control 
                    key={ i }
                    name={ name + num } 
                    type="text" 
                    value={ saved[i] || "" }
                    onChange={ setOverride } 
                    isInvalid={ true }
                  />
                </UserOverrideValidation>
              );
            })
          :
          <UserOverrideValidation>
            <Form.Control 
              name={ name } 
              type="text" 
              value={ saved || "" }
              onChange={ setOverride } 
            />
          </UserOverrideValidation>
        }
      </div>
      </div>
    </>
  );
}

export default UserOverrideToggle;
