import React from 'react';
import Table from 'react-bootstrap/Table';
import { sentenceCase, setNumFormat } from '../helpers/utilities';

const CostResultTable = ({ costs, type, tableLabel }) => {
  const costsArr = costs.drugs || costs.cancers;

  const getUserCost = (cost) => {
    const result = cost.hasOwnProperty('override') ? setNumFormat(cost.override, 'currency', { currency: 'USD' }) : "-";
    return result;
  }


  return costsArr && (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>{ sentenceCase(tableLabel) }</th> 
            { type === "By cancer" && <th>Volume <small><em>(price per mg)</em></small></th> }
            <th>Low price</th>
            <th>Med price</th>
            <th>High price</th>
            <th>Custom price</th>
          </tr>
        </thead>
        <tbody>
          { costsArr.map( (cost, i) => {
            return (
              <tr key={ i }>
                <td>{ cost.name }</td>
              { type === "By cancer" && <td>{ setNumFormat(cost.total_dosage, 'decimal') }</td> }
                <td>{ setNumFormat(cost.costs.low, 'currency', { currency: 'USD' }) }</td>
                <td>{ setNumFormat(cost.costs.med, 'currency', { currency: 'USD' }) }</td>
                <td>{ setNumFormat(cost.costs.high, 'currency', { currency: 'USD' }) }</td>
                <td>{ getUserCost(cost.costs) }</td>
              </tr>
            );
          })}
          <tr>
            <td><strong>Totals</strong></td>
            { type === "By cancer" && 
              <td>{ setNumFormat(costs.totals.dosage, 'decimal') }</td> 
            }
            <td>{ setNumFormat(costs.totals.low, 'currency', { currency: 'USD' }) }</td>
            <td>{ setNumFormat(costs.totals.med, 'currency', { currency: 'USD' }) }</td>
            <td>{ setNumFormat(costs.totals.high, 'currency', { currency: 'USD' }) }</td>
            <td>{ getUserCost(costs.totals) }</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CostResultTable;
