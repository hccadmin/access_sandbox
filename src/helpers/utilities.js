const sentenceCase = (str) => {
  if ( !isNaN(str) ) {
    return str;
  }
  if (str.includes("_")) {
    str = str.replaceAll(/_/g, ' ')
  }
  return str[0].toUpperCase() + str.substring(1); 
}

const setCurrency = (toSet) => {
  return toSet === 0 ? "No pricing available" : `$${ toSet.toFixed(2) }`;
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

const hasHTML = (text) => {
  const regex = /\<[\/A-Za-z]*\>/g;
  return text.search(regex) !== -1;
}

// Filter out anything that's not a number except for 
// a '.'
const toCurrency = (str) => {
  const filter = /[^\d*\.\d*]/g;
  return str.replace(filter, "");
}

const getObjKey = (obj, val) => {
  return Object.keys(obj).find( (key) => obj[key] === val );
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

const arrayFrom = (num) => {
  const returnArr = [];
  const arr = Array(+num);
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(i + 1);
  }
  return returnArr;
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
  makeHashKey,
  to4decimals,
  sentenceCase,
  toSingular,
  hasHTML,
  toCurrency,
  getObjKey,
  copyObjProps,
  setCurrency,
  toPlural,
  sortObjects,
  arrayFrom
}
