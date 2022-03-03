import React from 'react';
import Table from 'react-bootstrap/Table';

const GenderDistributionTable = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="_blank" href="http://iicc.iarc.fr/results/registries.php">% male, % female patients per cancer</a>
            </td>
            <td>
              IICC-3
            </td>
            <td>
              Registry-Specific Tables (n=20 countries’ raw data included; extrapolated to other countries/regions based on geographic and income-status proximity)
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default GenderDistributionTable;
