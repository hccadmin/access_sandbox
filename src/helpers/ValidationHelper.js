import { makeHashKey, to4decimals, sortObjects } from '../helpers/utilities';

class ValidationHelper {
  #instVar;

  validate(toValidate) {
    const props = Object.values(toValidate).pop();
    /*
    */
    const result = !props.hasOwnProperty("incidence");
    console.log(result);
    return result;
    //return props.hasOwnProperty("incidence");
  }
}

export default ValidationHelper;
