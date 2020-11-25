const fs = require('fs');
const cancers = require("./cancers_template.json");


/*
*/
let maps = [];

cancers.forEach( (cancer, i) => {
  const id = generateId("cancer", cancer.cancer);
  maps.push({ id: id, name: cancer.cancer });
  cancer.risk_strats.forEach( (risk, j) => {
    if (!maps[i].hasOwnProperty("risk_strats")) {
      maps[i].risk_strats = [];
    }
    if(risk.strat_name.length === 0) risk.strat_name = "strat";
    const id = generateId("risk", risk.strat_name);
    maps[i].risk_strats.push({ id: id, name: risk.strat_name });
    risk.regimens.forEach( (regimen) => {
      if (!maps[i]["risk_strats"][j].hasOwnProperty("regimens")) {
        maps[i]["risk_strats"][j].regimens = [];
      }
      if(regimen.length === 0) risk.strat_name = "reg";
      const id = generateId("regimen", regimen);
      maps[i]["risk_strats"][j].regimens.push({ id: id, name: regimen });
    });
  });
});

console.log(maps);
/*
function mappings(keys, vals) {
  if 
  return arr.map( (obj) => {
    const keys = Object.keys(obj);
    const vals = Object.values(obj);
    return vals.map( (val, i) => {
      if (Array.isArray(val)) {
        return mappings(val);
      }
      else {
        const id = generateId(keys[i], val);
        return { id: id, name: val };
      }
    });
  });
}
*/



function generateId(prefix, element) {
  const pre = prefix.slice(0, 3).toUpperCase();
  const abbrv = element.slice(0, 3).toUpperCase();
  const random = Math.floor(Math.random() * 1000000000);
  return pre + abbrv + random;
}
