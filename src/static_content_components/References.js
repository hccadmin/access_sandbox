import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import RegimenCalculationsTable from './RegimenCalculationsTable';

const References = () => {
  return (
    <Row>
      <Col lg="2">
        <div className="sticky-top">
        <Nav className="flex-column" navbarScroll>
          <Nav.Link href="#start">Top of page</Nav.Link>
        </Nav>
        </div>
      </Col>
      <Col lg="10">
        <h1 id="start">References</h1>

{/* Regimen calculations*/}
        <h2>Regimen calculations</h2>
        <p>Notes</p>
        <ul>
          <li>The International Society of Pediatric Oncology (SIOP) adapted treatment regimens (ATR) are employed as the default source where available because recommended regimens are based on international expert consensus and graded in accordance with LMIC capabilities.</li>
          <li>Where SIOP ATRs were unavailable, the model incorporates either LMIC-specific, non-SIOP publications or Essential Medicines List for Children (EMLc) treatment guidelines.</li>
          <li>Regimens were validated by both cancer and LMIC experts (listed below), intended to confirm included drug feasibility and accessibility.</li>
          <li>For a more comprehensive review of each cancer and associated recommendations, please click on the appropriate link below:</li>
        </ul>
        <RegimenCalculationsTable />
      </Col>
    </Row>
  );
}

export default References;
