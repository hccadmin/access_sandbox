import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { CSVLink } from 'react-csv';
import { getCSVCosts } from '../state/slices/costsSlice';

const ResultsDownload = ({ selections, priceSource, grandTotal, type, classes, children }) => {
  const [csvData, setCsvData] = useState(false);
  const csvInst = useRef();
  const dispatch = useDispatch();
  //console.log("Results download type: ", type);

  useEffect( () => {
    if (csvData && csvInst.current && csvInst.current.link) {
      setTimeout( () => {
        csvInst.current.link.click();
        setCsvData(false);
      });
    }
  }, [csvData]);

  const loadCsvData = useCallback( (e) => {
    dispatch( getCSVCosts(type) ).then( (result) => {
      setCsvData(result.payload);
    });
  }, [csvData, type]);

  const inserts = [
    ["Access Forecast cost results"],
    ["Setting", selections.type],
    ["Country", selections.name],
    ["Year", selections.year],
    ["Price source", priceSource],
    ["Grand total cost", grandTotal]
  ];

  const headers = [
    { label: "Cancer", key: "cancer" },
    { label: "Drug", key: "drug" },
    { label: "Volume", key: "volume" },
    { label: "Low costs", key: "low" },
    { label: "Medium costs", key: "med" },
    { label: "High costs", key: "high" },
    { label: "Custom costs", key: "override" },
  ];

  return (
    <div className={ classes }>
      <Button size="lg" onClick={ loadCsvData }>{ children }</Button>
      { csvData &&
        <CSVLink
          data={ csvData }
          inserts={ inserts }
          headers={ headers }
          filename= "costs_download.csv"
          target="_blank"
          ref={ csvInst }
        />
      }
    </div>
  );
}

export default ResultsDownload;
