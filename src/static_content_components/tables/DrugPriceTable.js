import React from 'react';
import Table from 'react-bootstrap/Table';

const DrugPriceTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered>
        <thead>
          <tr>
            <th>
              Data
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
              Price (USD) for 22/24 chemotherapy drugs
            </td>
            <td>
              <p>Management Sciences for Health International Medical Products Price Guide (MSH IMPPG)</p>
              <p>Made in collaboration with the WHO EML/EMLc</p>
            </td>
            <td>
              <p><a target="_blank" href="http://mshpriceguide.org/en/how-to-use/">2015 is most recent year of published data (captured)</a></p>
              <p><a target="_blank" href="http://mshpriceguide.org/en/single-drug-information/?DMFId=1451&searchYear=2015">Reports low, median, and high price for BOTH buyers and suppliers</a></p>
              <p><a target="_blank" href="http://mshpriceguide.org/wp-content/uploads/2017/04/MSH-2015-International-Medical-Products-Price-Guide.pdf">Prices reported for different formulations (e.g., different price for Carboplatin 150mg vs. 450mg); methodology to average into one price per drug per buyer/supplier detailed above</a></p>
            </td>
          </tr>
          <tr>
            <td>
              Price (USD) - ATRA
            </td>
            <td>
              Pan-Canadian Oncology Drug Review
            </td>
            <td>
              Not captured in MSH IMPPG
            </td>
          </tr>
          <tr>
            <td>
              Price (USD) - Arsenic Trioxide
            </td>
            <td>
              Pan-Canadian Oncology Drug Review
            </td>
            <td>
              Not captured in MSH IMPPG
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DrugPriceTable;
