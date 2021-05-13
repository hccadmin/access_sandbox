import ValidationHelper from '../ValidationHelper';
import cancers from '../../fixtures/validation/cancers';

/**
 * Replicating initialState from validationSlice
 * which is used as the constructor param
 * for ValidationHelper
 */
const initialState = {
  hasErrors: false,
  incidence: false,
  risks: {},
  regimens: {}
}

const vh = new ValidationHelper(initialState);
const cancersTest = JSON.parse( JSON.stringify(cancers));

test('Should not have errors if there are no user inputs', () => {
  const errors = vh.validateCancerInputs(cancersTest);
  expect(errors.hasErrors).toBeFalsy();
});

describe('Risk strat user override', () => {

  test('Should create error if not all risk percentage fields filled out', () => {
    cancersTest.apl.hasCustomRisk = true;
    cancersTest.apl.risks.aplstandardrisk = {
      hasMultipleRegimens: false,
      percentage: 20,
      regimen: "test"
    };
    let errors = vh.validateCancerInputs(cancersTest);

    // Confirm there are errors
    expect(errors.hasErrors).toBeTruthy();

    // There should be one error if only 1 out of 2 risk percentages was completed
    const numErrors = Object.values(errors.risks).filter( val => val === true );
    expect(numErrors.length).toBe(1);
    /*
    */
  });
});
