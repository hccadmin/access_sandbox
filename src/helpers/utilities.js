const sentenceCase = (str) => {
  let result = str.replaceAll(/_/g, ' ')
  return result[0].toUpperCase() + result.substring(1); 
}

const makeHashKey = (...elements) => {
  const str = elements.join('');
  const arr = str.split(/[\s-]/).map( (el) => {
    return removePunctuation(el.toLowerCase());
  });
  return arr.join('');
}

const to4decimals = (num) => {
  return Number.parseFloat(num.toFixed(4));
}

const removePunctuation = (str) => {
  return str.replace(/[^A-Za-z\s\d]/, "");
}

export {
  makeHashKey,
  to4decimals,
  sentenceCase
}
