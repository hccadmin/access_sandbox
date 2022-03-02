import React from 'react';
import Table from 'react-bootstrap/Table';

const RiskStratificationTable = () => {

  const seerMssg = "SEER is currently the most comprehensive, publicly available dataset for risk stratification of this tumor, but is not expected to be reflective of on-the-ground realities in LMICs because it is based on US data. Users are encouraged to put in their locally available risk stratification data, if known, because this is expected to be more accurately tailored to their setting."

  const naMssg = "Patient segmentation not required because regimen of choice does not differ across different patient segments."

  return (
    <div className="forecast-table">
      <Table bordered>
        <thead>
          <tr>
            <th>Cancer</th>
            <th>Source</th>
            <th>Commentary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ALL</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>AML</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>APL</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Burkitt lymphoma</td>
            <td>SIOP PODC (2012)</td>
            <td>
              Risk stratification % reported directly in the SIOP PODC, rather than from SEER, so expected to be more tailored to LMICs.
            </td>
          </tr>
          <tr>
            <td>DLBCL</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>Ewing sarcoma</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>Germ cell tumor</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Hepatoblastoma</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Hodgkin's lymphoma</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Kaposi sarcoma</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>LGG</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Lymphoblastic lymphoma</td>
            <td>N/A</td>
            <td>
              Assumes the same risk stratification as ALL because patients are treated the same way.
            </td>
          </tr>
          <tr>
            <td>Neuroblastoma</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Osteosarcoma</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>Retinoblastoma</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>Rhabdomyeosarcoma</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
          <tr>
            <td>Standard-risk medulloblastoma</td>
            <td>N/A</td>
            <td>{ naMssg }</td>
          </tr>
          <tr>
            <td>Wilms tumor</td>
            <td>SEER</td>
            <td>{ seerMssg }</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default RiskStratificationTable;
