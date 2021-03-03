import React from 'react';
import { sentenceCase, toSingular, makeHashKey } from '../helpers/utilities';
import Form from 'react-bootstrap/Form';

const ForecastSelect = ({ name, value, options, label, sendSelection }) => {
  return (
    <Form.Group>
    {/*<h3>{ sentenceCase(name) }</h3>*/}
      <Form.Label>{ label }</Form.Label>
      <Form.Control
        as="select"
        value={ value }
        name={ name }
        custom
        onChange={ sendSelection }
      >
        <option value="0">{ `--Select a ${ toSingular(name).split('_').join(' ') }--` }</option>
        { options.map( (option, i) => {
          return (
            <option 
              key={ i }
              value={ option }
              name={ option }
            >{ sentenceCase(option) }
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default ForecastSelect;
