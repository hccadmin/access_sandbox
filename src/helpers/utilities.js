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

const sortObjects = (objs) => {
  objs.sort( (obj1, obj2) => {
    if (obj1.name < obj2.name) {
      return -1;
    }
    if (obj1.name > obj2.name) {
      return 1;
    }
    return 0;
  });
  return objs;
}

export {
  makeHashKey,
  to4decimals,
  sentenceCase,
  sortObjects
}
