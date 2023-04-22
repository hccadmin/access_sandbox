import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RiskStratToggle from './RiskStratToggle';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ForecastToggle from './ForecastToggle';
import MarkupJSON from '../shared_components/MarkupJSON';
import HelpTextModal from '../shared_components/HelpTextModal';
import CancerIncidence from './CancerIncidence';
import { makeHashKey, sentenceCase } from '../helpers/utilities';
import globalTerms from '../text/global';
import { disableError, checkSelect } from '../state/slices/validationSlice';
import step2text from './text/step2';
import { useRegimenRef } from '../hooks';
import {
  setIncidence, 
  setRiskStrat, 
  setPercentage, 
  showCustomRisk, 
  setRegimen 
} from '../state/slices/cancerSelectionsSlice';

const CancerInputs = ({ selected, settingType, settingHash, predictedIncs }) => {

  const { REACT_APP_WILMS_TUMOR } = process.env;

  const cancerHash = makeHashKey(selected.name);
  const dispatch = useDispatch();

  const cancerSelections = useSelector( (state) => {
    return state.cancerSelections;
  });

  const validation = useSelector( (state) => {
    return state.validation;
  });

  const ref = useRegimenRef(selected.ref);



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
    // When the cancerSelections starts typing, check if this cancer has only 1 reg per
    // risk strat. If so, assign reg to risks in cancerSelections state
    const singleRegArr = loadSingleRegs(selected.risks);
    if (singleRegArr && cancerSelections.cancers[cancerHash] ) {
      singleRegArr.forEach( (sra) => {
        saveRegimen(sra);
      });
    }
  }

  const loadSingleRegs = (riskStrats) => {
    const singleRegArr = [];
    let rsHash
    riskStrats.forEach( (rs) => {
      if (selected.name === REACT_APP_WILMS_TUMOR) {
        Object.keys(rs.phases).forEach( (rsPhase) => {
          rsHash = makeHashKey(cancerHash, rsPhase, rs.name);
          singleRegArr.push( getSingleRegObj(cancerHash, rs.phases[rsPhase], rsHash) );
        });
      }
      else if (rs.regimens.length === 1) {
        rsHash = makeHashKey(cancerHash, rs.name);
        singleRegArr.push( getSingleRegObj(cancerHash, rs, rsHash) );
      }
      else {}
    });
    return (singleRegArr.length > 0) && singleRegArr;
  }

  const getSingleRegObj = (cancerHash, rs, rsHash) => {
    return {
      cancer: cancerHash,
      riskStrat: rsHash,
      // Not sure I need this anymore
      // percentage: rs.percent_total,
      regimen: rs.regimens[0] 
    }
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

  useEffect( () => {
    console.log(validation.hasErrors)
  }, [validation.hasErrors]);

  return (
    <div role="cancerSelections-inputs" className="cancer-inputs">
          <Form>
            <h1>{ selected.name }</h1>
            <Row>
              <Col>
              <Alert variant="danger" show={ validation.hasErrors }>
                There are errors on the page. Please scroll down to correct the errors in order to proceed.
              </Alert>
        {/* INCIDENCE */}
                <Card>
                  <Card.Body>
                    <Card.Title>Incidence</Card.Title>
                    <CancerIncidence
                      type={ settingType }
                      content={ step2text.incidence[settingHash] }
                      predictedIncs={ predictedIncs }
                      handleIncidence={ handleEvent }
                      saved={ cancerSelections.cancers[cancerHash].incidence.custom }
                      cancer={ cancerHash }
                    >
                      Modeled incidence: { predictedIncs && predictedIncs.total.toFixed() }
                    </CancerIncidence>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                <Card.Body>
                <Card.Title>Risk stratification and chemotherapy regimens</Card.Title>
                <Form.Group>
                  <p>{ step2text.risks_regs.intro }</p>
                  { Array.isArray(step2text.risks_regs[settingHash].notes) ?
                    <ul>
                      <MarkupJSON multiline="true" tag="li">
                        { step2text.risks_regs[settingHash].notes }
                      </MarkupJSON>
                    </ul>
                  :
                    <p>{ step2text.risks_regs[settingHash].notes }</p>
                  }
                  <HelpTextModal
                    modalTitle="Risks and regimens"
                    modalContent={ step2text.risks_regs[settingHash].modal }
                  >Learn more about risks and regimens
                  </HelpTextModal>



        {/* REGIMEN REFERENCE BUTTON */}
                <p>
                  { ref ?
                    <a target="_blank" className="btn btn-primary" href={ ref }>View regimens for { selected.name }</a>
                    : <strong>There are no regimen references for this cancer</strong>
                  }
                </p>

        {/* RISK AND REGIMENS */}
                  <ButtonGroup toggle> 
                  { Object.values(globalTerms.valueOverride).map( (value, i) => {
                    return (
                      <ToggleButton 
                        key={ i }
                        disabled={ selected.risks.length === 1 }
                        checked={ value === 'custom' ? cancerSelections.cancers[cancerHash].showCustomRisk : !cancerSelections.cancers[cancerHash].showCustomRisk }
                        type="radio" 
                        value={ value }
                        name="riskToggle"
                        onChange={ handleEvent }
                      >{ sentenceCase(value) }
                      </ToggleButton>
                    );
                  })}
                  </ButtonGroup>
                  <div className="forecast-table">
                  <Table striped bordered>
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
                      const currCancer = cancerSelections.cancers[cancerHash];
                      const rsHash = makeHashKey(cancerHash, rs.name);
                      return (
                        <tr key={ i }>
                          <td>{ rs.name || "Risk stratification" }</td>

          {/* RISK STRAT % OVERRIDE */}
                          <td>
                            <RiskStratToggle 
                              num={ i }
                              validation={ 
                                { 
                                  sum: validation.riskSumError, 
                                  risk: validation.risks[rsHash] || false 
                                } 
                              }
                              custom={ cancerSelections.cancers[cancerHash].showCustomRisk } 
                              riskStrat={ rs } 
                              setRiskPercentage={ handleEvent } 
                              saved={ cancerSelections.cancers[cancerHash].hasCustomRisk && cancerSelections.cancers[cancerHash].risks[rsHash].percentage }
                            />
                          </td>

          {/* REGIMEN SELECTION */}
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
                  { selected.name === REACT_APP_WILMS_TUMOR ? <p>{ step2text.risks_regs.wilms_reg_text }</p> : "" }
                  </div>
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
