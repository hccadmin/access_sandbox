import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/slices/cancersSlice';
import { loadSetting } from '../state/slices/settingSlice';
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

  const titles = {
    country: '',
    year: '',
    calculation_source: 'Consolidated'
  }

  const loadDefaultSetting = () => {
    if (setting.name == "" || !setting.name === titles.country) {
      //console.log("button was pressed");
      dispatch( loadSetting({ setting: 'Argentina', year: '2020' }));
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
              text={ "Consolidated" }
            />
          </Col>
        </Row>
        <Button onClick={ loadDefaultSetting }>Load Argentina 2020 values</Button>
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
