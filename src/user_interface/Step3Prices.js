import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ForecastSelect from './ForecastSelect';
import PriceTable from './PriceTable';
import HelpTextModal from '../shared_components/HelpTextModal';
import priceText from './text/step3';
import { setPriceSource, loadPrices } from '../state/slices/pricesSlice';
import { setLoading } from '../state/slices/loadingSlice';
import text from './text/steps';

const Step3Prices = ({ drugNames, setComplete }) => {
  const [modalVis, changeModalVis] = useState(false);

  const dispatch = useDispatch();

  const isInitialized = useSelector( (state) => {
    return state.prices.initialized;
  });

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
      dispatch( setLoading(true) );
      dispatch( loadPrices() ).then( (res) => {
        dispatch( setLoading(false) );
      });
    }
    //console.log("Price list loaded: ", isInitialized);
  }, [priceList] );

  const setOption = (e) => {
    dispatch( setPriceSource(e.target.value) );
    setComplete(true);
  }

  const closeModal = () => {
    changeModalVis(false);
  }

  return (
    <>
    {/*
    */}
      <HelpTextModal
       modalTitle="Price sources" 
       modalContent={ priceText }
      >Learn more about price sources and which one to choose.
      </HelpTextModal>
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
