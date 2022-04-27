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
import { objNotEmpty } from '../helpers/utilities';
import text from './text/steps';

const Step3Prices = ({ drugNames, setComplete }) => {
  const [modalVis, changeModalVis] = useState(false);

  const dispatch = useDispatch();

  const prices = useSelector( (state) => {
    return state.prices;
  });

  useEffect( () => {
    if ( Object.values(prices.priceList).length === 0 ) {
      dispatch( setLoading(true) );
      dispatch( loadPrices() ).then( (res) => {
        dispatch( setLoading(false) );
      });
    }

// Make sure to set step 4 visibility to true via 
// setComplete prop method as long as a price source 
// has been set (filtered property)
    if ( objNotEmpty(prices.filtered) ) {
      setComplete(true);
    }
  }, [prices.priceList, prices.filtered] );

  const setOption = (e) => {
    dispatch( setPriceSource(e.target.value) );

// Check whether or not the price list option selected is 0,
// set the fade in function visibility accordingly
    const priceListChosen = e.target.value !== "0";
    setComplete(priceListChosen);
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
            value={ prices.priceSource || 0 }
            options={ ["buyer", "supplier", "consolidated"] }
            sendSelection={ setOption }
          /> 
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <PriceTable drugs={ drugNames } list={ prices.filtered } />
        </Col>
      </Row>
    </>
  );
}

export default Step3Prices;
