import { useEffect, useState } from 'react';
import text from './text/csvOutputText.json';

const useCSVLink = (selections, priceSource, grandTotal, type) => {

  const { REACT_APP_SETTING_COMPLEX } = process.env;
  //const headers = buildHeaders(type, text.headers);

  const buildInserts = (selections, priceSource, grandTotal, inserts) => {
    const completed = [inserts[0]];
    const subtype = selections.subtype;
    inserts.forEach( (item, i) => {
      if (subtype && i === 3) {
        completed.push(["Geographical region", subtype]);
        completed.push([item, selections.year]);
      }
      else {
        const toAdd = addInsert(item, selections.type, priceSource, grandTotal);
        completed.push(toAdd);
      }
    });
    console.log(completed);
    return completed;
  }

  const addInsert = (item, type, price, grand) => {
    switch (item) {
      case "Setting":
        return [item, type];
      case "Price source":
        return [item, price];
      case "Grand total cost":
        return [item, grand];
      default:
        return ["", ""];
    }
  }

  const buildHeaders = (type, headers) => {
    const costPerType = { 
      cancer: { field1: "cancer", field2: "drug" },
      drug: { field1: "drug", field2: "cancer" }
    }
  }

  const inserts = buildInserts(selections, priceSource, grandTotal, text.inserts);
  const headers = [{}];

  useEffect( () => {
  }, [type]);

  return (data) => {
    let reworkedData;
    if (selections.type === REACT_APP_SETTING_COMPLEX) {
      reworkedData = JSON.parse( JSON.stringify(data) );
      // rework data
    }
    return { inserts, headers, data: reworkedData || data }
  }
}

export { useCSVLink };
