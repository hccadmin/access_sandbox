import React from 'react';
import Table from 'react-bootstrap/Table';

const DiagnosedTotalIncidenceTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered striped>
        <thead>
          <tr>
            <th>
              Data type
            </th>
            <th>
              Source
            </th>
            <th>
              Commentary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p><a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30824204/">Country and cancer-specific incidence (n=200 countries; 2015-2030)</a></p>
              <p><a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30824204/">High-bound and low-bound cases (95% uncertainty interval) included for reference only</a></p> 
            </td>
            <td>
              IICC-3
            </td>
            <td>
              <p>Ward et al 2019 takes raw data from IICC-3 registries and extrapolates to countries missing data using a geographic and income-status based approach; calculates for base and high/low bound (95% uncertainty interval) cases</p>
              <p>Data extrapolated out to year 2030 and segmented by age (&lt;1, 1-4, 5-9, 10-14)</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DiagnosedTotalIncidenceTable;
