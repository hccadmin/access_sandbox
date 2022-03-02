import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import LevelDefinitionsTable from './tables/LevelDefinitionsTable';
import RegimensByLevelTable from './tables/RegimensByLevelTable';
import IncidenceAssumptionsTable from './tables/IncidenceAssumptionsTable';

const Assumptions = () => {
  return (
    <Row>
      <Col lg="2">
        <div className="sticky-top">
        <Nav className="flex-column" navbarScroll>
          <Nav.Link href="#start">Top of page</Nav.Link>
          <Nav.Link href="#level-defs">Level definitions</Nav.Link>
          <Nav.Link href="#regimens-by-level">Regimens by level</Nav.Link>
          <Nav.Link href="#incidence-assumptions">Incidence assumptions</Nav.Link>
        </Nav>
        </div>
      </Col>
      <Col lg="10">
        <h1 id="start">Key assumptions and definitions</h1>
        <p>The Forecast Model is aspirational and for planning purposes, so all regimens assume the maximum possible dose.</p>
        <p>All patients are assumed to complete their full course of treatment (i.e., the model does not account for disease progression, treatment abandonment, or death during therapy).</p>
        <p>The model does not quantify additional drugs or services required as supportive care, nor does it quantify radiation or surgical need.</p>
        <p>The model quantifies first-line regimens only because there is less expert consensus and more variability in practice with use of second-line regimens and beyond, so large-scale systematic forecasting is less feasible; additional planning is required to forecast chemotherapy demand for subsequent lines of therapy.</p>

{/* Level definitions*/}
        <h2 id="level-defs">Infrastructure "level" definitions</h2>
        <p>Notes:</p>
        <ul>
          <li>Care capabilities vary significantly across countries and institutions; a universalized definition of each level of care, from 0-4, is provided below.</li>
          <li>The model only incorporates settings with Level 1-3 capabilities. Level 0 institutions are assumed to lack reliable access to the care and services that make the Forecast Model estimates meaningful, so are not included; Level 4 institutions are not included because they are largely confined to high-income countries or advanced institutions in other income settings, which are less likely to employ resource-adjusted treatment regimens.</li>
        </ul>
        <LevelDefinitionsTable />

{/* Regimens by level */}
        <h2 id="regimens-by-level">Chemotherapy regimens by infrastructure level</h2>
        <p>Because an institution's capabilities vary by level, the regimens an institution chooses to administer will vary according to level of supportive care available, etc.</p>
        <RegimensByLevelTable  />

{/* Incidence assumptions */}
        <h2 id="incidence-assumptions">Incidence assumptions</h2>
        <p>The percent cuts in incidence, outlined in table format below, are automatically calculated into the assumed incidence calculation based on the incidence microsimulation (for health system or organization users only).</p>
        <IncidenceAssumptionsTable  />
      </Col>
    </Row>
  );
}

export default Assumptions;
