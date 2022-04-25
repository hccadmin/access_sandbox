import React from 'react';
import Table from 'react-bootstrap/Table';

const RegimensByLevelTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered striped>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.21889">ALL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.21889">ALL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.21889">ALL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Faml.pdf?alt=media&token=80fd173a-30ba-49ce-90d0-19fa2b6b0889">AML</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.childrensoncologygroup.org/aaml1331">APL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.childrensoncologygroup.org/aaml1331">APL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fburkittlymphoma.pdf?alt=media&token=bdc2c924-a046-4180-aa14-fd5ca391faa8">Burkitt lymphoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fburkittlymphoma.pdf?alt=media&token=bdc2c924-a046-4180-aa14-fd5ca391faa8">Burkitt lymphoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fburkittlymphoma.pdf?alt=media&token=bdc2c924-a046-4180-aa14-fd5ca391faa8">Burkitt lymphoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273826/EML-20-eng.pdf?ua=1">DLBCL</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273825/EMLc-6-eng.pdf?ua=1">Ewing sarcoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fgermcelltumor.pdf?alt=media&token=634b0c6b-83f8-4ee0-83f6-28e46873155c">Germ cell tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fgermcelltumor.pdf?alt=media&token=634b0c6b-83f8-4ee0-83f6-28e46873155c">Germ cell tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fgermcelltumor.pdf?alt=media&token=634b0c6b-83f8-4ee0-83f6-28e46873155c">Germ cell tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhepatoblastoma.pdf?alt=media&token=3d72938e-2eed-4028-a3d9-0a1e1ea5f415">Hepatoblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhepatoblastoma.pdf?alt=media&token=3d72938e-2eed-4028-a3d9-0a1e1ea5f415">Hepatoblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhodgkinslymphoma.pdf?alt=media&token=3b3dc626-a033-4d8d-a347-191638eadff1">Hodgkin's lymphoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhodgkinslymphoma.pdf?alt=media&token=3b3dc626-a033-4d8d-a347-191638eadff1">Hodgkin's lymphoma</a>
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
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhodgkinslymphoma.pdf?alt=media&token=3b3dc626-a033-4d8d-a347-191638eadff1">Hodgkin's lymphoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://siop-online.org/wp-content/uploads/2016/10/PBC-PODC-KS-Guidelines.pdf">Kaposi sarcoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.26737">LGG</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.26737">LGG</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25501">Neuroblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25501">Neuroblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25501">Neuroblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24468">Retinoblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24468">Retinoblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273825/EMLc-6-eng.pdf?ua=1">Rhabdomyeosarcoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25313">Standard-risk medulloblastoma</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default RegimensByLevelTable;
