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

test('Should create an error if not all incidence fields filled out', () => {
  cancersFullTest.all.incidence = "";
  const errors = vh.validateCancerInputs(cancersFullTest);
  //console.log(errors);
  expect(errors.incidence).toBeTruthy();
});

describe('Risk strat user override', () => {

/*
  */
  test('Should have no errors if all risk percentage fields filled out', () => {
    // First, fill every cancersTest field with a valid value

    const errors = vh.validateCancerInputs(cancersFullTest);
    //console.log(cancersFullTest.all.risks);

    // Confirm there are no errors
    expect(errors.hasErrors).toBeFalsy();
  });

  test('Should create error if ALL risk percentages filled but APL risk percentages left blank', () => {
    cancersFullTest.apl.risks.aplstandardrisk.percentage = "";
    cancersFullTest.apl.risks.aplhighrisk.percentage = "";
    const errors = vh.validateCancerInputs(cancersFullTest);

    // Confirm there are errors
    expect(errors.hasErrors).toBeTruthy();

    // There should be one error if only 1 out of 2 risk percentages was completed
    const numErrors = Object.values(errors.risks).filter( val => val === true );
    expect(numErrors.length).toBe(2);
  });

  test('Should create an error if user input risk percentages do not add up to 100%', () => {
    //console.log(cancersFullTest.all);
    cancersFullTest.apl.hasCustomRisk = true;
    cancersFullTest.apl.risks.aplhighrisk.percentage = 20;
    const errors = vh.validateCancerInputs(cancersFullTest);
    expect(errors.riskSumError).toBeTruthy();
  });
/*
*/
});
