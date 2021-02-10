import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadSetting } from '../state/slices/settingSlice';
import { setSelection } from '../state/slices/userSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StaticTitle from './StaticTitle';
import ForecastSelect from './ForecastSelect';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';

const restructureUILabels = (uiLabels) => {
  const { countries, years, price_source } = uiLabels;
  return {
    setting: {
      label: "Setting label",
      list: countries
    },
    year: {
      label: "Years label",
      list: years
    },
    price_source: {
      label: "Price source label",
      list: price_source
    }
  };
}

const UserInterface = ({ setVisible, loadAllCosts, uiLabels }) => {
  const dispatch = useDispatch();

  const inputs = restructureUILabels(uiLabels);
  
  const cancers = useSelector( (state) => {
    return state.cancers.full;
  });

  const selected = useSelector( (state) => {
    return state.user.selected;
  });

  const setting = useSelector( (state) => {
    return state.setting;
  });

  const priceType = useSelector( (state) => {
    return state.costs.priceType;
  });

  const initCostCalc = () => {
    setVisible({ inputs: false, results: true });
    loadAllCosts();
  }
   
  const evaluateSelection = (e) => {
    const selection = {
      name: e.target.name,
      value: e.target.value
    };
    dispatch( setSelection(selection) );
  }

  if (Object.keys(cancers).length < 1) {
    dispatch( loadCancers() );
  }

  return (
    <div>
      <Container>
        <h2>User inputs</h2>
        <header role="header">
          <Form>
            <Row>
              { Object.keys(inputs).map( (input, i) => {
                return (
                  <Col key={ i }>
                    <ForecastSelect
                      name={ input }
                      options={ inputs[input].list }
                      label={ inputs[input].label }
                      sendSelection={ evaluateSelection }
                    />
                  </Col>
                )
              })}
            </Row>
          </Form>
        </header>
        <div className="main">
          <Row>
            <Col md="3">
              <CancerButtons cancers={ uiLabels.cancers } />
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
