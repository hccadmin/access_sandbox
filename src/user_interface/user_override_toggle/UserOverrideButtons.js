import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { makeHashKey, sentenceCase } from '../../helpers/utilities';
import terms from '../../text/global';

const UserOverrideButtons = ({ name, visibility, handleEvent }) => {

  return (
    <ButtonGroup toggle> 
    { Object.values(terms.valueOverride).map( (value, i) => {
      return (
        <ToggleButton 
          key={ i }
          checked={ visibility[value] }
          type="radio" 
          value={ value }
          name={ name }
          onChange={ handleEvent }
        >{ sentenceCase(value) }
        </ToggleButton>
      );
    })}
    </ButtonGroup>
  );
}

export default UserOverrideButtons;
