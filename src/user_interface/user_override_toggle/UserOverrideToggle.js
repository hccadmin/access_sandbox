import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import UserOverrideValidation from './UserOverrideValidation';
import { arrayFrom } from '../../helpers/utilities';
import { useUserOverride } from '../../hooks';

const UserOverrideToggle = ({ name, setOverride, handleRemoval, saved, numInputs, className, btnSize }) => {
  const [visibility, setVisibility] = useUserOverride(saved);
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
      <div className={ visibility.custom ? `visibile position-relative ${ className }` : "invisible position-absolute" }>
        { 
          numArr ?
            numArr.map( (num, i) => {
              return (
              <UserOverrideValidation key={ i }>
                <Form.Control 
                  key={ i }
                  name={ name + num } 
                  type="text" 
                  value={ saved[i] || "" }
                  onChange={ setOverride } 
                  isInvalid="true"
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
    </>
  );
}

export default UserOverrideToggle;
