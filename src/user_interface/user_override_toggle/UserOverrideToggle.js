import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';
import { useUserOverride } from '../../hooks';

const UserOverrideToggle = ({ name, setOverride, saved }) => {
  const [visibility, setVisibility] = useUserOverride(saved);

  const changeVisibility = (e) => {
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
        handleEvent={ changeVisibility }
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
