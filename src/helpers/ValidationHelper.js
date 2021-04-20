import { makeHashKey, to4decimals, sortObjects } from '../helpers/utilities';

class ValidationHelper {
  #errors = {};
  #data = {};

  constructor(defaults) {
    this.#errors = { ...defaults };
  }

  validateCancerInputs(toValidate) {
    this.#data = Object.values(toValidate).slice(1);
    //console.log(this.hasIncidence(), this.#data);
    const key = this.hasValues();
    if (key.length > 0) {
      this.#errors.hasErrors = true;
      const objWithError = this.#data[key];
      if (!this.hasIncidence(objWithError)) {
        if (this.hasCustomRiskOrRegimens(objWithError) ) {
          console.log("No incidence but risk/reg");
          this.#errors.incidence = true;
        }
      }
      else {
        const risks = objWithError.risks;
        const emptyRegs = this.checkForEmptyRegimens(risks);
        //console.log(emptyRegs);
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

  hasValues() {
    const data = this.#data;
    const arrKey = Object.keys(data).filter( (key) => {
      return (data[key].hasOwnProperty("incidence")) || (this.hasCustomRiskOrRegimens(data[key]) );
    });
    return arrKey;
  }

  hasCustomRiskOrRegimens(obj) {
    return obj.hasCustomRisk || this.hasRegimens(obj.risks);
  }

  hasRegimens(risks) {
    const filled = Object.keys(risks).filter( (risk) => {
      return risks[risk].regimen.length > 0;
    });
    //console.log(filled.length > 0);
    return filled.length > 0;
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
