import React, { useState, useCallback } from 'react';
import { CSVLink } from 'react-csv';

const ResultsDownload = ({ selections, priceSource, classes, costs, children }) => {
  const headers = [
    "Cancer", "Drugs", "Volume", "Low price", 
    "Med price", "High price", "Custom price"
  ];
  const data = [
  ];
  return (
    <>
      <CSVLink
        data={ data }
        headers={ headers }
        filename= "costs_download.csv"
        target="_blank"
        className={ `btn btn-primary btn-lg ${ classes }`}
      >{ children }
      </CSVLink>
    </>
  );
}

export default ResultsDownload;
