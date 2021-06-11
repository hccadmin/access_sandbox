import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import Col from 'react-bootstrap/Col';
import { sentenceCase, toSingular, toPlural } from '../helpers/utilities';
import text from './text/steps';

//const UserOverrideToggle = ({ name, setOverride, handleRemoval, saved }) => {

const fakeFunction1 = (e) => {
}

const fakeFunction2 = (e) => {
}

const LevelsInputs = () => {
  return (
    <>
      <UserOverrideToggle
        name="levels"
        setOverride={ fakeFunction1 }
        handleRemoval={ fakeFunction2 }
        numInputs="3"
        className="d-flex"
      />
    </>
  );
}

export default LevelsInputs;
