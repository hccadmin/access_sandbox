import {  useEffect, useState } from 'react';
import { arrayFrom } from '../helpers/utilities';

const useStepVisibility = (numSteps) => {
  /*
  const visArr = arrayFrom(numSteps).map( (num, i) => {
    return i === 0;
  });
  */
  const [stepsVis, setStepVis] = useState([true, false, false, false]);
  console.log(stepsVis);

  // return array with function and array variable
  const changeVis = (val, index) => {
    const newSteps = stepsVis;
    newSteps[index] = val;
    setStepVis(newSteps);
  }
  return [stepsVis, changeVis];
}

export default useStepVisibility; 
