import React from 'react';
import Table from 'react-bootstrap/Table';

const DiagnosedTotalIncidenceTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered>
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
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Country and cancer-specific incidence (n=200 countries; 2015-2030)</p>
              <p>High-bound and low-bound cases (95% uncertainty interval) included for reference only</p> 
            </td>
            <td>
              IICC-3
            </td>
            <td>
              <p>Ward et al 2019 takes raw data from IICC-3 registries and extrapolates to countries missing data using a geographic and income-status based approach; calculates for base and high/low bound (95% uncertainty interval) cases</p>
              <p>Data extrapolated out to year 2030 and segmented by age (&lt;1, 1-4, 5-9, 10-14)</p>
            </td>
            <td>
              <a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/30824204/">Ward et al. 2019: Estimating the total incidence of global childhood cancer: a simulation-based analysis</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DiagnosedTotalIncidenceTable;
