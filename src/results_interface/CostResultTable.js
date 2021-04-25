import React from 'react';
import Table from 'react-bootstrap/Table';
import { sentenceCase, setCurrency } from '../helpers/utilities';

const CostResultTable = ({ costs, type, tableLabel }) => {
  const costsArr = costs.drugs || costs.cancers;

  const getUserCost = (cost) => {
    const result = cost.hasOwnProperty('override') ? `$${cost.override.toFixed(2)}` : "-";
    return result;
  }


  return costsArr && (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{ sentenceCase(tableLabel) }</th> 
            { type === "By cancer" && <th>Volume</th> }
            <th>Low price</th>
            <th>Med price</th>
            <th>High price</th>
            <th>User price</th>
          </tr>
        </thead>
        <tbody>
          { costsArr.map( (cost, i) => {
            return (
              <tr key={ i }>
                <td>{ cost.name }</td>
              { type === "By cancer" && <td>{ cost.total_dosage.toFixed(2) }</td> }
                <td>{ setCurrency(cost.costs.low) }</td>
                <td>{ setCurrency(cost.costs.med) }</td>
                <td>{ setCurrency(cost.costs.high) }</td>
                <td>{ getUserCost(cost.costs) }</td>
              </tr>
            );
          })}
          <tr>
            <td><strong>Totals</strong></td>
            { type === "By cancer" && 
              <td>{ costs.totals.dosage.toFixed(2) }</td> 
            }
            <td>{ setCurrency(costs.totals.low) }</td>
            <td>{ setCurrency(costs.totals.med) }</td>
            <td>{ setCurrency(costs.totals.high) }</td>
            <td>{ getUserCost(costs.totals) }</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CostResultTable;
