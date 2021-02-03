import React from 'react';
import { sentenceCase, makeHashKey } from '../helpers/utilities';
import Form from 'react-bootstrap/Form';

const ForecastSelect = ({ name, options, label, sendSelection }) => {
  return (
    <Form.Group>
      <h3>{ sentenceCase(name) }</h3>
      <Form.Label>{ label }</Form.Label>
      <Form.Control
        as="select"
        name={ name }
        onChange={ sendSelection }
      >
        <option value="0">{ `--Select a ${ name.split('_').join(' ') }--` }</option>
        { options.map( (option, i) => {
          return (
            <option 
              key={ i }
              value={ option }
              name={ option }
            >{ option }
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default ForecastSelect;
