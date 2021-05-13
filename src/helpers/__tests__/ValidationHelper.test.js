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

let cancersTest = {};

const vh = new ValidationHelper(initialState);

beforeEach( () => {
  cancersTest = JSON.parse( JSON.stringify(cancers));
});

test('Should not have errors if there are no user inputs', () => {
  const errors = vh.validateCancerInputs(cancersTest);
  expect(errors.hasErrors).toBeFalsy();
});

test('Should create an error if not all incidence fields filled out', () => {
  cancersTest.all.incidence = 12;
  const errors = vh.validateCancerInputs(cancersTest);
  expect(errors.hasErrors).toBeTruthy();
});

describe('Risk strat user override', () => {

  test('Should create error if not all risk percentage fields filled out', () => {
    cancersTest.apl.hasCustomRisk = true;
    cancersTest.apl.risks.aplstandardrisk = {
      hasMultipleRegimens: false,
      percentage: 20,
      regimen: "test"
    };
    const errors = vh.validateCancerInputs(cancersTest);

    // Confirm there are errors
    expect(errors.hasErrors).toBeTruthy();

    // There should be one error if only 1 out of 2 risk percentages was completed
    const numErrors = Object.values(errors.risks).filter( val => val === true );
    expect(numErrors.length).toBe(1);
    /*
    */
  });

  test('Should have no errors if all risk percentage fields filled out', () => {
    // First, fill every cancersTest field with a valid value
    Object.keys(cancersTest).forEach( (cancer, i) => {
      cancersTest[cancer].hasCustomRisk = true;
      cancersTest[cancer].incidence = 20;
      Object.keys(cancersTest[cancer].risks).forEach( (risk) => {
        cancersTest[cancer].risks[risk] = {
          hasMultipleRegimens: false,
          percentage: i === 0 ? 33.33 : 50,
          regimen: "test"
        };
      });
    });
    const errors = vh.validateCancerInputs(cancersTest);

    // Confirm there are no errors
    expect(errors.hasErrors).toBeFalsy();
  });

  test('Should create an error if risk percentages to not add up to 100%', () => {
    //Implementation goes here
  });
});
