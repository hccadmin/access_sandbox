import React from 'react';
import Table from 'react-bootstrap/Table';

const RegimenCalculationsTable = () => {
  return (
    <div className="forecast-table">
      <Table bordered>
        <thead>
          <tr>
            <th>
              Cancer
            </th>
            <th>
              Cancer expert
            </th>
            <th>
              Source
            </th>
            <th>
              Cancer-specific caveats
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.21889">ALL</a>
            </td>
            <td>
              Stephen P Hunger, MD
            </td>
            <td>
              Hunger et al 2009
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Faml.pdf?alt=media&token=80fd173a-30ba-49ce-90d0-19fa2b6b0889">AML</a>
            </td>
            <td>
              Gertjan Kaspers, MD
            </td>
            <td>
              SIOP PODC (2019)
            </td>
            <td>
              <p>SIOP PODC prefers mitoxantrone inclusion for both standard- and low-dose induction regimens; because mitoxantrone is not on the WHO EMLc and therefore may be less accessible in some LMICs, the model prefers SIOP PODC’s second choice regimen with daunorubicin</p>
              <p>Pre-phase chemotherapy treatment excluded based on LMIC on-the-ground intel</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.childrensoncologygroup.org/aaml1331">APL</a>
            </td>
            <td>
              Matthew A. Kutny, MD
            </td>
            <td>
              AAML 1331 (COG)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fburkittlymphoma.pdf?alt=media&token=bdc2c924-a046-4180-aa14-fd5ca391faa8">Burkitt lymphoma</a>
            </td>
            <td>
              Elizabeth Molyneux, MBBS, FRCP, FRCPCH, FCEM, DSc h.c
            </td>
            <td>
              SIOP PODC (2012)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273826/EML-20-eng.pdf?ua=1">DLBCL</a>
            </td>
            <td>
              -
            </td>
            <td>
              WHO EML (20th edition)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273825/EMLc-6-eng.pdf?ua=1">Ewing sarcoma</a>
            </td>
            <td>
              -
            </td>
            <td>
              WHO EML (6th edition)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fgermcelltumor.pdf?alt=media&token=634b0c6b-83f8-4ee0-83f6-28e46873155c">Germ cell tumor</a>
            </td>
            <td>
              A Lindsay Frazier, MD
            </td>
            <td>
              SIOP PODC (2019)
            </td>
            <td>
              <p>Chemotherapy only used for standard- and poor-risk patients; low-risk patients are treated with surgery only, and do not receive chemotherapy</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhepatoblastoma.pdf?alt=media&token=3d72938e-2eed-4028-a3d9-0a1e1ea5f415">Hepatoblastoma</a>
            </td>
            <td>
              Michael Sullivan, MBChB, DCH, FRACP, PhD
            </td>
            <td>
              SIOP PODC (2019)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/access-forecast-dev.appspot.com/o/regimen_docs%2Fhodgkinslymphoma.pdf?alt=media&token=3b3dc626-a033-4d8d-a347-191638eadff1">Hodgkin's lymphoma</a>
            </td>
            <td>
              Monika Metzger, MD
            </td>
            <td>
              SIOP PODC (2019)
            </td>
            <td>
              <p>SIOP PODC captures two additional regimens (MOPP & Stanford V) that are not provided as options in the model; this is because both regimens include mechlorethamine, which is not on the WHO EMLc and therefore may be less accessible in some LMICs</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://siop-online.org/wp-content/uploads/2016/10/PBC-PODC-KS-Guidelines.pdf">Kaposi sarcoma</a>
            </td>
            <td>
              Elizabeth Molyneux, MBBS, FRCP, FRCPCH, FCEM, DSc h.c.
            </td>
            <td>
              SIOP PODC (2013)
            </td>
            <td>
              <p>SIOP PODC also provides thalidomide monotherapy as an option for all patients; thalidomide not captured in the model because it is not on the WHO EMLc and therefore may be less accessible in some LMICs</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.26737">LGG</a>
            </td>
            <td>
              Simon Bailey, MBChB, PhD
            </td>
            <td>
              SIOP PODC (2018)
            </td>
            <td>
              <p>Chemotherapy only used for unresectable or incomplete resection patients; patients treated with successful resection do not receive chemotherapy</p>
            </td>
          </tr>
          <tr>
            <td>
              Lymphoblastic lymphoma
            </td>
            <td>
              Treated with the same regimens as ALL
            </td>
            <td>
              N/A
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25501">Neuroblastoma</a>
            </td>
            <td>
              Nehal Parikh, MD
            </td>
            <td>
              SIOP PODC (2015)
            </td>
            <td>
              <p>Chemotherapy only used for intermediate- and high-risk patients; low-risk patients are treated with surgery only, and do not receive chemotherapy</p>
              <p>SIOP PODC recommends an additional high-risk protocol not provided as an option in the model; protocol excluded because it necessitates transplant, which is not expected to be readily available in most LMICs</p>
            </td>
          </tr>
          <tr>
            <td>
              Osteosarcoma
            </td>
            <td>
              Carlos Rodriguez-Galindo, MD; Paola Friedrich, MD, MPH
            </td>
            <td>
              SIOP PODC (2019)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24468">Retinoblastoma</a>
            </td>
            <td>
              Guillermo Chantada, MD
            </td>
            <td>
              SIOP PODC (2013)
            </td>
            <td>
              <p>SIOP PODC includes three additional regimens for metastatic patients (“Regimen 3, 4, 5”); regimens not captured because expected to be used infrequently in LMICs compared to “Regimen 2”</p>
              <p>Number of cycles increased to 6 (SIOP recommends 3) due to LMIC expert consensus</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://apps.who.int/iris/bitstream/handle/10665/273825/EMLc-6-eng.pdf?ua=1">Rhabdomyeosarcoma</a>
            </td>
            <td>
              -
            </td>
            <td>
              WHO EMLc (6th Edition)
            </td>
            <td>
              <p>EMLc provides the VIA regimen as an additional option; regimen not captured because ifosfamide expected to be less accessible in LMICs compared to cyclophosphamide</p>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.25313">Standard-risk medulloblastoma</a>
            </td>
            <td>
              Simon Bailey, MBChB, PhD
            </td>
            <td>
              SIOP PODC (2015)
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.24321">Wilms tumor</a>
            </td>
            <td>
              Trijn Israels, MD, PhD
            </td>
            <td>
              SIOP PODC (2013)
            </td>
            <td>
              -
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default RegimenCalculationsTable;
