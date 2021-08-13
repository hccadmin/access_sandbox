import { sentenceCase } from '../helpers/utilities';
import text from './text/csvOutputText.json';

const useCSVLink = (selections, priceSource, grandTotal, type) => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;
  //const headers = buildHeaders(type, text.headers);

  const buildInserts = (selections, priceSource, grandTotal, inserts) => {
    const completed = [];
    const subtype = selections.subtype;
    inserts.forEach( (item, i) => {
      if (subtype && i === 3) {
        completed.push(["Geographical region", sentenceCase(subtype)]);
        completed.push([item, selections.name]);
      }
      else {
        const toAdd = addInsert(item, selections, priceSource, grandTotal);
        completed.push(toAdd);
      }
    });
    //console.log(completed);
    return completed;
  }

  const addInsert = (item, type, price, grand) => {
    switch (item) {
      case "Setting":
        return [item, selections.type];
      case "Area selected":
        return [item, selections.name];
      case "Year":
        return [item, selections.year];
      case "Price source":
        return [item, price];
      case "Grand total cost":
        return [item, grand];
      default:
        return [item, ""];
    }
  }

  const buildStaticHeaders = (textObj) => {
    const staticHeaders = textObj.staticValues.map( (valArr, i) => {
      const headerObj = {};
      textObj.props.forEach( (prop, j) => {
        headerObj[prop] = valArr[j];
      });
      return headerObj;
    });
    //console.log(staticHeaders);
    return staticHeaders;
  }

  const getDynamicHeaders = (type) => {
    const headerArr = text.headers.toggleValues[type];
    const headers = headerArr.map( (header) => {
      const obj = {}
      text.headers.props.forEach( (prop, i) => {
        obj[prop] = (i === 0 ? sentenceCase(header) : header);
      });
      return obj;
    });
    //console.log(headers);
    return headers;
  }

/*
*/
  const addInsertsToData = (dataCopy, headers, hsInserts) => {
    /*
    const hsData = dataCopy.map( (data, i) => {
      const level = { inserts: [], data: data };
      const inserts = [];
      const insert1 = [( i === 0 ? hsInserts[0][0] : `${ hsInsert[0][1] } ${ i }` )];
      const insert2 = [ hsInserts[1], data
   */ 
  }


  const inserts = buildInserts(selections, priceSource, grandTotal, text.inserts);
  const staticHeaders = buildStaticHeaders(text.headers);
  const dynamicHeaders = getDynamicHeaders(type);
  const headers = [dynamicHeaders, staticHeaders].flat();

  return (data) => {
    let healthSysData;
    if (selections.type === REACT_APP_SETTING_COMPLEX) {
      const dataCopy = JSON.parse( JSON.stringify(data) );
      //healthSysData = addInsertsToData(dataCopy, headers, text.hsInserts);
      // rework data
    }
    return { inserts, headers, data }
    //return { inserts, headers, data: healthSysData || data }
  }
}

export { useCSVLink };
