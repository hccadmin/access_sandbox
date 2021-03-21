const sentenceCase = (str) => {
  if ( !isNaN(str) ) {
    return str;
  }
  if (str.includes("_")) {
    str = str.replaceAll(/_/g, ' ')
  }
  return str[0].toUpperCase() + str.substring(1); 
}

const toSingular = (str) => {
  if (!str || str.length === 0) {
    return false;
  }
  let singular = "";
  if (str.endsWith("ies")) {
    singular = str.replace(/ies\b/, "y");
  }
  else {
    singular = str.slice(0, -1);
  }
  return singular;
}

const toPlural = (str) => {
  if (!str || str.length === 0) {
    return false;
  }
  let plural = "";
  if (str.endsWith("y")) {
    plural = str.replace(/y\b/, "ies");
  }
  else {
    plural = str + "s";
  }
  return plural;
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

const copyObjProps = (sourceObj) => {
  let returnObj = {};
  const props = Object.keys(sourceObj);
  props.forEach( (prop) => {
    if (typeof sourceObj[prop] === "object") {
      returnObj[prop] = copyObjProps(sourceObj[prop]);
    }
    else {
      returnObj[prop] = (typeof sourceObj[prop] === "number" ? 0 : "");
    }
  });
  return returnObj;
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
  toSingular,
  copyObjProps,
  toPlural,
  sortObjects
}
