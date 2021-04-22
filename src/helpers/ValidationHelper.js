import { makeHashKey, to4decimals, sortObjects } from '../helpers/utilities';

class ValidationHelper {
  #errors = {};
  #data = {};

  constructor(defaults) {
    this.#errors = { ...defaults };
  }

  validateCancerInputs(toValidate) {
    this.#data = toValidate;
    //console.log(this.#data);
    //console.log(this.hasIncidence(), this.#data);
    const keys = this.hasValues();
    if (keys.length > 0) {
      const objWithError = this.findObjWithErrors(keys);
      if (objWithError) {
        console.log(objWithError);
        this.#errors.hasErrors = true;
        if (!this.hasIncidence(objWithError)) {
          this.#errors.incidence = true;
          /*
          if (this.hasCustomRiskOrRegimens(objWithError) ) {
            console.log("No incidence but risk/reg");
          }
          */
        }
        //console.log(emptyRegs);
        const risks = objWithError.risks;
        const emptyRegs = this.checkForEmptyRegimens(risks);
        if (emptyRegs.length > 0) {
          emptyRegs.forEach( (reg) => {
            this.#errors.regimens[reg] = true;
          });
          //console.log(this.#errors);
        }
      }
    }
    return this.#errors;
  }

  checkForEmptyRegimens(risks) {
    return Object.keys(risks).filter( (risk) => {
      return (risks[risk].regimen === 0) || (risks[risk].regimen.length === 0);
    });
  }

  resetErrors(newState) {
    this.#errors = { ...newState }
  }

  hasIncidence(obj) {
    return obj.hasOwnProperty("incidence");
  }

  getLastArrItem(items) {
    return items.length > 1 ? items.slice(1) : items;
  }

  findObjWithErrors(keys) {
    const data = JSON.parse( JSON.stringify(this.#data) );
    const key = keys.filter( (key) => {
      //console.log(data[key].hasOwnProperty("incidence"));
      //console.log(this.numberOf('percentage', data[key].risks).length);
      //console.log(Object.keys(data[key].risks).length);
      const hasNoErrors = data[key].hasOwnProperty("incidence") &&
        this.numberOf('percentage', data[key].risks).length === Object.keys(data[key].risks).length &&
        this.numberOf('regimen', data[key].risks).length === Object.keys(data[key].risks).length;
  // Need to flip the return value to get objs that do NOT all values filled
      return !hasNoErrors;
    });
    /*
    */
    //console.log(key);
    return key.length > 0 && data[key];
  }


  hasValues() {
    const data = this.#data;
    const arrKey = Object.keys(data).filter( (key) => {
      return (data[key].hasOwnProperty("incidence")) || (this.hasCustomRiskOrRegimens(data[key]) );
    });
    return arrKey;
    //return arrKey.length > 0;
  }

  hasCustomRiskOrRegimens(obj) {
    return obj.hasCustomRisk || this.numberOf('regimen', obj.risks).length > 0;
  }

  numberOf(key, values) {
    let regimenFlag = true;
    const filled = Object.keys(values).filter( (value) => {
      if (key === 'regimen') {
        regimenFlag = values[value].hasMultipleRegimens;
      }
      //console.log(key, values[value]);
      const toEvaluate = values[value][key];
      const evaluation = isNaN(toEvaluate) ? toEvaluate.length > 0 : toEvaluate > 0;
      return regimenFlag && evaluation;
    });
    //console.log(filled.length > 0);
    return filled;
  }

  checkRisksRegsForValues() {
    /*
    */
    const risks = this.#data.risks;
    const values = Object.keys(risks).filter( (riskKey) => {
      return (risks[riskKey].regimen.length > 0) ||
        (this.#data.hasCustomRisk && risks[riskKey].percentage.length > 0);
    });
    return values;
  }

  getRiskRegimenErrors(values) {
  }
}

export default ValidationHelper;
