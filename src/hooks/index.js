import { useEffect, useState } from 'react';

const useCompletedInputs = (...inputs) => {
  const [areComplete, setComplete] = useState(false);


  const allFieldsFilled = (arr) => {
    return arr.every( (val) => {
      return val.length > 0;
    });
  }

  useEffect( () => {
    setComplete( allFieldsFilled(inputs) );
  });

  return areComplete;
}

export { useCompletedInputs };
