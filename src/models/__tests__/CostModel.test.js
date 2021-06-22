import {
  setting,
  regimens,
  prices,
  user
} from '../../fixtures/cost';
import { makeHashKey } from '../../helpers/utilities';

/**
 * Fixtures data:
 *
 * SETTING
 * Afganistan
 * 2015
 *
 * CANCERS
 * APL
 * Incidence: 11
 *
 * PRICES
 * Consolidated
 * ATRA override: $9.30
 */

import CostModel from '../CostModel';

const cm = new CostModel();

test('Should load all parameters correctly for Single Institution', () => {
  user.setting = "Single institution";
  const settingHash = makeHashKey(user.setting);
  const result = cm.loadAllCostData(setting, user[settingHash], regimens, prices);
  expect(result).toBeTruthy();
});

test('Should load all parameters correctly for Health System', () => {
  user.setting = "Health system";
  const settingHash = makeHashKey(user.setting);
  expect( Object.keys(user[settingHash]).length ).toEqual(18);
  //const result = cm.loadAllCostData(setting, user[settingHash], regimens, prices);
  //expect(result).toBeTruthy();
});

test('Should return false if no incidence is present in user object', () => {
  user.setting = "Single institution";
  const settingHash = makeHashKey(user.setting);
  const userCopy = JSON.parse( JSON.stringify(user[settingHash]));
  delete userCopy.apl.incidence.custom;
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
    expect(tcpc.hasOwnProperty('apl')).toBeTruthy();
    expect(tcpc.apl.drugs.length).toEqual(4);
    expect(tcpc.apl.totals.hasOwnProperty('override')).toBeTruthy();
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

