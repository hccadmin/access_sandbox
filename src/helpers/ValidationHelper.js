import { makeHashKey } from '../helpers/utilities';

class ValidationHelper {

  /**
   * Errors object
   *
   * prop hasErrors: bool
   * prop incidence: bool
   * prop riskSumError: bool
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
      //console.log(objWithError);
      if (!objWithError) {
        this.resetAllErrors();
      }
      else {
        this.#errors.hasErrors = true;

  // Check if there is an incidence number
        if (!this.hasIncidence(objWithError) ) {
          this.#errors.incidence = true;
        }
        
        if (!this.hasFilledRisksRegimens(objWithError) ) {
          const errorRisks = objWithError.risks;
          //console.log(errorRisks);
          const filledRisks = this.numberOf('percentage', errorRisks, false, true);
          Object.keys(errorRisks).forEach( (risk) => {
            this.setError('risks', risk, filledRisks);
          });
        }
        else {
          //console.log(objWithError);
          if (objWithError.hasCustomRisk) {
            const is100 = this.sumTo100(objWithError);
            this.#errors.riskSumError = !is100;
          }
        } // if !hasFilledRisksAndRegimens
      } // if objWithErrors
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
    const errProps = [];
    const filtered = keys.filter( (key) => {
      const hasNoErrors = this.hasIncidence(data[key]) && this.hasFilledRisksRegimens(data[key]) && this.sumTo100(data[key]);
         // && this.sumTo100(data[key])
      return !hasNoErrors;
    });
    /*
    */
    //console.log(key);
    return filtered.length > 0 && data[filtered];
  }


  hasValues() {
    const data = this.#data;
    const arrKey = Object.keys(data).filter( (key) => {
      //console.log(key, this.hasIncidence(data[key]));
      return (this.hasIncidence(data[key])) || (this.hasCustomRiskOrRegimens(data[key]) );
    });
    return arrKey;
  }

  hasCustomRiskOrRegimens(obj) {
    return obj.hasCustomRisk || this.numberOf('regimen', obj.risks, true).length > 0;
  }

  isFixedRegimen(key, value) {
    return key === 'regimen' && !value.hasMultipleRegimens;
  }

  sumTo100(cancer) {
    let sum = 0;
    Object.keys(cancer.risks).forEach( (risk) => {
      //console.log(cancer.risks[risk].percentage);
      sum += cancer.risks[risk].percentage;
    });
    return sum === 100;
  }

  hasFilledRisksRegimens(cancer) {
    return ( this.numberOf('percentage', cancer.risks).length === Object.keys(cancer.risks).length ) &&
        ( this.numberOf('regimen', cancer.risks).length === Object.keys(cancer.risks).length );
  }

  // Need to flip the return value to get objs that do NOT all values filled
  numberOf(key, values, checkIfAllFieldsEmpty=false, reverseFilter=false) {
    const filled = Object.keys(values).filter( (value) => {
      let evaluation;
      //console.log(key, checkIfAllFieldsEmpty);
      const toEvaluate = values[value][key];
      if ( this.isFixedRegimen(key, values[value]) ) {
        evaluation = !checkIfAllFieldsEmpty;
      }
      else {
        evaluation = isNaN(toEvaluate) ? toEvaluate.length > 0 : toEvaluate > 0;
        evaluation = reverseFilter ? !evaluation : evaluation;
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
