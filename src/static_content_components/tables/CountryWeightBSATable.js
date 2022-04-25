import React from 'react';
import Table from 'react-bootstrap/Table';

const CountryWeightBSATable = () => {
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
              <a target="_blank" href="http://www.statcompiler.com/">Country-specific height/weight</a>
            </td>
            <td>
              USAID DHS
            </td>
            <td>
              Stat Compiler tool (publicly available) reported z-scores for ages 0-5 (n=74 countries raw data included; extrapolated to other countries/regions based on geographic and income-status proximity)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.who.int/childgrowth/standards/weight_for_age/en/">Weight for age</a>
            </td>
            <td>
              WHO
            </td>
            <td>
              Worldwide growth curves (Males and females; 0-10 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/wtageinf.htm#females">Weight for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Females; 0-3 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/wtage.htm#females">Weight for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Females; 2-20 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/wtageinf.htm#males">Weight for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Males; 0-3 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/wtage.htm#males">Weight for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Males; 2-20 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.who.int/childgrowth/standards/height_for_age/en/">Height for age</a>
            </td>
            <td>
              WHO
            </td>
            <td>
              Worldwide growth curves (Males and females; 0-18 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/lenageinf.htm#females">Height for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Females; 0-3 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/statage.htm#females">Height for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Females; 2-20 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/lenageinf.htm#males">Height for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Males; 0-3 years)
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.cdc.gov/growthcharts/html_charts/statage.htm#males">Height for age</a>
            </td>
            <td>
              CDC
            </td>
            <td>
              US growth curves (Males; 2-20 years)
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CountryWeightBSATable;
