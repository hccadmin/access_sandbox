import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const UserInputs = ({ selected }) => {
  return (
    <div role="user-inputs">
      <Card>
        <Card.Body>
          <Form>
            <h3>Cancer: <span className="display-4">{ selected.name }</span></h3>
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
                  <Form.Label>Risks and regimens</Form.Label>
                  <Form.Text>Enter risk percentages and corresponding regimens(disabled for now)</Form.Text>
                  <Table>
                    <thead>
                      <tr>
                        <th>Risk stratification</th>
                        <th>Percentage</th>
                        <th>Regimens</th>
                      </tr>
                    </thead>
                    <tbody>
                    { selected.risk_strats.map( (rs, i) => {
                      return (
                        <tr key={ i }>
                          <td>{ rs.name || "Risk stratification" }</td>
                          <td>{ `${ (rs.percent_total * 100).toFixed() }%` }</td>
                          <td>
                            { rs.regimens.length === 1 ? rs.regimens[0] :
                            <Form.Control as="select">
                              <option name="select">--Select a regimen--</option>
                            { rs.regimens.map( (reg, j) => {
                              return (
                                <option key={ j } name={ reg } value={ reg }>{ reg }</option>
                              );
                            })}
                            </Form.Control>
                            }
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </Table>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserInputs;
