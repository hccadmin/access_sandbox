import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { makeHashKey } from '../helpers/utilities';
import { setIncidence, setRiskStrat, setRegimen } from '../state/slices/userSlice';

const UserInputs = ({ selected }) => {

  const cancerHash = makeHashKey(selected.name);
  const dispatch = useDispatch();

  const user = useSelector( (state) => {
    return state.user;
  });

  const captureIncidence = (e) => {
    // When the user starts typing, check if this cancer has only 1 reg per
    // risk strat. If so, assign reg to risks in user state
    const input = e.target.value;
    const captured = { cancer: cancerHash, incidence: input }
    // Make sure there is at least a single digit incidence number
    dispatch( setIncidence(captured) );
    const singleRegArr = loadSingleRegs(selected.risk_strats);
    if (singleRegArr && user[cancerHash] ) {
      singleRegArr.forEach( (sra) => {
        saveRegimen(sra);
      });
    }
  }

  const loadSingleRegs = (riskStrats) => {
    let singleRegArr = [];
    riskStrats.forEach( (rs) => {
      if (rs.regimens.length === 1) {
        const rsHash = makeHashKey(cancerHash, rs.name);
        singleRegArr.push(
          { 
            cancer: cancerHash,
            riskStrat: rsHash,
            regimen: rs.regimens[0] 
          }
        );
      }
    });
    return (singleRegArr.length > 0) && singleRegArr;
  }

  const captureRegimen = (e) => {
    const captured = { 
      cancer: cancerHash, 
      riskStrat: e.target.name, 
      regimen: e.target.value 
    };
    saveRegimen(captured);
  }

  const saveRegimen = (captured) => {
    dispatch( setRegimen(captured) );
  }

  return (
    <div role="user-inputs">
      <Card>
        <Card.Body>
          <Form>
            <h3>Cancer: <span className="display-4">{ selected.name }</span></h3>
            <Row>
              <Col md="6">
                <Form.Group>
                  <Form.Label>Incidence</Form.Label>
                  <Form.Text>Enter the estimated number of cases</Form.Text>
                  <Form.Control value={ user[cancerHash].incidence || "" } type="number" onChange={ captureIncidence } />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Risks and regimens</Form.Label>
                  <Form.Text>Enter risk percentages and corresponding regimens(disabled for now)</Form.Text>
                  <Table>
                    <thead>
                      <tr>
                        <th>Risk stratification</th>
                        <th>Percentage</th>
                        <th>Regimens</th>
                      </tr>
                    </thead>
                    <tbody>
                    { selected.risk_strats.map( (rs, i) => {
                      const currCancer = user[cancerHash];
                      const rsHash = makeHashKey(cancerHash, rs.name);
                      return (
                        <tr key={ i }>
                          <td>{ rs.name || "Risk stratification" }</td>
                          <td>{ `${ (rs.percent_total * 100).toFixed() }%` }</td>
                          <td>
                            { rs.regimens.length === 1 ? rs.regimens[0] :
                            <Form.Control 
                              as="select" 
                              name={ rsHash }
                              onChange={ captureRegimen }
                              value={ 
                                (currCancer.risks[rsHash] && 
                                  currCancer.risks[rsHash].hasOwnProperty('regimen') ) ?
                                  currCancer.risks[rsHash].regimen : "0"
                              }
                            >
                              <option value="0" name="select">--Select a regimen--</option>
                            { rs.regimens.map( (reg, j) => {
                              return (
                                <option 
                                  key={ j } 
                                  name={ reg } 
                                  value={ reg }>
                                  { reg }
                                </option>
                              );
                            })}
                            </Form.Control>
                            }
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </Table>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserInputs;
