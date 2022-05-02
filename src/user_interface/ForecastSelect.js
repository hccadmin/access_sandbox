import React from 'react';
import { sentenceCase, toSingular, toPlural, makeHashKey } from '../helpers/utilities';
import Form from 'react-bootstrap/Form';

const ForecastSelect = ({ name, id, value, options, label, sendSelection }) => {
  return (
    <Form.Group bsPrefix="form-group forecast-select">
    {/*<h3>{ sentenceCase(name) }</h3>*/}
      <Form.Label bsPrefix="form-label h5">{ sentenceCase(toPlural(label)) }</Form.Label>
      <Form.Control
        id={ id }
        as="select"
        size="lg"
        value={ value }
        name={ name }
        custom
        onChange={ sendSelection }
      >
        <option value="0">{ `--Select a ${ label.toLowerCase() }--` }</option>
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
