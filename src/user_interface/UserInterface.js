import { useSelector, useDispatch } from 'react-redux';
import { makeHashKey } from '../helpers/utilities';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadSetting } from '../state/slices/settingSlice';
import { loadPrices } from '../state/slices/costsSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StaticTitle from './StaticTitle';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';

const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
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
    if (setting.name === "") {
      dispatch( loadSetting({ setting: 'Argentina', year: '2020' }));
    }
  }

  const loadDefaultPriceType = () => {
    if (priceType === "") {
      dispatch( loadPrices('consolidated'));
    }
  }

  const initCostCalc = () => {
    setVisible({ inputs: false, results: true });
    loadAllCosts();
  }
    
  if (names.length === 0 ) {
    dispatch(loadCancers());
  }

  return (
    <div>
      <Container>
        <h2>User inputs</h2>
        <header role="header">
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <h3>Country</h3>
                  <Form.Label>Select a country from the list below</Form.Label>
                  <Form.Control
                    as="select"
                    name="countries"
                  >
                    <option value="0">--Select a country--</option>
                    { uiLabels.countries.map( (country, i) => {
                      return (
                        <option 
                          key={ i }
                          value={ country }
                          name={ country }
                        >{ country }
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              {/*
                <StaticTitle 
                  heading={ "Country" }
                  text={ setting.name }
                />
              */}
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
          </Form>
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
            <Button onClick={ initCostCalc } size="lg">Calculate costs</Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default UserInterface;
