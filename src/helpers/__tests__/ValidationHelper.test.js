import ValidationHelper from '../ValidationHelper';
import { cancersEmpty, cancersFull } from '../../fixtures/validation/cancers';

/**
 * Replicating initialState from validationSlice
 * which is used as the constructor param
 * for ValidationHelper
 */
const initialState = {
  hasErrors: false,
  incidence: false,
  riskSumError: false,
  risks: {},
  regimens: {}
}

let cancersEmptyTest, cancersFullTest = {};

const vh = new ValidationHelper(initialState);

beforeEach( () => {
  cancersEmptyTest = JSON.parse( JSON.stringify(cancersEmpty));
  cancersFullTest = JSON.parse( JSON.stringify(cancersFull));
});

afterEach( () => {
  vh.resetAllErrors();
});

/*
*/
test('Should not have errors if there are no user inputs', () => {
  const errors = vh.validateCancerInputs(cancersEmptyTest);
  expect(errors.hasErrors).toBeFalsy();
});

test('Should not have errors if all user inputs filled out', () => {
  const errors = vh.validateCancerInputs(cancersFullTest);

  // Confirm there are no errors
  expect(errors.hasErrors).toBeFalsy();
});

// Cancer incidence
test('Should create an error if not all incidence fields filled out', () => {
  cancersFullTest.all.incidence = "";
  const errors = vh.validateCancerInputs(cancersFullTest);
  //console.log(errors);
  expect(errors.incidence).toBeTruthy();
});


// Cancer regimens
describe('Regimens', () => {
/*
  */
  test('Should show no errors if cancer like APL does NOT have multiple regimens and regimen fields left blank', () => {
    const risks = cancersFullTest.apl.risks;
    Object.keys(risks).forEach( (risk) => {
      risks[risk].hasMultipleRegimens = false;
      risks[risk].regimen = "";
    });
    const errors = vh.validateCancerInputs(cancersFullTest);
    expect(errors.hasErrors).toBeFalsy();

    // There should be one error if only 1 out of 2 risk percentages was completed
  });

  test('Should show 2 errors if cancer like ALL DOES have multiple regimens and 2 regimen fields left blank', () => {
    const risks = cancersFullTest.all.risks;
    const regimens = ["ALL Low Risk Regimen", "", ""];
    Object.keys(risks).forEach( (risk, i) => {
      risks[risk].hasMultipleRegimens = true;
      risks[risk].regimen = regimens[i];
    });
    //console.log(cancersFullTest.all.risks);
    const errors = vh.validateCancerInputs(cancersFullTest);
    const numErrors = Object.values(errors.regimens).filter( val => val === true );
    expect(numErrors.length).toBe(2);

  });
});

describe('Risk percentage user override', () => {
/*
*/
  test('Should create error if ALL risk percentages filled but APL risk percentages left blank', () => {
    cancersFullTest.apl.hasCustomRisk = true;
    cancersFullTest.apl.risks.aplstandardrisk.percentage = "";
    const errors = vh.validateCancerInputs(cancersFullTest);

    // Confirm there are errors
    expect(errors.hasErrors).toBeTruthy();

    // There should be one error if only 1 out of 2 risk percentages was completed
    const numErrors = Object.values(errors.risks).filter( val => val === true );
    expect(numErrors.length).toBe(1);
  });

  test('Should create an error if user input risk percentages do not add up to 100%', () => {
    //console.log(cancersFullTest.all);
    cancersFullTest.apl.hasCustomRisk = true;
    cancersFullTest.apl.risks.aplhighrisk.percentage = 20;
    const errors = vh.validateCancerInputs(cancersFullTest);
    expect(errors.riskSumError).toBeTruthy();
  });
});
