import React from 'react';
import Table from 'react-bootstrap/Table';

const CostResultTable = ({ cancer, costs }) => {
  return (
    <>
      <h5>{ cancer }</h5>
      <Table striped bordered hover>
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
        </tbody>
      </Table>
    </>
  );
}

export default CostResultTable;
