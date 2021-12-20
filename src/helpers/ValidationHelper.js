import { makeHashKey } from '../helpers/utilities';

class ValidationHelper {

  /**
   * Errors object
   *
   * prop hasErrors: bool
   * prop incidence: bool
   * prop riskSumError: bool
   * prop levelSumError: bool
   * prop risks: obj {
   *   riskHash: bool
   * prop regimens: obj {
   *   riskHash: bool
   */
  #defaults = {};
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
    this.#defaults = { ...defaults };
    this.#errors = { ...defaults };
  }
  

  validateCancerInputs(toValidate) {
    this.#data = { ...toValidate };
    //console.log(this.#errors, this.#data);
    const keys = this.hasValues();
    if (keys.length > 0) {
      const objWithError = this.findObjWithErrors(keys);
      if (!objWithError) {
        this.resetAllErrors();
      }
      else {
        this.#errors.hasErrors = true;

  // Check if there is an incidence number
        if (!this.hasIncidence(objWithError) ) {
          this.#errors.incidence = true;
        }
        if ( (!this.hasEmptyRisks(objWithError) && !this.hasFilledRisks(objWithError) ) || !this.hasFilledRegimens(objWithError) ) {
          //console.log(objWithError, this.#errors);
          const errorRisks = objWithError.risks;
          const filledRisks = this.numberOf('percentage', errorRisks, false, true);
          const filledRegimens = this.numberOf('regimen', errorRisks, false, true);
          Object.keys(errorRisks).forEach( (risk) => {
            this.setError('risks', risk, filledRisks);
            this.setError('regimens', risk, filledRegimens);
          });
        }
        else {
          //console.log(objWithError, this.#errors);
          //console.log(objWithError);
          if (objWithError.hasCustomRisk) {
            const is100 = this.validatePercentageTotal(objWithError);
            this.#errors.riskSumError = !is100;
          }
        } // if !hasFilledRisksAndRegimens
      } // if objWithErrors
    } // if hasValues
    else {
      this.resetAllErrors();
    }
    //console.log(this.#data, this.#errors);
    const allErrors = JSON.parse( JSON.stringify(this.#errors) );
    this.#errors = JSON.parse( JSON.stringify(this.#defaults) );
    //console.log(allErrors);
    return allErrors;
  }

  validateLevelSum(toValidate) {
    const result = this.validatePercentageTotal(toValidate);
    this.#errors.levelSumError = !result;
    return this.#errors.levelSumError;
  }

  validatePercentageTotal(toValidate) {
    let numbers = toValidate;
    if ( !Array.isArray(numbers) ) {
      console.log("Before map", numbers);
      numbers = Object.keys(numbers.risks).map( (risk) => {
        return numbers.risks[risk].percentage;
      });
      //console.log("After map", numbers);
    }
    const sum = this.sumTo100(numbers);
    return sum;
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
    this.#errors.riskSumError = false;
    Object.keys(this.#errors.regimens).forEach( (key) => {
      this.#errors.regimens[key] = false;
      this.#errors.risks[key] = false;
    });
  }

  resetStateErrors(newState) {
    this.#errors = { ...newState }
  }

  hasIncidence(obj) {
    return obj.incidence.hasOwnProperty("custom") && String(obj.incidence.custom).length > 1;
  }

  getLastArrItem(items) {
    return items.length > 1 ? items.slice(1) : items;
  }

  findObjWithErrors(keys) {
    const data = JSON.parse( JSON.stringify(this.#data) );
    let riskStatus = true;
    const filtered = keys.filter( (key) => {
      //console.log(this.hasEmptyRisks(data[key]));
      if (!this.hasEmptyRisks(data[key])) {
        riskStatus = this.hasFilledRisks(data[key]) && this.validatePercentageTotal(data[key]);
      }
      //const hasNoErrors =  this.hasIncidence(data[key]) && this.hasFilledRegimens(data[key]) &&  this.hasFilledRisks(data[key]) && this.sumTo100(data[key]);
      const hasNoErrors = this.hasIncidence(data[key]) && this.hasFilledRegimens(data[key]) && riskStatus;
      /*
      */
  // Need to flip the return value to get objs that do NOT all values filled
      return !hasNoErrors;
    });
    /*
    */
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

  sumTo100(numbers) {
    const sum = numbers.reduce( (prev, curr) => Number.parseFloat(prev) + Number.parseFloat(curr) );
    console.log(sum);
    return sum === 100;
  }

  hasEmptyRisks(cancer) {
    return cancer.hasCustomRisk && this.numberOf('percentage', cancer.risks).length === 0;
  }

  hasFilledRisks(cancer) {
    return this.numberOf('percentage', cancer.risks).length === Object.keys(cancer.risks).length;
  }

  hasFilledRegimens(cancer) {
    return this.numberOf('regimen', cancer.risks).length === Object.keys(cancer.risks).length;
  }

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
