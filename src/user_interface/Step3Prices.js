import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ForecastSelect from './ForecastSelect';
import PriceTable from './PriceTable';
import HelpTextModal from '../shared_components/HelpTextModal';
import priceText from './text/price_data_definitions';
import { setPriceSource, loadPrices } from '../state/slices/pricesSlice';
import text from './text/steps';

const Step3Prices = ({ drugNames }) => {
  const [modalVis, changeModalVis] = useState(false);

  const dispatch = useDispatch();

  const priceSource = useSelector( (state) => {
    return state.prices.priceSource;
  });

  const priceList = useSelector( (state) => {
    return state.prices.priceList;
  });

  const filtered = useSelector( (state) => {
    return state.prices.filtered;
  });

  useEffect( () => {
    if ( Object.values(priceList).length === 0 ) {
      dispatch( loadPrices() );
    }
  }, [priceList] );

  const setOption = (e) => {
    dispatch( setPriceSource(e.target.value) );
  }

  const closeModal = () => {
    changeModalVis(false);
  }

  return (
    <>
    {/*
    */}
      <p>
        <a href="#" onClick={ () => changeModalVis(true) }>
          Learn more about price sources and which one to choose.
        </a>
      </p>
      <HelpTextModal
       title="Price sources" 
       content={ priceText }
       visible={ modalVis }
       closeModal={ closeModal }
      />
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
        <Col md="8">
          <PriceTable drugs={ drugNames } list={ filtered } />
        </Col>
      </Row>
    </>
  );
}

export default Step3Prices;
