import {
  setting,
  regimens,
  prices,
  user
} from '../fixtures/cost';

// override: ATRA, 9.3

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
    //console.log(tcpc);
    expect(tcpc.hasOwnProperty('apl')).toBeTruthy();
    expect(tcpc.apl.drugs.length).toEqual(4);
    expect(tcpc.apl.totals.hasOwnProperty('override')).toBeTruthy();
    //const keysToCompare = ['name', 'totals', 'drugs'];
    //expect(Object.keys(tcpc.apl).every( ()
  });

  test('should show an override total of 12276', () => {
    expect(tcpc.apl.totals.override).toEqual(12276);
  });

  test('should show a med total of 141754.45', () => {
    expect(tcpc.apl.totals.med.toFixed(2)).toEqual("141754.45");
  });

  test('should show a medAndUser total of 140988.85', () => {
    expect(tcpc.apl.totals.medAndUser.toFixed(2)).toEqual("140988.85");
  });
});

