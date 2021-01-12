const sentenceCase = (str) => {
  let result = str.replaceAll(/_/g, ' ')
  return result[0].toUpperCase() + result.substring(1); 
}

const makeHashKey = (str) => {
  const arr = str.split(/[\s-]/).map( (el) => {
    return removePunctuation(el.toLowerCase());
  });
  console.log(arr.join('_'));
}

const removePunctuation = (str) => {
  return str.replace(/\'/, "");
}

export {
  makeHashKey,
  sentenceCase
}
