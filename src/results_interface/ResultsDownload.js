import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { CSVLink } from 'react-csv';
import { getCSVCosts } from '../state/slices/costsSlice';
import { useCSVLink} from './useCSVLink';
import { sentenceCase, objNotEmpty } from '../helpers/utilities';

const ResultsDownload = ({ selections, priceSource, grandTotal, type, classes, costs, children }) => {
  const { REACT_APP_SETTING_COMPLEX } = process.env;
  const [csvState, setCsvState] = useState(false);
  const [csvData, setCsvData] = useState(false);
  const csvFromBoilerplate = useCSVLink(selections, priceSource, grandTotal, type);
  const csvInst = useRef();
  const dispatch = useDispatch();
  //console.log("Results download type: ", type);

  useEffect( () => {
    //console.log("Or will this be called first? ", costs);
    if (csvState && csvInst.current && csvInst.current.link) {
      setTimeout( () => {
        csvInst.current.link.click();
        setCsvState(false);
      });
    }
  }, [csvState]);

  const loadCsvData = useCallback( (e) => {
    dispatch( getCSVCosts(type) ).then( (result) => {
      const csvAssembled = csvFromBoilerplate(result.payload, costs);
        console.log(csvAssembled);
        setCsvData(csvAssembled);
        setCsvState(true);
      //console.log(result.payload);
    });
  }, [csvState, type]);

  return (
    <div className={ classes }>
      <Button size="lg" onClick={ loadCsvData }>{ children }</Button>
      { csvData &&
        <CSVLink
          data={ csvData.data }
          //data={ [{ test: "test" }] }
          inserts={ csvData.inserts }
          //inserts={ [["Test", "test"]] }
          headers={ csvData.headers }
          //headers={ [{ label: "Test", key: "test" }] }
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
