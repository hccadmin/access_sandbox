import { makeHashKey } from '../helpers/utilities';

class ValidationHelper {

  /**
   * Errors object
   *
   * prop hasErrors: bool
   * prop incidence: bool
   * prop risks: obj {
   *   riskHash: bool
   * prop regimens: obj {
   *   riskHash: bool
   */
  #errors = {};


  /**
   * Data object
   *
   * prop cancers: obj {
   *   name: string,
   *   incidence: number
   *   showCustomRisk: bool,
   *   hasCustomRisk: bool,
   *   risks: obj
   *     riskHash: obj
   *       hasMultipleRegimens: bool,
   *       percentage: number,
   *       regimen: string
   */
  #data = {};

  constructor(defaults) {
    this.#errors = { ...defaults };
  }

  validateCancerInputs(toValidate) {
    this.#data = { ...toValidate };
    const keys = this.hasValues();
    if (keys.length > 0) {
      const objWithError = this.findObjWithErrors(keys);
      if (objWithError) {
        console.log(objWithError);
        this.#errors.hasErrors = true;

  // Check if there is an incidence number
        if (!this.hasIncidence(objWithError)) {
          this.#errors.incidence = true;
        }
        const errorRisks = objWithError.risks;
        //const emptyRegs = this.checkForEmptyRegimens(risks);
        const filledRegimens = this.numberOf('regimen', errorRisks);
        const filledRisks = this.numberOf('percentage', errorRisks);
        Object.keys(errorRisks).forEach( (risk) => {
          this.setError('risks', risk, filledRisks);
          /*
          if (filledRegimens.length > 0) {
            if (filledRegimens.includes(risk)) {
              this.#errors.regimens[risk] = false;
            }
          }
          else {
            this.#errors.regimens[risk] = true;
          }
          if (filledRisks.length > 0) {
            if (filledRisks.includes(risk)) {
              this.#errors.risks[risk] = false;
            }
          }
          else {
            this.#errors.risks[risk] = true;
          }
          */
        });
      } // if objWithErrors
      else {
        this.resetAllErrors();
      }
    } // if hasValues
    else {
      this.resetAllErrors();
    }
    //console.log(this.#data, this.#errors);
    return this.#errors;
  }

  setError(type, errorKey, errorArr) {
    if (errorArr.length === 0) {
      return;
    }
    const result = errorArr.includes(errorKey);
    this.#errors[type][errorKey] = result;
  }

  checkForEmptyRegimens(risks) {
    return Object.keys(risks).filter( (risk) => {
      return (risks[risk].regimen === 0) || (risks[risk].regimen.length === 0);
    });
  }

  resetAllErrors() {
    this.#errors.hasErrors = false;
    this.#errors.incidence = false;
    Object.keys(this.#errors.regimens).forEach( (key) => {
      this.#errors.regimens[key] = false;
      this.#errors.risks[key] = false;
    });
  }

  resetStateErrors(newState) {
    this.#errors = { ...newState }
  }

  hasIncidence(obj) {
    return obj.hasOwnProperty("incidence") && String(obj.incidence).length > 1;
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
      const hasNoErrors = this.hasIncidence(data[key]) &&
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
      return (this.hasIncidence(data[key])) || (this.hasCustomRiskOrRegimens(data[key]) );
    });
    return arrKey;
  }

  hasCustomRiskOrRegimens(obj) {
    return obj.hasCustomRisk || this.numberOf('regimen', obj.risks).length > 0;
  }

  numberOf(key, values) {
    const filled = Object.keys(values).filter( (value) => {
      let evaluation;
      const toEvaluate = values[value][key];
      if (key === 'regimen' && !values[value].hasMultipleRegimens) {
        evaluation = true;
      }
      else {
        evaluation = isNaN(toEvaluate) ? toEvaluate.length > 0 : toEvaluate > 0;
      }
      return evaluation;
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

}

export default ValidationHelper;
