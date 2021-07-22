import React from 'react';
import { useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import { getCSVCosts } from '../state/slices/costsSlice';

const ResultsDownload = ({ selections, priceSource, classes, costs, children }) => {

  const dispatch = useDispatch();

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
