import {
  setting,
  regimens,
  prices,
  user
} from '../fixtures/cost';

import CostModel from '../CostModel';

const cm = new CostModel();

test('Should load all parameters correctly', () => {
  const result = cm.loadAllCostData(setting, user, regimens, prices);
  expect(result).toBeTruthy();
});

test('Should return false if no incidence is present in user object', () => {
  const userCopy = JSON.parse( JSON.stringify(user));
  delete userCopy.apl.incidence;
  const result = cm.loadAllCostData(setting, userCopy, regimens, prices);
  expect(result).toBeFalsy();
});

describe('Total cost per cancer', () => {
  let tcpc;

  beforeEach( () => {
    tcpc = cm.getTotalCostPerCancer();
  });

  test('should be a valid object', () => {
    expect(typeof tcpc === "object").toBeTruthy();
  });

  test('should have apl, totals, drugs props with data in them', () => {
    console.log(tcpc);
    expect(tcpc.hasOwnProperty('apl')).toBeTruthy();
    expect(tcpc.apl.drugs.length).toEqual(4);
    expect(tcpc.apl.totals.hasOwnProperty('override')).toBeTruthy();
    //const keysToCompare = ['name', 'totals', 'drugs'];
    //expect(Object.keys(tcpc.apl).every( ()
  });
});

