import { useSelector, useDispatch } from 'react-redux';
import RiskStratToggle from './RiskStratToggle';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { makeHashKey, sentenceCase } from '../helpers/utilities';
import {
  setIncidence, 
  setRiskStrat, 
  setPercentage, 
  setCustomRisk, 
  setRegimen 
} from '../state/slices/userSlice';

const UserInputs = ({ selected }) => {

  const cancerHash = makeHashKey(selected.name);
  const dispatch = useDispatch();

  const user = useSelector( (state) => {
    return state.user;
  });

  const handleEvent = (e) => {
    const name = e.target.name;
    switch (name) {
      case "incidence":
        const input = e.target.value;
        const captured = { cancer: cancerHash, incidence: input }
        dispatch( setIncidence(captured) );
        break;
      case "riskToggle":
        const options = { fixed: false, custom: true };
        const choice = options[e.target.value];
        const results = { cancer: cancerHash, riskToggle: choice };
        dispatch( setCustomRisk(results) );
        break;
      case "customRisk":
        const risk = e.target.dataset.risk;
        const riskHash = makeHashKey(selected.name, risk);
        dispatch( setPercentage({
          cancer: cancerHash,
          riskName: riskHash,
          value: e.target.value
        }));
        break;
    }
    // When the user starts typing, check if this cancer has only 1 reg per
    // risk strat. If so, assign reg to risks in user state
    const singleRegArr = loadSingleRegs(selected.risks);
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
            percentage: rs.percent_total,
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

/*
  if ( !user.hasOwnProperty(cancerHash) ) {
    dispatch( initializeCancer({ 
      cancer: cancerHash, 
      risks: selected.risk_strats,
      name: selected.name 
    }));
  }
*/


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
                  <Form.Control name="incidence" value={ user[cancerHash].incidence || "" } type="number" onChange={ handleEvent } />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Risks and regimens</Form.Label>
                  <Form.Text>Enter risk percentages and corresponding regimens(disabled for now)</Form.Text>
                  <ButtonGroup toggle> 
                  { ['fixed', 'custom'].map( (value, i) => {
                    return (
                      <ToggleButton 
                        key={ i }
                        disabled={ selected.risks.length === 1 }
                        checked={ value === 'custom' ? user[cancerHash].customRisk : !user[cancerHash].customRisk }
                        type="radio" 
                        value={ value }
                        name="riskToggle"
                        onChange={ handleEvent }
                      >{ sentenceCase(value) }
                      </ToggleButton>
                    );
                  })}
                  </ButtonGroup>
                  <Table>
                    <thead>
                      <tr>
                        <th>Risk stratification</th>
                        <th>Percentage</th>
                        <th>Regimens</th>
                      </tr>
                    </thead>
                    <tbody>
                    { selected.risks.map( (rs, i) => {
                      const currCancer = user[cancerHash];
                      const rsHash = makeHashKey(cancerHash, rs.name);
                      return (
                        <tr key={ i }>
                          <td>{ rs.name || "Risk stratification" }</td>

                        {/* Risk strat override goes here */}
                          <td>
                            <RiskStratToggle 
                              custom={ user[cancerHash].customRisk } 
                              riskStrat={ rs } 
                              setRiskPercentage={ handleEvent } 
                            />
                          </td>

                        {/* Regimens selection */}
                          <td>
                            { rs.regimens.length === 1 ? rs.regimens[0] :
                            <Form.Control 
                              as="select" 
                              name={ rsHash }
                              onChange={ (e) => { captureRegimen(e) } }
                              value={ 
                                (currCancer.risks[rsHash] && 
                                  currCancer.risks[rsHash].regimen.length > 0 ) ?
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
