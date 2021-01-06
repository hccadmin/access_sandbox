import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import CancerButtons from './CancerButtons';

const UserInputs = ({ cancersOnly, cancersFull }) => {
  return (
    <div role="user-inputs">
      <Row>
        <Col md="3">
          <CancerButtons cancers={ cancersOnly } />
        </Col>
        <Col md="9">
          <Card>
            <Card.Body>
              <Form>
                <h3>Cancer: <span className="display-4">Cancer</span></h3>
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <Form.Label>Incidence</Form.Label>
                      <Form.Text>Enter the estimated number of cases</Form.Text>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Risk stratification</Form.Label>
                      <Form.Text>Enter risk percentages (disabled for now)</Form.Text>
                      <Table>
                        <tbody>
                          <tr>
                            <td>Low Risk</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>High Risk</td>
                            <td>26%</td>
                          </tr>
                          <tr>
                            <td>Very High Risk</td>
                            <td>14%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Regimens</Form.Label>
                      <Form.Text>Select regimens</Form.Text>
                      <Table>
                        <tbody>
                          <tr>
                            <td>Low Risk</td>
                            <td>
                              <Form.Control as="select" custom>
                                <option value="reg_1">Regimen 1</option>
                                <option value="reg_2">Regimen 2</option>
                                <option value="reg_3">Regimen 2</option>
                              </Form.Control>
                            </td>
                          </tr>
                          <tr>
                            <td>High Risk</td>
                            <td>
                              <Form.Control as="select" custom>
                                <option value="reg_1">Regimen 1</option>
                                <option value="reg_2">Regimen 2</option>
                                <option value="reg_3">Regimen 2</option>
                              </Form.Control>
                            </td>
                          </tr>
                          <tr>
                            <td>Very High Risk</td>
                            <td>
                              <Form.Control as="select" custom>
                                <option value="reg_1">Regimen 1</option>
                                <option value="reg_2">Regimen 2</option>
                                <option value="reg_3">Regimen 2</option>
                              </Form.Control>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UserInputs;
