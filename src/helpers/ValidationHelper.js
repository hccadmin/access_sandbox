import { makeHashKey, to4decimals, sortObjects } from '../helpers/utilities';

class ValidationHelper {
  #errors = {};
  #data = {};

  constructor(defaults) {
    this.#errors = { ...defaults };
  }

  validateCancerInputs(toValidate) {
    this.#data = Object.values(toValidate).pop();
    let incidenceError = [];
    if (!this.#data.hasOwnProperty("incidence")) {
      incidenceError = this.checkRisksRegsForValues();
    }
    //console.log(props);
    /*
    */
    return incidenceError.length > 0;
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
}

export default ValidationHelper;
