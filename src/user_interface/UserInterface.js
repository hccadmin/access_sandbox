import { useSelector, useDispatch } from 'react-redux';
import { loadCancers } from '../state/cancersSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StaticTitle from './StaticTitle';
import CancerButtons from './CancerButtons';
import UserInputs from './UserInputs';

const UserInterface = () => {
  const dispatch = useDispatch();

  const names = useSelector( (state) => {
    return state.cancers.names;
  });

  const selected = useSelector( (state) => {
    return state.selected;
  });

  const titles = {
    country: 'Argentina',
    year: '2020',
    calculation_source: 'Consolidated'
  }

  if (names.length === 0 ) {
    dispatch(loadCancers());
  }

  return (
    <Container>
      <h2>Temporary static inputs</h2>
      <header role="header">
        <Row>
            { Object.keys(titles).map( (prop, i) => {
              return (
                <Col key={ i }>
                  <StaticTitle 
                    heading={ prop }
                    text={ titles[prop] }
                  />
                </Col>
              );
            })}
        </Row>
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
      </header>
    </Container>
  );
}

export default UserInterface;
