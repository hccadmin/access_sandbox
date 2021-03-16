import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ForecastSelect from './ForecastSelect';
import PriceTable from './PriceTable';
import { setPriceSource } from '../state/slices/pricesSlice';

const Step3Prices = ({ drugNames }) => {

  const dispatch = useDispatch();

  const priceSource = useSelector( (state) => {
    return state.prices.priceSource;
  });

  const setOption = (e) => {
    dispatch( setPriceSource(e.target.value) );
  }

  return (
    <>
      <Row>
        <Col md="4">
          <ForecastSelect
            name="priceSource"
            label="Price source"
            value={ priceSource || 0 }
            options={ ["buyer", "supplier", "consolidated"] }
            sendSelection={ setOption }
          /> 
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <PriceTable drugs={ drugNames } />
        </Col>
      </Row>
    </>
  );
}

export default Step3Prices;
