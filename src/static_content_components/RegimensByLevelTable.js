import React from 'react';
import Table from 'react-bootstrap/Table';

const RegimensByLevelTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered>
        <thead>
          <tr>
            <th>
              Cancer
            </th>
            <th>
              Patient segment
            </th>
            <th>
              Level 1 Default Regimen
            </th>
            <th>
              Level 2 Default Regimen
            </th>
            <th>
              Level 3 Default Regimen
            </th>
            <th>
              Rationale for Default Regimen Selection:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              ALL
            </td>
            <td>
              Low risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              Regimen source (Hunger et al 2009) recommendation
            </td>
          </tr>
          <tr>
            <td>
              ALL
            </td>
            <td>
              High risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              ALL Regimen 3
            </td>
            <td>
              Regimen source (Hunger et al 2009) recommendation
            </td>
          </tr>
          <tr>
            <td>
              ALL
            </td>
            <td>
              Very high risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              ALL Regimen 4
            </td>
            <td>
              Regimen source (Hunger et al 2009) recommendation
            </td>
          </tr>
          <tr>
            <td>
              AML
            </td>
            <td>
            </td>
            <td>
             Low-dose induction
            </td>
            <td>
              Standard-dose induction
            </td>
            <td>
              Standard-dose induction
            </td>
            <td>
              Regimen source (SIOP PODC) does not provide a recommendation; low-dose regimen assumed better suited for Level 1 institutions due to decreased need to manage significant toxicity
            </td>
          </tr>
          <tr>
            <td>
              APL
            </td>
            <td>
              Standard risk
            </td>
            <td>
              Standard dose
            </td>
            <td>
              Standard dose
            </td>
            <td>
              Standard dose
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              APL
            </td>
            <td>
              High risk
            </td>
            <td>
              High-Risk dose
            </td>
            <td>
              High-risk dose
            </td>
            <td>
              High-risk dose
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Burkitt lymphoma
            </td>
            <td>
              Stage 1/2
            </td>
            <td>
              Burkitt lymphoma Regimen 1
            </td>
            <td>
              Burkitt lymphoma Regimen 1
            </td>
            <td>
              Burkitt lymphoma Regimen 1
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Burkitt lymphoma
            </td>
            <td>
              Stage 3
            </td>
            <td>
              Burkitt lymphoma Regimen 2
            </td>
            <td>
              Burkitt lymphoma Regimen 2
            </td>
            <td>
              Burkitt lymphoma Regimen 2
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Burkitt lymphoma
            </td>
            <td>
              Stage 4
            </td>
            <td>
              Burkitt lymphoma Regimen 3
            </td>
            <td>
              Burkitt lymphoma Regimen 3
            </td>
            <td>
              Burkitt lymphoma Regimen 3
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              DLBCL
            </td>
            <td>
               
            </td>
            <td>
              CHOP
            </td>
            <td>
              CHOP
            </td>
            <td>
              R-CHOP
            </td>
            <td>
              Rituximab expected to be unaffordable/inaccessible in most LMIC settings
            </td>
          </tr>
          <tr>
            <td>
              Ewing sarcoma
            </td>
            <td>
               
            </td>
            <td>
              AEWS1031
            </td>
            <td>
              AEWS1031
            </td>
            <td>
              AEWS1031
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Germ cell tumor
            </td>
            <td>
              Low risk
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Germ cell tumor
            </td>
            <td>
              Standard risk
            </td>
            <td>
              PEB
            </td>
            <td>
              PEB
            </td>
            <td>
              PEB
            </td>
            <td>
              Cancer expert recommendation not to vary regimen across levels, based on personal LMIC experience
            </td>
          </tr>
          <tr>
            <td>
              Germ cell tumor
            </td>
            <td>
              Poor risk
            </td>
            <td>
              BEP (4 Cycles)
            </td>
            <td>
              BEP (4 Cycles)
            </td>
            <td>
              BEP (4 Cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Hepatoblastoma
            </td>
            <td>
              Non-metastatic
            </td>
            <td>
              Cisplatin Monotherapy
            </td>
            <td>
              Cisplatin Monotherapy
            </td>
            <td>
              Cisplatin Monotherapy
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Hepatoblastoma
            </td>
            <td>
              Metastatic
            </td>
            <td>
              Cisplatin Monotherapy
            </td>
            <td>
              Cisplatin Monotherapy
            </td>
            <td>
              Cisplatin + Carboplatin + Doxorubicin
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Hodgkin's lymphoma
            </td>
            <td>
              Low risk
            </td>
            <td>
              ABVD (4 cycles)
            </td>
            <td>
              ABVD (4 cycles)
            </td>
            <td>
              ABVD (4 cycles)
            </td>
            <td rowspan="3">
              SIOP PODC indicates which regimens are expected to be available in which settings, but does not provide a recommendation; default determined in conjunction with cancer expert
            </td>
          </tr>
          <tr>
            <td>
              Hodgkin's lymphoma
            </td>
            <td>
              Intermediate risk
            </td>
            <td>
              ABVD (6 cycles)
            </td>
            <td>
              ABVD (6 cycles)
            </td>
            <td>
              ABVD (6 cycles)
            </td>
          </tr>
          <tr>
            <td>
              Hodgkin's Lymphoma
            </td>
            <td>
              High risk
            </td>
            <td>
              ABVD (6 cycles)
            </td>
            <td>
              ABVD (6 cycles)
            </td>
            <td>
              ABVD (6 cycles)
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>
              Kaposi sarcoma
            </td>
            <td>
               
            </td>
            <td>
              Antiretrovirals, only
            </td>
            <td>
              Vincristine Monotherapy
            </td>
            <td>
              ABV standard dose (with Vincristine)
            </td>
            <td>
              Regimen source (SIOP PODC) does not provide a recommendation but indicates that vincristine-containing regimens are more efficacious; combination regimen only assumed for Level 3 institutions due to increased ability to manage toxicity
            </td>
          </tr>
          <tr>
            <td>
              LGG
            </td>
            <td>
              Fully resectable
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              LGG
            </td>
            <td>
              Unresectable/Incomplete resection
            </td>
            <td>
              Carboplatin + Vincristine
            </td>
            <td>
              Carboplatin + Vincristine
            </td>
            <td>
              Carboplatin + Vincristine
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Lymphoblastic lymphoma
            </td>
            <td>
              Low risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              Assumed the same as ALL
            </td>
          </tr>
          <tr>
            <td>
              Lymphoblastic lymphoma
            </td>
            <td>
              High risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              ALL Regimen 3
            </td>
            <td>
              Assumed the same as ALL
            </td>
          </tr>
          <tr>
            <td>
              Lymphoblastic lymphoma
            </td>
            <td>
              Very high risk
            </td>
            <td>
              ALL Regimen 1
            </td>
            <td>
              ALL Regimen 2
            </td>
            <td>
              ALL Regimen 4
            </td>
            <td>
              Assumed the same as ALL
            </td>
          </tr>
          <tr>
            <td>
              Neuroblastoma
            </td>
            <td>
              Low risk
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              Surgery, only
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Neuroblastoma
            </td>
            <td>
              Intermediate risk
            </td>
            <td>
              80% dose intermediate risk regimen
            </td>
            <td>
              100% dose intermediate risk regimen
            </td>
            <td>
              100% dose intermediate risk regimen
            </td>
            <td>
              Regimen source (SIOP PODC) recommendation
            </td>
          </tr>
          <tr>
            <td>
              Neuroblastoma
            </td>
            <td>
              High risk
            </td>
            <td>
              Palliative Cyclophosphamide Monotherapy
            </td>
            <td>
              Modified POG-9341
            </td>
            <td>
              Modified POG-9341
            </td>
            <td>
              Regimen source (SIOP PODC) recommendation; additional option for Level 3 high-risk patients with transplant excluded because transplant capabilities not expected to be feasible for most users
            </td>
          </tr>
          <tr>
            <td>
              Osteosarcoma
            </td>
            <td>
               
            </td>
            <td>
              Methotrexate NOT Feasible
            </td>
            <td>
              Methotrexate-Feasible
            </td>
            <td>
              Methotrexate-Feasible
            </td>
            <td>
              Regimen source (SIOP PODC) distinguishes between Methotrexate-Not-Feasible and Methotrexate-Feasible, but does not assign infrastructure levels; Methotrexate-Not-Feasible regimen assumed better suited for Level 1 institutions due to decreased need to manage toxicity and complicated administration protocols
            </td>
          </tr>
          <tr>
            <td>
              Retinoblastoma
            </td>
            <td>
              Non-metastatic
            </td>
            <td>
              CEV
            </td>
            <td>
              CEV
            </td>
            <td>
              CEV
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Retinoblastoma
            </td>
            <td>
              Metastatic
            </td>
            <td>
              CHO
            </td>
            <td>
              CHO
            </td>
            <td>
              CHO
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Rhabdomyosarcoma
            </td>
            <td>
               
            </td>
            <td>
              VAC
            </td>
            <td>
              VAC
            </td>
            <td>
              VAC
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Standard-risk medulloblastoma
            </td>
            <td>
               
            </td>
            <td>
              Cisplatin-based combination
            </td>
            <td>
              Cisplatin + Carboplatin-based combination
            </td>
            <td>
              Cisplatin + Carboplatin-based combination
            </td>
            <td>
              Regimen source (SIOP PODC) recommendation
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Low Risk Stage 1
            </td>
            <td>
              Observation, only
            </td>
            <td>
              Observation, only
            </td>
            <td>
              Observation, only
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Low Risk Stage 2
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Low Risk Stage 3
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Intermediate Risk Stage 1
            </td>
            <td>
              Vincristine + Actinomycin D (1 cycle)
            </td>
            <td>
              Vincristine + Actinomycin D (1 cycle)
            </td>
            <td>
              Vincristine + Actinomycin D (1 cycle)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Intermediate Risk Stage 2
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D (5 cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              Intermediate Risk Stage 3
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
          <tr>
            <td>
              Wilms tumor
            </td>
            <td>
              High Risk All Stages
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              Vincristine + Actinomycin D + Doxorubicin (5 cycles)
            </td>
            <td>
              N/A - regimen selection does not vary by level selection
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default RegimensByLevelTable;
