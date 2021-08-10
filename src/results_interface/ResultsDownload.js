import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { CSVLink } from 'react-csv';
import { getCSVCosts } from '../state/slices/costsSlice';
import { useCSVLink} from './useCSVLink';
import { sentenceCase} from '../helpers/utilities';

const ResultsDownload = ({ selections, priceSource, grandTotal, type, classes, children }) => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;
  const [csvState, setCsvState] = useState(false);
  const [csvData, setCsvData] = useState({ inserts: false, headers: false, data: false });
  const buildCsvData = useCSVLink(selections, priceSource, grandTotal, type);
  const csvInst = useRef();
  const dispatch = useDispatch();
  //console.log("Results download type: ", type);

  useEffect( () => {
    if (csvState && csvInst.current && csvInst.current.link) {
      setTimeout( () => {
        csvInst.current.link.click();
        setCsvState(false);
      });
    }
  }, [csvState]);

  const loadCsvData = useCallback( (e) => {
    dispatch( getCSVCosts(type) ).then( (result) => {
      const csvPrepared = buildCsvData(result.payload);
        setCsvData(csvPrepared);
        setCsvState(true);
      //console.log(result.payload);
    });
  }, [csvState, type]);

/*
  const inserts = [
    ["Access Forecast cost results"],
    ["",""],
    ["Setting", selections.type],
    ["Country", selections.name],
    ["Year", selections.year],
    ["Price source", priceSource],
    ["Grand total cost", grandTotal],
    ["",""]
  ];

  const costPerType = { 
    cancer: { field1: "cancer", field2: "drug" },
    drug: { field1: "drug", field2: "cancer" }
  }

  const headers = [
    { 
      label: sentenceCase(costPerType[type].field1), 
      key: costPerType[type].field1 
    },
    { 
      label: sentenceCase(costPerType[type].field2), 
      key: costPerType[type].field2 
    },
    { label: "Volume", key: "volume" },
    { label: "Low costs", key: "low" },
    { label: "Medium costs", key: "med" },
    { label: "High costs", key: "high" },
    { label: "Custom costs", key: "override" },
  ];
*/

  return (
    <div className={ classes }>
      <Button size="lg" onClick={ loadCsvData }>{ children }</Button>
      { csvData &&
        <CSVLink
          //data={ csvData.data }
          data={ [{ test: "test" }] }
          //inserts={ csvData.inserts }
          inserts={ [["Test", "test"]] }
          //headers={ csvData.headers }
          headers={ [{ label: "Test", key: "test" }] }
          filename={ `costs_per_${ type }.csv` }
          multiArray={ selections.type === REACT_APP_SETTING_COMPLEX }
          target="_blank"
          ref={ csvInst }
        />
      }
    </div>
  );
}

export default ResultsDownload;
