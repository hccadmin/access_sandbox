import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import { removePriceOverride } from '../../state/slices/pricesSlice';
import { useUserOverride } from '../../hooks';

const UserOverrideToggle = ({ name, setOverride, saved }) => {
  const [visibility, setVisibility] = useUserOverride(saved);
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    const drug = e.target.name.split("-").shift();
    console.log(e.target.value);
    if (e.target.value === "modeled") {
      dispatch( removePriceOverride(drug) );
    }
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
      />
      <div className={ visibility.custom ? "visibile position-relative" : "invisible position-absolute" }>
        <Form.Control 
          name={ name } 
          type="text" 
          value={ saved || "" }
          onChange={ setOverride } 
        />
      </div>
    </>
  );
}

export default UserOverrideToggle;
