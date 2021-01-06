import { Regimen, RiskStrat, Cancer } from '../../models';

let reg, rs, cancer;

beforeEach( () => {
  reg = new Regimen('Test regimen');
  rs = new RiskStrat('Test risk strat', .25);
  cancer = new Cancer('Test cancer');
});

it('tests the name property of the parent class for each child class', () => {
  expect(reg.name).toMatch('Test regimen');
  expect(rs.name).toMatch('Test risk strat');
  expect(cancer.name).toMatch('Test cancer');
});

it('tests the percentage prop of the RiskStrat class', () => {
  expect(rs.percentage).toEqual(.25);
});

it('tests the Risk Strat class with an array of integers', () => {
  const arr = [1, 2, 3, 4];
  rs.setContents(arr);
  const contents = rs.getContents();
  expect(contents.length).toEqual(4);
  expect(contents).toContain(2);
});

it('tests the Cancer class with an array of Regimens', () => {
  let reg1, reg2, reg3;
  reg1 = new Regimen('Regimen 1');
  reg2 = new Regimen('Regimen 2');
  reg3 = new Regimen('Regimen 3');
  cancer.setContents([reg1, reg2, reg3]);
  const contents = cancer.getContents();
  expect(contents.length).toEqual(3);
  contents.forEach( (obj, i) => {
    let num = i + 1;
    expect(obj.name).toMatch(`Regimen ${num}`);
  });
});

