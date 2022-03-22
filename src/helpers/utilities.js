const allFieldsFilled = (...arr) => {
  return arr.every( (val) => {
    return val.length > 0;
  });
}

/**
 * Takes an integer argument, returns an array with the same length
 * as the argument and filling each index with consecutive integers 
 * (starting at 1) 
 * @param {integer} num - an integer
 * @return {Array} array of integers with length (num)
 */
const arrayFrom = (num) => {
  const returnArr = [];
  const arr = Array(+num);
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(i + 1);
  }
  return returnArr;
}

const copyObjProps = (sourceObj, zeros = true) => {
  let returnObj = {};
  const props = Object.keys(sourceObj);
  props.forEach( (prop) => {
    if (typeof sourceObj[prop] === "object") {
      returnObj[prop] = copyObjProps(sourceObj[prop]);
    }
    else {
      returnObj[prop] = (typeof sourceObj[prop] === "number" && zeros) ? 0 : "";
    }
  });
  return returnObj;
}

const getObjKey = (obj, val) => {
  return Object.keys(obj).find( (key) => obj[key] === val );
}

const hasHTML = (text) => {
  const regex = /<[/A-Za-z]*>/g;
  return text.search(regex) !== -1;
}

const makeHashKey = (...elements) => {
  const str = elements.join('');
  const arr = str.split(/[\s-]/).map( (el) => {
    return removePunctuation(el.toLowerCase());
  });
  return arr.join('');
}

const objNotEmpty = (obj) => {
  return Object.keys(obj).length > 0;
}

const sentenceCase = (str) => {
  if ( !isNaN(str) ) {
    return str;
  }
  if (str.includes("_")) {
    str = str.replaceAll(/_/g, ' ')
  }
  return str[0].toUpperCase() + str.substring(1); 
}

const setNumFormat = (toSet, type, options) => {
  if (!toSet) {
    toSet = 0;
  }
  return toSet === 0 ? "Not available" : new Intl.NumberFormat('en-US', { style: type, ...options }).format(toSet);
}

const setCurrency = (toSet) => {
  if (!toSet) {
    toSet = 0;
  }
  return toSet === 0 ? "No pricing available" : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(toSet);
}

const setNumber = (num) => {
  if (num === false || isNaN(num) || num.length === 0) {
    return false;
  }
  if ( typeof(num) === "string" ) {
    if ( num.split(".").length === 2 && num.split(".")[1].length > 0 ) {
      return parseFloat(num);
    }
    else {
      return parseInt(num);
    }
  }
  return num;
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

const titleCase = (str) => {
  if ( !isNaN(str) ) {
    return str;
  }
  if (str.includes("_")) {
    str = str.replaceAll(/_/g, ' ')
  }
  return str.split(" ").map( frag => frag[0].toUpperCase() + frag.substring(1)).join(" "); 
}

const to4decimals = (num) => {
  return Number.parseFloat(num.toFixed(4));
}

const toCurrency = (str) => {
  const filter = /[^\d*\.\d*]/g;
  return str.replace(filter, "");
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


// Filter out anything that's not a number except for 
// a '.'


const removePunctuation = (str) => {
  return str.replace(/[^A-Za-z\s\d]/, "");
}




/*
const setHTMLText = (text, tag) => {
  if (Array.isArray(text) ) {
    text.map( (paragraph, i) => {
      return (
        `<${ tag }` key={ i } dangerouslySetInnerHTML={ { __html: paragraph } } />
      );
    });
  }
  else {
    return `<${ tag }>${ text }</${ tag }>`;
  }
}
*/
  


export {
  allFieldsFilled,
  arrayFrom,
  copyObjProps,
  getObjKey,
  hasHTML,
  makeHashKey,
  objNotEmpty,
  sentenceCase,
  setCurrency,
  setNumber,
  setNumFormat,
  sortObjects,
  to4decimals,
  toCurrency,
  toPlural,
  toSingular,
}
