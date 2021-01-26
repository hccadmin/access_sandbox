import React from 'react';
import Table from 'react-bootstrap/Table';

const CostResultTable = ({ cancer, costs }) => {
  return (
    <>
      <h5>{ cancer }</h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Drugs</th> 
            <th>Dosage</th>
            <th>Low price</th>
            <th>Med price</th>
            <th>High price</th>
          </tr>
        </thead>
        <tbody>
          { costs.map( (cost, i) => {
            return (
              <tr key={ i }>
                <td>{ cost.name }</td>
                <td>{ cost.total_dosage.toFixed(2) }</td>
                <td>${ cost.costs['low'].toFixed(2) }</td>
                <td>${ cost.costs['med'].toFixed(2) }</td>
                <td>${ cost.costs['high'].toFixed(2) }</td>
              </tr>
            );
          })}
          <tr>
            <td><strong>Totals</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CostResultTable;
