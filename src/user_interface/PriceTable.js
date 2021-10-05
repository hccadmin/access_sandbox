import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import UserOverrideToggle from './user_override_toggle/UserOverrideToggle';
import { overridePrice, removePriceOverride } from '../state/slices/pricesSlice';
import { makeHashKey, toCurrency } from '../helpers/utilities';

const PriceTable = ({ drugs, list }) => {

  const dispatch = useDispatch();

  const overrides = useSelector( (state) => {
    return state.prices.overrides;
  });
  
  const removeOverride = (e) => {
    const drug = e.target.name.split("-").shift();
    if (e.target.value === "modeled") {
      dispatch( removePriceOverride(drug) );
    }
  }

  const initOverride = (e) => {
    const drug = e.target.name;
    const newPrice = toCurrency(e.target.value);
    dispatch( overridePrice({ drug, newPrice }) );
  }

  return Object.keys(list).length > 0 && (
    <div className="forecast-table">
      <Table bordered striped size="sm">
        <thead>
          <tr>
            <th>Drug name</th>
            <th>Price per mg or IU (in US dollars)</th>
            <th>Price override</th>
          </tr>
        </thead>
        <tbody>
        { drugs.map( (drug, i) => {
            const drugHash = makeHashKey(drug);
            const price = list[drugHash].prices.med;
            const displayed = isNaN(price) ? price : `$${ price.toFixed(3) }`;
            return (
              <tr key={ i }>
                <td>{ drug }</td>
                <td>{ Object.keys(list).length > 0  && displayed }</td> 
                <td>
                  <UserOverrideToggle 
                    name={ drugHash } 
                    setOverride={ initOverride }
                    handleRemoval={ removeOverride }
                    saved={ overrides.hasOwnProperty(drugHash) && overrides[drugHash] }
                    btnSize="sm"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PriceTable;
