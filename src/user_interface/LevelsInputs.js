import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sentenceCase, toSingular, toPlural, setNumber } from '../helpers/utilities';
import { setLevel, removeLevels } from '../state/slices/settingSlice';
import text from './text/steps';

//const UserOverrideToggle = ({ name, setOverride, handleRemoval, saved }) => {


const LevelsInputs = ({ defaults, children }) => {

  const levels = useSelector( (state) => {
    return state.setting.levels;
  });

  const dispatch = useDispatch();

  const handleLevelInput = (e) => {
    let index = e.target.name.slice(-1);
    index = index -1;
    const level = e.target.value;
    dispatch( setLevel({ index, level }) );
  }

  const handleLevelRemoval = (e) => {
    dispatch( removeLevels() );
  }

  return (
    <>
      <p>{ children }</p>
      <Row>
        { defaults.map( (level, i) => {
          return (
            <Col key={ i }>
              <p className="text-center level-title"><strong>{ `Level ${ i + 1 }` }</strong><br />
                { `${ level }%` }
              </p>
            </Col>
          );
        })}
      </Row>
      <UserOverrideToggle
        name="levels"
        setOverride={ handleLevelInput }
        handleRemoval={ handleLevelRemoval }
        numInputs="3"
        above
        className="d-flex"
        saved={ levels.custom }
      />
    </>
  );
}

export default LevelsInputs;
