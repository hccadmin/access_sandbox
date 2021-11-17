const useRegimenRef = (ref) => {
  const { REACT_APP_REGIMEN_DOC_URL } = process.env;

  if (ref.type === "web") {
    return ref.src;
  }
  else if (ref.type === "file") {
    return REACT_APP_REGIMEN_DOC_URL + ref.src;
  }
  else {
    return false;
  }
}

export default useRegimenRef;
