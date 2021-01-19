import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadSetting } from '../state/slices/settingSlice';
import { loadPrices } from '../state/slices/costsSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StaticTitle from './StaticTitle';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';

const UserInterface = () => {
  const dispatch = useDispatch();

  const names = useSelector( (state) => {
    return state.cancers.names;
  });

  const selected = useSelector( (state) => {
    return state.cancers.selected;
  });

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const priceType = useSelector( (state) => {
    return state.costs.priceType;
  });

  const loadDefaultCountryYear = () => {
    if (setting.name == "") {
      dispatch( loadSetting({ setting: 'Argentina', year: '2020' }));
    }
  }

  const loadDefaultPriceType = () => {
    if (priceType === "") {
      dispatch( loadPrices('consolidated'));
    }
  }

  if (names.length === 0 ) {
    dispatch(loadCancers());
  }

  return (
    <Container>
      <h2>Temporary static inputs</h2>
      <header role="header">
        <Row>
          <Col>
            <StaticTitle 
              heading={ "Country" }
              text={ setting.name }
            />
          </Col>
          <Col>
            <StaticTitle 
              heading={ "Year" }
              text={ setting.year }
            />
          </Col>
          <Col>
            <StaticTitle 
              heading={ "Calculation source" }
              text={ priceType }
            />
          </Col>
        </Row>
        <Button onClick={ loadDefaultCountryYear }>Load Argentina 2020 values</Button>
        <Button onClick={ loadDefaultPriceType }>Load consolidated prices</Button>
      </header>
      <div className="main">
        <Row>
          <Col md="3">
            <CancerButtons cancers={ names } />
          </Col>
          <Col md="9">
            { 
              !selected.hasOwnProperty("name") ? <p>Please select cancer</p> :
                <UserInputs selected={ selected } />
            }
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default UserInterface;
