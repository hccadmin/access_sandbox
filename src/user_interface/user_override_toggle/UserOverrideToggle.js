import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import UserOverrideValidation from './UserOverrideValidation';
import { disableError, validateLevelSum } from '../../state/slices/validationSlice';
import { arrayFrom, allFieldsFilled, isNumber } from '../../helpers/utilities';
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
  const [showInvalid, setInvalid] = useState([false, false, false]);
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

  const checkNum = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const id = parseInt(e.target.id);
    if (val === " ") { return false; }
    const isNum = isNumber(val);
    const showInvalidCopy = showInvalid;
    showInvalidCopy[id] = !isNum;
    setInvalid(showInvalidCopy);
    if (numInputs) {
      return checkSum(e);
    }
    setOverride(e);
  }



  const checkSum = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    const newObj = { ...levelsObj };
    newObj[name] = val
    const stateArr = Object.values(newObj);
    if (stateArr.length === numArr.length) {
      dispatch( validateLevelSum(stateArr) );
    }
    updateLevelsObj({ ...newObj });
    setOverride(e);
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
                      <div key={ i }>
                        <Form.Control 
                          id={ i.toString() }
                          name={ name + num } 
                          type="text" 
                          value={ saved[i] || "" }
                          onChange={ checkNum } 
                          bsPrefix={'form-control multiple-inputs'}
                          isInvalid={ showInvalid[i] }
                        />
                        <Form.Control.Feedback type="invalid">
                          Only numbers are allowed
                        </Form.Control.Feedback>
                      </div>
                    );
                  })
                :
                  <>
                    <Form.Control 
                      id="0"
                      name={ name } 
                      type="text" 
                      value={ saved || "" }
                      onChange={ checkNum } 
                      isInvalid={ showInvalid[0] }
                    />
                    <Form.Control.Feedback type="invalid">
                      Only numbers are allowed
                    </Form.Control.Feedback>
                  </>
              }
          </div>
        </div>
      </div>
      { above && getOverrideButtons() }
    </>
  );
}

export default UserOverrideToggle;
