import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import RegimenCalculationsTable from './tables/RegimenCalculationsTable';
import CountryWeightBSATable from './tables/CountryWeightBSATable';
import DiagnosedTotalIncidenceTable from './tables/DiagnosedTotalIncidenceTable';
import RiskStratificationTable from './tables/RiskStratificationTable';
import GenderDistributionTable from './tables/GenderDistributionTable';
import DrugPriceTable from './tables/DrugPriceTable';

const References = () => {
  return (
    <Row>
      <Col lg="2">
        <div className="sticky-top">
        <Nav className="flex-column" navbarScroll>
          <Nav.Link href="#start">Top of page</Nav.Link>
          <Nav.Link href="#country-weight-bsa">Country weight & BSA</Nav.Link>
          <Nav.Link href="#diagnosed-total-incidence">Diagnosed & total incidence</Nav.Link>
          <Nav.Link href="#risk-strat">Risk stratification data</Nav.Link>
          <Nav.Link href="#gender-dist">Gender distribution</Nav.Link>
          <Nav.Link href="#drug-price">Drug price data</Nav.Link>
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

{/* Diagnosed Total incidence */}
        <h2 id="diagnosed-total-incidence">Diagnosed and total (diagnosed and undiagnosed) incidence data</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Diagnosed incidence reflective of actual number of patients; total incidence (diagnosed and undiagnosed) takes under-diagnosis into account.</li>
          <li>Incidence data only used as a back-up for health system or organization users who do not know their country/region's incidence data.</li>
          <li>Incidence calculations completed by model estimates, fully attributed to Zachary Ward, MPH, and PhD candidate at Harvard University.</li>
        </ul>
        <DiagnosedTotalIncidenceTable />

{/* Risk stratification data */}
        <h2 id="risk-strat">Risk stratification data</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Patients are stratified along one of three axes depending on the cancer: (1) metastatic vs. non-metastatic, (2) risk status, and (3) stage at diagnosis.</li>
          <li>Risk stratification data is only incorporated in the model for cancers in which SIOP protocols specified that different patient segments received different treatment regimens. For example, SIOP protocols specify that all AML patients receive the same regimen regardless of patient characteristics, so segmentation data not required.</li>
          <li>For a comprehensive definition of each risk stratification, please use the relevant link below:</li>
        </ul>
        <RiskStratificationTable />

{/* Gender distribution by cancer */}
        <h2 id="gender-dist">Gender distribution by cancer</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Sex-based diagnostic bias is speculated to impact rate of diagnosis for male vs. female pediatric patients in some geographic regions and income-statuses; because of this, segmenting the percent of male and female patients per cancer without keeping rates consistent worldwide is critical to maximize accuracy</li>
        </ul>
        <GenderDistributionTable />

{/* Drug price data */}
        <h2 id="drug-price">Drug price data</h2>
        <p><strong>Notes</strong></p>
        <ul>
          <li>Data used to provide a price range for users as a comparison to user's known, input price data.</li>
          <li>Buyer and supplier data captured (user has option to view both); supplier is preferred because Management Sciences for Health (MSH) definition/expert consensus indicate supply-price is more reflective of on-the-ground prices in LMICs.</li>
          <li>IV and oral tablet formulations captured only due to relevance to oncology; oral solution, ointments, and other modes of administration (e.g. for steroids) not captured.</li>
          <li>If MSH only has one formulation with pricing data for either buyers or suppliers, that formulation's pricing data is used.</li>
          <li>If MSH has pricing data for both IV and oral formulations, IV pricing data is used in the model because IV is preferred route of administration for cancer treatment.</li>
          <li>If MSH has multiple IV formulations available for a given drug: (1) low is reflective of the absolute low across all formulations, (2) high is reflective of the absolute high across all formulations, and (3) median is reflective of the weighted average of each formulation's median price (for buyers and suppliers separately).</li>
          <li>ATRA and Arsenic Trioxide price data not available via MSH, so Pan-Canadian Oncology Drug Review is used as a proxy; Canadian prices are meant for comparison only and expected to be highly inconsistent with on-the-ground prices in LMICs.</li>
        </ul>
        <DrugPriceTable />
      </Col>
    </Row>
  );
}

export default References;
