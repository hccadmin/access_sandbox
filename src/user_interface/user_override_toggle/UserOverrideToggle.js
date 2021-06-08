import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import { useUserOverride } from '../../hooks';

const UserOverrideToggle = ({ name, setOverride, handleRemoval, saved }) => {
  const [visibility, setVisibility] = useUserOverride(saved);
  const dispatch = useDispatch();

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
