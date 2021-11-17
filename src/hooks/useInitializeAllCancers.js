const useInitializeAllCancers = () => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;
  let shouldInitialize = false;

  return (type, cancers, incidences) => {
    if (
      type === REACT_APP_SETTING_COMPLEX &&
      cancers.length > 0 &&
      Object.keys(incidences).length > 0
    ) {
      shouldInitialize = true;
    }
    return shouldInitialize;
  }
}

export default useInitializeAllCancers; 
