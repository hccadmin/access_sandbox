import { useSelector, useDispatch } from 'react-redux';
import RiskStratToggle from './RiskStratToggle';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ForecastToggle from './ForecastToggle';
import CancerIncidence from './CancerIncidence';
import { makeHashKey, sentenceCase } from '../helpers/utilities';
import stepTerms from './text/steps';
import globalTerms from '../text/global';
import { disableError, checkSelect } from '../state/slices/validationSlice';
import text from './text/steps';
import {
  setIncidence, 
  setRiskStrat, 
  setPercentage, 
  showCustomRisk, 
  setRegimen 
} from '../state/slices/userSlice';

const CancerInputs = ({ selected, settingType, predictedIncs }) => {

  const cancerHash = makeHashKey(selected.name);
  const dispatch = useDispatch();

  const user = useSelector( (state) => {
    return state.user;
  });

  const validation = useSelector( (state) => {
    return state.validation;
  });


  const handleEvent = (e) => {
    const name = e.target.name;
    switch (name) {
      case "incidence":
        const input = e.target.value;
        const captured = { type: "custom", cancer: cancerHash, incidence: input }
        dispatch( setIncidence(captured) );
        dispatch( disableError("incidence") );
        break;
      case "riskToggle":
        const choice = e.target.value;
        const results = { cancer: cancerHash, choice };
        dispatch( showCustomRisk(results) );
        dispatch( disableError("risks") );
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
    dispatch( checkSelect(captured) );
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
          <Form>
            <h3>Cancer: <span className="display-4">{ selected.name }</span></h3>
            <Row>
              <Col>
        {/* INCIDENCE */}
                <Card>
                  <Card.Body>
                    <Card.Title>Incidence</Card.Title>
                    <Form.Group>
                      <Form.Text><p>{ stepTerms.step2.instructions.incidence }</p></Form.Text>
                        <CancerIncidence
                          type={ settingType }
                          predictedIncs={ predictedIncs }
                          handleIncidence={ handleEvent }
                          saved={ user[cancerHash].incidence.custom }
                          cancer={ cancerHash }
                        >
                          Modeled incidence: { predictedIncs && predictedIncs.total.toFixed() }
                        </CancerIncidence>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                <Card.Body>
                <Card.Title>Risks and regimens</Card.Title>
                <Form.Group>
                  <Form.Text>
                    { text.step2.instructions.risksRegimens.map( (paragraph, i) => {
                      return (
                        <p key={ i } dangerouslySetInnerHTML={ { __html: paragraph } } />
                      );
                    })}
                  </Form.Text>

        {/* RISK AND REGIMENS */}
                  <ButtonGroup toggle> 
                  { Object.values(globalTerms.valueOverride).map( (value, i) => {
                    return (
                      <ToggleButton 
                        key={ i }
                        disabled={ selected.risks.length === 1 }
                        checked={ value === 'custom' ? user[cancerHash].showCustomRisk : !user[cancerHash].showCustomRisk }
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
                        { 
                          settingType === "Single institution" ?
                            <th>Regimens</th>
                          :
                          <>
                            <th>Level 1 regimen</th>
                            <th>Level 2 regimen</th>
                            <th>Level 3 regimen</th>
                          </>
                        }
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
                              num={ i }
                              validation={ 
                                { 
                                  sum: validation.riskSumError, 
                                  risk: validation.risks[rsHash] || false 
                                } 
                              }
                              custom={ user[cancerHash].showCustomRisk } 
                              riskStrat={ rs } 
                              setRiskPercentage={ handleEvent } 
                              saved={ user[cancerHash].hasCustomRisk && user[cancerHash].risks[rsHash].percentage }
                            />
                          </td>

                        {/* Regimens selection */}
                          { 
                            settingType === "Single institution" ?
                              <td>
                                { rs.regimens.length === 1 ? rs.regimens[0] :
                                <Form.Group> 
                                  <Form.Control 
                                    as="select" 
                                    name={ rsHash }
                                    onChange={ (e) => { captureRegimen(e) } }
                                    isInvalid={ validation.regimens[rsHash] || false }
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
                                  <Form.Control.Feedback type="invalid">
                                    You must select a regimen
                                  </Form.Control.Feedback>
                                </Form.Group>
                                }
                              </td>
                            :
                            <>
                              { rs.inst_levels.map( (level, k) => {
                                return <td key={ k }>{ level }</td>;
                              })}
                            </>
                            }
                        </tr>
                      );
                    })}{/* End Risks map */}
                    </tbody>
                  </Table>
                </Form.Group>
                </Card.Body>
                </Card>
              </Col>
            </Row>
          </Form>
    </div>
  );
}

export default CancerInputs;
