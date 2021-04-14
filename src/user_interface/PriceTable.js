import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import { overridePrice } from '../state/slices/pricesSlice';
import { makeHashKey, toCurrency } from '../helpers/utilities';

const PriceTable = ({ drugs, list }) => {

  const dispatch = useDispatch();

  const overrides = useSelector( (state) => {
    return state.prices.overrides;
  });

  const initOverride = (e) => {
    const drug = e.target.name;
    const newPrice = toCurrency(e.target.value);
    dispatch( overridePrice({ drug, newPrice }) );
  }

  return (
    <Table striped hover size="sm">
      <thead>
        <tr>
          <th>Drug name</th>
          <th>Price (in US dollars)</th>
          <th>Price override</th>
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
              <td>
                <UserOverrideToggle 
                  name={ drugHash } 
                  setOverride={ initOverride }
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default PriceTable;
