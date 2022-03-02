import React from 'react';
import Table from 'react-bootstrap/Table';

const IncidenceAssumptionsTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered>
        <thead>
          <tr>
            <th>
              Cancer
            </th>
            <th>
              Percent cut
            </th>
            <th>
              Commentary
            </th>
            <th>
              References
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              AML/ALL
            </td>
            <td>
              6.5%
            </td>
            <td>
              <p>APL is a sub-type of AML but IICC-3 incidence data is reported in aggregate; to split the data:</p>
              <ul>
                <li>AML SEER data (2012-2016) shows an incidence of ~0.92/100,000 for children &lt; 20 years old</li>
                <li>A retrospective APL SEER analysis (1975-2008) shows an incidence of ~0.06/100,000 for children &lt; 20 years old</li>
                <li>Combined, this estimates that ~6.5% of AML patients are APL, and ~93.5% are AML; this falls within the expected range of 5-10% (note that adult data is often a larger sub-set)</li>
              </ul>
            </td>
            <td>
              <p><a href="https://seer.cancer.gov/csr/1975_2016/browse_csr.php?sectionSEL=13&pageSEL=sect_13_table.13" target="_blank">SEER Cancer Statistics Review (CSR) 1975-2016</a></p>
              <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4180246/" target="_blank">PubMed Central: Acute Promyelocytic Leukemia</a></p>
              <p><a href="https://www.ncbi.nlm.nih.gov/pubmed/25445717" target="_blank">PubMed: Global characteristics of childhood acute promyelocytic leukemia</a></p>
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/19840521/" target="_blank">PubMed: Acute Promyelocytic Leukemia in childhood</a></p>
            </td>
          </tr>
          <tr>
            <td>
              Standard-rish medulloblastoma
            </td>
            <td>
              8.25%
            </td>
            <td>
              <p>IICC-3 incidence data reports "CNS Neoplasms" in aggregate without segmenting out standard-risk medulloblastoma; to split the data:</p>
              <ul>
                <li>Standard-risk medulloblastoma accounts for 8.2% of CNS neoplasms, which is a far lower subset than typical for adult populations (15-20%)</li>
                <li>Medulloblastoma literature review overview estimates ~9.2% of pediatric CNS neoplasms; CBTRUS estimates ~7.3% of pediatric CNS neoplasms = averaged out to 8.25% of cases</li>
              </ul>
            </td>
            <td>
              <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4995146/" target="_blank">PubMed Central: Medulloblastoma</a></p>
              <p><a href="https://pubmed.ncbi.nlm.nih.gov/26511214/" target="_blank">PubMed: CBTRUS Statistical Report</a></p>
            </td>
          </tr>
          <tr>
            <td>
              LGG
            </td>
            <td>
              28.5%
            </td>
            <td>
              <p>IICC-3 incidence data reports "CNS neoplasms" in aggregate without segmenting out LGG; to split the data:</p>
              <ul>
                <li>Gliomas account for ~28.5% of CNS neoplasms</li>
                <li>Medulloblastoma literature review estimates ~30% of pediatric CNS neoplasms; CBTRUS estimates 27% of pediatric CNS neoplasms = averaged out to 28.5% of cases</li>
              </ul>
            </td>
            <td>
              <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3983820/" target="_blank">PubMed Central: Low-Grade Gliomas</a></p>
              <p><a href="https://www.ncbi.nlm.nih.gov/pubmed/26511214" target="_blank">PubMed: CBTRUS Statistical Report</a></p>
            </td>
          </tr>
          <tr>
            <td>
              LGG
            </td>
            <td>
              64%
            </td>
            <td>
              <p>Reflects subset of total gliomas attributed to low-grade-glioma specifically</p>
              <p>Dana-Farber source estimates 66% for pediatric-specific population; other sources estimate 62% for pediatric-specific population = averaged out to 64%</p>
              <p>Data availability is limited and more robust data is needed</p>
            </td>
            <td>
              <p><a href="http://www.danafarberbostonchildrens.org/conditions/brain-tumor/low-grade-glioma.aspx" target="_blank">Dana-Farber Cancer Institute: Childhood Low-Grade Gliomas</a></p>
              <p><a href="https://acsjournals.onlinelibrary.wiley.com/doi/full/10.1002/cncr.29907" target="_blank">ACS Journal: Clinical and treatment factors determining long-term outcomes for adult survivors of childhood low-grade glioma</a></p>
              <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2917804/" target="_blank">PubMed Central: Pediatric Low-Grade Gliomas</a></p>
            </td>
          </tr>
          <tr>
            <td>
              Burkitt lymphoma
            </td>
            <td>
              40%
            </td>
            <td>
              <p>Reflects subset of total pediatric NHL cases attributed to Burkitt lymphoma</p>
              <p>Note that this is a significantly larger subset than in adult NHL populations</p>
              <p>IICC-3 data segments out Burkitt lymphoma incidence data, so number not required for calculation</p>
            </td>
            <td>
              <p><a href="https://www.cancer.org/cancer/childhood-non-hodgkin-lymphoma/about/types-non-hodgkin-children.html" target="_blank">ACS: Types of Non-Hodgkin Lymphoma in Children</a></p>
            </td>
          </tr>
          <tr>
            <td>
              Lymphoblastic lymphoma
            </td>
            <td>
              30%
            </td>
            <td>
              <p>Reflects subset of total pediatric NHL cases attributed to lymphoblastic lymphoma</p>
              <p>Note that this is a significantly larger subset than in adult NHL populations</p>
              <p>IICC-3 incidence data reports "NHL (excluding Burkitt)" in aggregate without segmenting out lymphoblastic lymphoma; to calculate, the model estimates:</p>
              <ul>
                <li>NHL (excluding Burkitt lymphoma): 100% - 40% (above) = 60%</li>
                <li>Percent of NHL (excluding Burkitt lymphoma) attributed to lymphoblastic lymphoma: 30% / 60% = 50%</li>
              </ul>
            </td>
            <td>
              <p><a href="https://www.cancer.org/cancer/childhood-non-hodgkin-lymphoma/about/types-non-hodgkin-children.html" target="_blank">ACS: Types of Non-Hodgkin Lymphoma in Children</a></p>
            </td>
          </tr>
          <tr>
            <td>
              DLBCL
            </td>
            <td>
              15%
            </td>
            <td>
              <p>Reflects subset of total pediatric NHL cases attributed to DLBCL</p>
              <p>Note that this is a lower subset than in adult NHL populations</p>
              <p>IICC-3 incidence data reports "NHL (excluding Burkitt)" in aggregate without segmenting out DLBCL; to calculate, the model estimates:</p>
              <ul>
                <li>NHL (excluding Burkitt lymphoma): 100% - 40% (above) = 60%</li>
                <li>Percent of NHL (excluding Burkitt lymphoma) attributed to DLBCL: 15% / 60% = 25%</li>
              </ul>
            </td>
            <td>
              <p><a href="https://www.cancer.org/cancer/childhood-non-hodgkin-lymphoma/about/types-non-hodgkin-children.html" target="_blank">ACS: Types of Non-Hodgkin Lymphoma in Children</a></p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default IncidenceAssumptionsTable;
