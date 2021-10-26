import React from 'react';
import Form from 'react-bootstrap/Form';

const UserOverrideValidation = ({ children }) => {
  return (
    <div>
      { children }
      <Form.Control.Feedback type="invalid">
        Only numbers are allowed
      </Form.Control.Feedback>
    </div>
  );
}

export default UserOverrideValidation;
