const sentenceCase = (str) => {
  let result = str.replaceAll(/_/g, ' ')
  return result[0].toUpperCase() + result.substring(1); 
}

export {
  sentenceCase
}
