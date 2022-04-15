import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import UserOverrideValidation from './UserOverrideValidation';
import { disableError, validateLevelSum } from '../../state/slices/validationSlice';
import { arrayFrom, allFieldsFilled } from '../../helpers/utilities';
import { useUserOverride } from '../../hooks';
import './styles/styles.scss';

const UserOverrideToggle = ({ 
  name, 
  setOverride, 
  handleRemoval, 
  saved, 
  numInputs, 
  className, 
  btnSize, 
  above = false
}) => {
  const [visibility, setVisibility] = useUserOverride(saved);
  const [levelsObj, updateLevelsObj] = useState({});
  const numArr = numInputs && arrayFrom(numInputs);
  const dispatch = useDispatch();
  const validation = useSelector( (state) => {
    return state.validation;
  });

  const handleButtonClick = (e) => {
    handleRemoval(e);
    setVisibility({
      modeled: !visibility.modeled,
      custom: !visibility.custom
    });
  }

  const getOverrideButtons = () => {
    return (
      <UserOverrideButtons 
        name={ `${name}-override-buttons` }
        visibility={ visibility }
        handleEvent={ handleButtonClick }
        size={ btnSize }
      />
    );
  }

  const checkSum = (e) => {
    const newObj = { ...levelsObj };
    newObj[e.target.name] = e.target.value;
    const stateArr = Object.values(newObj);
    //console.log("UserOverrideToggle->checkSum, newObj:", newObj);
    if (stateArr.length === numArr.length) {
      dispatch( validateLevelSum(stateArr) );
    }
    updateLevelsObj({ ...newObj });
    setOverride(e);
    //console.log("UserOverrideToggle->checkSum, levelSumError: ", validation.levelSumError);
  }


  return (
    <>
      { !above && getOverrideButtons() }
      <div className={ visibility.custom ? "visibile position-relative" : "invisible position-absolute" }>
        { numArr && 
          <div className="percentage-validation">
            <div className={ validation.levelSumError && "is-invalid" }></div>
            <div className="invalid-feedback">Percentage values must add up to 100</div>
          </div>
        }
          <div className="custom-control user-override-toggle">
            <div className={ `form-group ${ className || ""  }` }>
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
                          onChange={ checkSum } 
                          bsPrefix={'form-control multiple-inputs'}
                          isInvalid={ false }
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
      </div>
      { above && getOverrideButtons() }
    </>
  );
}

export default UserOverrideToggle;
