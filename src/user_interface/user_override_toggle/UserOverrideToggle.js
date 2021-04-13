import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import UserOverrideButtons from './UserOverrideButtons';

const UserOverrideToggle = ({ name, setOverride, saved }) => {
  const [visibility, setVisibility] = useState({ fixed: true, custom: false });

  const handleClick = (e) => {
    setVisibility({
      fixed: !visibility.fixed,
      custom: !visibility.custom
    });
  }

  return (
    <>
      <UserOverrideButtons 
        name={ name }
        visibility={ visibility }
        handleEvent={ handleClick }
      />
      <div className={ visibility.custom ? "visibile position-relative" : "invisible position-absolute" }>
        <Form.Control 
          name={ name } 
          type="text" 
          value={ saved }
          onChange={ setOverride } 
        />
      </div>
    </>
  );
}

export default UserOverrideToggle;
