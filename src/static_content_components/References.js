import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import RegimenCalculationsTable from './RegimenCalculationsTable';
import CountryWeightBSATable from './CountryWeightBSATable';
import DiagnosedTotalIncidenceTable from './DiagnosedTotalIncidenceTable';

const References = () => {
  return (
    <Row>
      <Col lg="2">
        <div className="sticky-top">
        <Nav className="flex-column" navbarScroll>
          <Nav.Link href="#start">Top of page</Nav.Link>
          <Nav.Link href="#country-weight-bsa">Country weight & BSA</Nav.Link>
          <Nav.Link href="#diagnosed-total-incidence">Diagnosed & total incidence</Nav.Link>
        </Nav>
        </div>
      </Col>
      <Col lg="10">
        <h1 id="start">References</h1>

{/* Regimen calculations*/}
        <h2>Regimen calculations</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>The International Society of Pediatric Oncology (SIOP) adapted treatment regimens (ATR) are employed as the default source where available because recommended regimens are based on international expert consensus and graded in accordance with LMIC capabilities.</li>
          <li>Where SIOP ATRs were unavailable, the model incorporates either LMIC-specific, non-SIOP publications or Essential Medicines List for Children (EMLc) treatment guidelines.</li>
          <li>Regimens were validated by both cancer and LMIC experts (listed below), intended to confirm included drug feasibility and accessibility.</li>
          <li>For a more comprehensive review of each cancer and associated recommendations, please click on the appropriate link below:</li>
        </ul>
        <RegimenCalculationsTable />

{/* Country weight & BSA*/}
        <h2 id="country-weight-bsa">Country weight & body surface area (BSA) data</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Methodology assumes that USAID DHS z-scores (reported ages 0-5) do not change from ages 5-14; LMIC-specific data for children >5 years old is unavailable.</li>
          <li>USAID DHS data was available for 74 countries; CDC data was available for the United States; this data was extrapolated to remaining countries/territories (n=200) based on geographic and income-status proximity.</li>
          <li>Height (cm) and weight (kg) for each country were determined by comparing a country's z-score to the relevant WHO growth curves (for weight, ages 0-10; for height, ages 0-14).</li>
          <li>To calculate weight for ages 10-14, leveraged CDC growth curves (height to weight ratio) to extrapolate WHO weight data beyond age 10; CDC growth curve data also used for the United States and other HICs.</li>
          <li>Using height and weight data, BSA (m2) was calculated by taking the square root of ((height * weight)/3600).</li>
          <li>Height, weight and BSA are each reported along four age brackets: &lt;1, 1-4, 5-9, and 10-14.</li>
        </ul>
        <CountryWeightBSATable />

{/* Diagnosed Total incidence*/}
        <h2 id="diagnosed-total-incidence">Diagnosed and total (diagnosed and undiagnosed) incidence data</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Diagnosed incidence reflective of actual number of patients; total incidence (diagnosed and undiagnosed) takes under-diagnosis into account.</li>
          <li>Incidence data only used as a back-up for health system or organization users who do not know their country/region's incidence data.</li>
          <li>Incidence calculations completed by model estimates, fully attributed to Zachary Ward, MPH, and PhD candidate at Harvard University.</li>
        </ul>
        <DiagnosedTotalIncidenceTable />
      </Col>
    </Row>
  );
}

export default References;
