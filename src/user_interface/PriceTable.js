import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { makeHashKey } from '../helpers/utilities';

const PriceTable = ({ drugs, list }) => {
  return (
    <Table striped hover size="sm">
      <thead>
        <tr>
          <th>Drug name</th>
          <th>Price (in US dollars)</th>
        </tr>
      </thead>
      <tbody>
      { drugs.map( (drug, i) => {
          const drugHash = makeHashKey(drug);
          let displayed;
          if (Object.keys(list).length > 0) {
            const price = list[drugHash].prices.med;
            displayed = isNaN(price) ? price : `$${ price.toFixed(3) }`;
          }
          return (
            <tr key={ i }>
              <td>{ drug }</td>
              <td>{ Object.keys(list).length > 0  && displayed }</td> 
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default PriceTable;
