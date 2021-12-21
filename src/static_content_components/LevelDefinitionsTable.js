import React from 'react';
import Table from 'react-bootstrap/Table';

const LevelDefinitionsTable = () => {
  return (
    <div className="forecast-table">
      <Table responsive="xl" bordered>
        <thead>
          <tr>
            <th>
              Services
            </th>
            <th>
              Level 0
            </th>
            <th>
              Level 1
            </th>
            <th>
              Level 2
            </th>
            <th>
              Level 3
            </th>
            <th>
              Level 4
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              General description
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.26879">Pediatric cancer unit general description</a>
            </td>
            <td>
              Pilot project
            </td>
            <td>
              Some basic oncology services
            </td>
            <td>
              Established pediatric oncology program with most basic services and a few state‐of‐the‐art services
            </td>
            <td>
              Pediatric oncology program with all essential services and most state‐of‐the‐art services
            </td>
            <td>
              Pediatric oncology center of excellence; state‐of‐the‐art services and some highly specialized services (e.g., proton beam radiation therapy, MIBG therapy, phase I studies)
            </td>
          </tr>
          <tr>
            <td>
              Typical settings
            </td>
            <td>
              Centers in LIC in disadvantaged areas
            </td>
            <td>
              Centers with relatively greater resources in LIC, disadvantaged areas in lower MIC
            </td>
            <td>
              Centers with relatively greater resources in lower MIC, disadvantaged centers in upper MIC
            </td>
            <td>
              Many centers in upper MIC, most centers in HIC
            </td>
            <td>
              Selected super specialty centers that offer very advanced and high‐quality tertiary and quaternary care
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Medical facilities
            </td>
          </tr>
          <tr>
            <td>
              Inpatient ward
            </td>
            <td>
              No pediatric oncology inpatient unit
            </td>
            <td>
              Area of the hospital where children with cancer are admitted when possible; frequent overflow to other wards; no fixed staff
            </td>
            <td>
              Pediatric oncology inpatient ward available to most patients; limited fixed staff (e.g., oncology nurse permanently assigned)
            </td>
            <td>
              Pediatric oncology inpatient ward separate from inpatient units for other patients; sufficient beds such that oncology patients rarely require admission to other wards
            </td>
            <td>
              Subspecialized pediatric oncology wards (e.g., transplant, neurooncology, acute myeloid leukemia)
            </td>
          </tr>
          <tr>
            <td>
              Inpatient ward effective access
            </td>
            <td>
              Very limited access (e.g., due to lack of beds or high cost relative to typical family's salary)
            </td>
            <td>
              Accessible to some patients sometimes
            </td>
            <td>
              Accessible to most patients most of the time
            </td>
            <td>
              Accessible to all patients almost always
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Isolation rooms for infected patients
            </td>
            <td>
              None
            </td>
            <td>
              Isolation rooms exist but rarely available
            </td>
            <td>
              Isolation rooms usually available when needed
            </td>
            <td>
              Isolation rooms almost always available when needed
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Outpatient facilities
            </td>
            <td>
              None
            </td>
            <td>
              Outpatient area for chemotherapy and some emergency care; services for surgery/diagnostic imaging may be primarily for adults but can partially accommodate pediatric patient needs
            </td>
            <td>
              Outpatient area for chemotherapy and some emergency care available most of the time; services that can mostly accommodate pediatric patient needs for surgery and diagnostic imaging
            </td>
            <td>
              Full‐service outpatient care available 24 hr/day for chemotherapy and emergencies; pediatric‐specific surgery and diagnostic imaging suites and services
            </td>
            <td>
              Outpatient satellite facilities available to provide care close to home
            </td>
          </tr>
          <tr>
            <td>
              Outpatient facilities effective access
            </td>
            <td>
              Very limited access (e.g., due to lack of space or high cost relative to typical family's salary)
            </td>
            <td>
              Accessible to some patients sometimes
            </td>
            <td>
              Accessible to most patients most of the time
            </td>
            <td>
              Accessible to all patients almost always
            </td>
            <td>
               
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Radiation therapy
            </td>
          </tr>
          <tr>
            <td>
              Radiation therapy facilities
            </td>
            <td>
              None
            </td>
            <td>
              Cobalt machine
            </td>
            <td>
              Linear accelerator or cobalt machine (cobalt machine is preferable in areas with poor electricity supply)
            </td>
            <td>
              Linear accelerator with fully integrated planning system
            </td>
            <td>
              Proton beam facility; advanced photon radiotherapy
            </td>
          </tr>
          <tr>
            <td>
              Radiation therapy planning tools
            </td>
            <td>
              None
            </td>
            <td>
              2D planning
            </td>
            <td>
              Some 3D planning available to some patients
            </td>
            <td>
              3D planning, full conformal therapy available; intensity‐modulated and volumetric modulated arc therapy (VMAT) available to some patients
            </td>
            <td>
              All specialized techniques available, including proton beam, radiosurgery, and VMAT
            </td>
          </tr>
          <tr>
            <td>
              Radiation therapists
            </td>
            <td>
              None
            </td>
            <td>
              Radiation oncologists with adult expertise
            </td>
            <td>
              Radiation oncologists with some pediatric experience
            </td>
            <td>
              Radiation oncologists with pediatric expertise
            </td>
            <td>
              Pediatric radiation oncologists with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Anesthesia for radiation therapy
            </td>
            <td>
              None
            </td>
            <td>
              Sedation only
            </td>
            <td>
              Sedation/anesthesia from general anesthesiologists available for some pediatric patients
            </td>
            <td>
              Sedation/anesthesia from pediatric anesthesiologists available for most pediatric patients
            </td>
            <td>
              Experienced pediatric anesthesiologists routinely available for all pediatric patients requiring radiation therapy
            </td>
          </tr>
          <tr>
          <td>
              Radiation therapy personnel (medical physicists, radiation therapy technicians)
            </td>
            <td>
              None
            </td>
            <td>
              Few personnel, no pediatric expertise
            </td>
            <td>
              Adequate personnel with some pediatric expertise
            </td>
            <td>
              Adequate personnel with experience using advanced techniques and with pediatric expertise
            </td>
            <td>
              Subspecialty expertise in specific pediatric cancer types (e.g., brain cancers)
            </td>
          </tr>
          <tr>
            <td>
              Radiation therapy effective access
            </td>
            <td>
              None
            </td>
            <td>
              Radiation therapy available to some patients some of the time; frequent delays
            </td>
            <td>
              Conformal radiation therapy available to most patients most of the time; occasional delays
            </td>
            <td>
              Modern radiation therapy options reliably available to all patients in a timely way
            </td>
            <td>
              Full range of radiation therapy options available to all patients
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Access to medications
            </td>
          </tr>
          <tr>
            <td>
              Antineoplastic drug availability
            </td>
            <td>
              Very limited access to a small selection of oncology drugs
            </td>
            <td>
              Access to a limited selection of oncology drugs; frequent shortages
            </td>
            <td>
              Access to most essential oncology drugs; occasional shortages
            </td>
            <td>
              Access to almost all commercially available drugs; rare shortages
            </td>
            <td>
              Access to all approved drugs, plus phase I and phase II studies
            </td>
          </tr>
          <tr>
            <td>
              Antineoplastic drug quality
            </td>
            <td>
              Low or unknown quality
            </td>
            <td>
              Variable or unknown quality
            </td>
            <td>
              Occasional access to high‐quality branded medicines; generic medicines of mostly good quality
            </td>
            <td>
              Consistent access to high‐quality branded and generic medicines
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Antineoplastic drug effective access
            </td>
            <td>
              Dependent entirely on NGO support or out‐of‐pocket payment
            </td>
            <td>
              Limited supply of basic drugs accessible from the health system; dependent on NGO support or out‐of‐pocket payment for some drugs much of the time or most drugs some of the time
            </td>
            <td>
              Basic drugs provided by the health system, more expensive drugs may depend on private insurance or NGO support
            </td>
            <td>
              Most oncology drugs provided by the health system or private insurance available to most patients
            </td>
            <td>
              Full access to all drugs by all patients
            </td>
          </tr>
          <tr>
            <td>
              Antimicrobial drug availability
            </td>
            <td>
              Limited selection, delayed access
            </td>
            <td>
              Limited selection available to most patients, some delays
            </td>
            <td>
              Wide selection available to most patients with minimal delays, some antifungals available
            </td>
            <td>
              Wide selection of antibiotics, antifungal agents, and antiviral agents available to all patients with rare delays
            </td>
            <td>
              Access to compassionate use (single‐patient exceptions for unapproved medicines) and protocols for new antimicrobials
            </td>
          </tr>
          <tr>
            <td>
              Antimicrobial drug effective access
            </td>
            <td>
              Dependent entirely on NGO support or out‐of‐pocket payment
            </td>
            <td>
              Limited supply of basic drugs from the health system; dependent on NGO support for some drugs much of the time or most drugs some of the time
            </td>
            <td>
              Basic drugs provided by the health system, more expensive drugs may depend on private insurance or NGO support
            </td>
            <td>
              Most antimicrobial drugs provided by the health system or private insurance available to most patients
            </td>
            <td>
              Full access to all drugs by all patients
            </td>
          </tr>
          <tr>
            <td>
              Analgesic drug availability
            </td>
            <td>
              Limited selection of analgesics, delayed access
            </td>
            <td>
              Limited selection of opioid and non‐opioid analgesics available to most patients, some delays
            </td>
            <td>
              Moderate selection of opioid and non‐opioid analgesics available to most patients with minimal delays
            </td>
            <td>
              Wide selection of analgesic agents, access to multiple pain management modalities (e.g., nerve block); pain management specialists available when needed
            </td>
            <td>
              Wide range of enteral and parenteral opioid and non‐opioid analgesics; full spectrum of pain management modalities; pain management specialists embedded in the multidisciplinary team
            </td>
          </tr>
          <tr>
            <td>
              Analgesic effective access
            </td>
            <td>
              Dependent entirely on NGO support or out‐of‐pocket payment; significant regulatory or cultural barriers
            </td>
            <td>
              Limited supply of basic drugs from the health system; dependent on NGO support or out‐of‐pocket payment for much of the time; some regulatory and cultural barriers
            </td>
            <td>
              Basic drugs provided by the health system, more expensive drugs may depend on private insurance or NGO support; few regulatory or cultural barriers
            </td>
            <td>
              Most drugs provided by the health system or private insurance available to most patients; no regulatory or cultural barriers
            </td>
            <td>
              Full access by all patients with no delays
            </td>
          </tr>
          <tr>
            <td>
              Supportive care drug availability (e.g., antiemetics, constipation management, growth factors)
            </td>
            <td>
              Limited selection, delayed access
            </td>
            <td>
              Limited selection available to most patients, some delays
            </td>
            <td>
              Wide selection available to most patients with minimal delays
            </td>
            <td>
              Wide selection of antiemetics, growth factors, and other supportive care medicines available to all patients with rare delays
            </td>
            <td>
              Access to compassionate use protocols for new and experimental supportive care medicines
            </td>
          </tr>
          <tr>
            <td>
              Supportive care drug effective access
            </td>
            <td>
              Dependent entirely on NGO support or out‐of‐pocket payment
            </td>
            <td>
              Limited supply of basic drugs from the health system; dependent on NGO support or out‐of‐pocket payment for some drugs much of the time or most drugs some of the time
            </td>
            <td>
              Basic drugs provided by the health system, more expensive drugs may depend on private insurance or NGO support
            </td>
            <td>
              Most oncology drugs provided by the health system or private insurance available to most patients
            </td>
            <td>
              Full access to all drugs by all patients
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Supportive care
            </td>
          </tr>
          <tr>
            <td>
              Blood product availability
            </td>
            <td>
              Whole blood
            </td>
            <td>
              Some blood products available sometimes for some patients; no irradiation/filtration possible
            </td>
            <td>
              Red blood cells, platelets, cryoprecipitate, and fresh frozen plasma often available; irradiated/filtered blood products sometimes available 
            </td>
            <td>
              Ready availability of all blood products, including pheresed platelet units; routine access to irradiated/filtered blood products
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Blood product effective access
            </td>
            <td>
              Accessible to a few patients; long and frequent delays
            </td>
            <td>
              Accessible sometimes for some patients; frequent delays
            </td>
            <td>
              Usually accessible to most patients within a reasonable time period
            </td>
            <td>
              Accessible to all patients within 2 hr
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Intensive care availability
            </td>
            <td>
              None
            </td>
            <td>
              Intensive care unit present; limited equipment; personnel with limited pediatric experience
            </td>
            <td>
              Mechanical ventilators, inotropes, central venous access, dialysis; personnel with some pediatric expertise
            </td>
            <td>
              Pediatric intensive care unit with all necessary equipment and personnel with pediatric intensive care expertise
            </td>
            <td>
              Advanced cardiopulmonary support available (extracorporeal membrane oxygenation)
            </td>
          </tr>
          <tr>
            <td>
              Intensive care effective access
            </td>
            <td>
              Not accessible to most patients
            </td>
            <td>
              Accessible to some oncology patients occasionally; frequently delayed access
            </td>
            <td>
              Accessible to some oncology patients when space available; occasionally delayed access
            </td>
            <td>
              Readily accessible to all patients
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Infection prevention and control
            </td>
            <td>
              None
            </td>
            <td>
              Hand hygiene stations usually available; prophylactic antibiotics for <i>Pneumocystis jiroveci</i> usually available
            </td>
            <td>
              Hand hygiene widely practiced; prophylactic antibiotics for <i>Pneumocystis jiroveci </i>always available
            </td>
            <td>
              Universal hand hygiene, adequate positive and negative pressure isolation rooms
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://onlinelibrary.wiley.com/doi/full/10.1002/pbc.26879">Nutritional support availability and effective access6</a>
            </td>
            <td>
              None
            </td>
            <td>
              Limited nutritional support available to some patients; staff with limited training or experience in management of nutritional issues
            </td>
            <td>
              Enteral feeding always available and parenteral feeding available sometimes; some staff with nutrition training or experience
            </td>
            <td>
              Enteral and parenteral feeding (including individualized preparations) always available; trained pediatric nutritionists available to all patients
            </td>
            <td>
              Full access to a wide array of specialized nutritional support modalities by trained pediatric oncology subspecialist staff
            </td>
          </tr>
          <tr>
            <td>
              Venous access
            </td>
            <td>
              Peripheral IV access
            </td>
            <td>
              Mainly peripheral IV access; PICC available to some patients
            </td>
            <td>
              Central venous access and a care plan for patients with a central line available to selected patients
            </td>
            <td>
              Central venous access and a care plan for patients with a central line available to all patients
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Safe chemotherapy preparation infrastructure
            </td>
            <td>
              None
            </td>
            <td>
              No special chemotherapy preparation area; no access to personal protective equipment
            </td>
            <td>
              Ventilated chemotherapy preparation area (e.g., to outside); access to personal protective equipment usually available
            </td>
            <td>
              Chemotherapy preparation hood available; access to personal protective equipment always available
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Pain and symptom management team
            </td>
            <td>
              No specific program
            </td>
            <td>
              Pain and symptom management by oncology personnel without special expertise in this area
            </td>
            <td>
              Some specialized pain and symptom management personnel; some pediatric experience
            </td>
            <td>
              Specialized pain and symptom management personnel; pediatric expertise
            </td>
            <td>
              Service with a full range of pharmacologic and nonpharmacologic tools for pain and symptom management tailored for children
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Diagnosis and staging
            </td>
          </tr>
          <tr>
            <td>
              General laboratory availability
            </td>
            <td>
              Must send out even basic labs
            </td>
            <td>
              Blood chemistry profile and hemogram
            </td>
            <td>
              Blood chemistry profile and hemogram, plus some specialized testing (e.g., ferritin, urine catecholamines); rapid turnaround time possible for critical labs
            </td>
            <td>
              Blood chemistry profile and hemogram, wide range of specialized testing (e.g., methotrexate levels, fractionated plasma/urine metanephrines); rapid turnaround time routine for critical labs
            </td>
            <td>
              Reference laboratory including specialized testing for pharmacokinetics, phase 1 studies, etc.
            </td>
          </tr>
          <tr>
            <td>
              General laboratory effective access
            </td>
            <td>
              Rarely accessible, depends on NGO support
            </td>
            <td>
              Accessible to some patients sometimes; may depend on financial situation or NGO support
            </td>
            <td>
              Accessible to most patients; partial dependence on financial situation or NGO support
            </td>
            <td>
              Accessible to all patients with rare exceptions; 24‐hr service 7 days per week and holidays
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Pathology availability
            </td>
            <td>
              None
            </td>
            <td>
              Microscope, H&amp;E staining, CSF cytology
            </td>
            <td>
              Limited immunohistochemistry panel (disease‐specific), cytospin for CSF samples
            </td>
            <td>
              Complete immunohistochemistry panel; molecular pathology and cytogenetics for most diseases; pediatric expertise necessary for specific diagnosis and staging; access to consultation with disease‐specific expert pathologists at other centers
            </td>
            <td>
              Research diagnostics, whole genome sequencing, molecular pathology for all diseases
            </td>
          </tr>
          <tr>
            <td>
              Pathology effective access
            </td>
            <td>
              Rarely accessible; depends on NGO support; long delays
            </td>
            <td>
              Accessible to some patients sometimes; may depend on financial situation or NGO support; frequent delays in access to results
            </td>
            <td>
              Accessible to most patients; partial dependence on financial situation or NGO support; occasional delays in access to results
            </td>
            <td>
              Accessible to all patients with rare exceptions; rare delays in access to results
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Pathology personnel
            </td>
            <td>
              No pathologist
            </td>
            <td>
              Pathologist available for some cases
            </td>
            <td>
              Pathologist available for all cases
            </td>
            <td>
              Pediatric pathologist available for all cases
            </td>
            <td>
              Pathologist with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Hematopathology availability
            </td>
            <td>
              None
            </td>
            <td>
              Microscope, H&amp;E staining, CSF cytology
            </td>
            <td>
              Limited immunohistochemistry panel (disease‐specific), flow cytometry and cytogenetics available most of the time
            </td>
            <td>
              Flow cytometry of high quality; minimal residual disease testing; molecular pathology and cytogenetics; pediatric expertise; access to consultation with disease‐specific expert pathologists at other centers
            </td>
            <td>
              Research diagnostics, whole genome sequencing, molecular pathology for all diseases
            </td>
          </tr>
          <tr>
            <td>
              Hematopathology effective access
            </td>
            <td>
              Rarely accessible, depends on NGO support
            </td>
            <td>
              Accessible to some patients sometimes; may depend on financial situation or NGO support
            </td>
            <td>
              Accessible to most patients; partial dependence on financial situation or NGO support
            </td>
            <td>
              Accessible to all patients with rare exceptions
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Hematopathology personnel
            </td>
            <td>
              No hemato‐pathologist
            </td>
            <td>
              Hematopathologist available for some cases; hematologist with some hematopathology expertise
            </td>
            <td>
              Hematopathologist available for most cases; oncologist with extensive pediatric hematopathology expertise
            </td>
            <td>
              Hematopathologist with pediatric expertise available for all cases
            </td>
            <td>
              Hematopathologist with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Diagnostic imaging availability
            </td>
            <td>
              None
            </td>
            <td>
              Radiographs, ultrasound
            </td>
            <td>
              CT scan, bone scintigraphy, gallium scintigraphy; occasional availability of anesthesia when needed
            </td>
            <td>
              Magnetic resonance imaging PET‐CT available to most patients; routine availability of anesthesia when needed
            </td>
            <td>
              Specialized imaging; advanced nuclear medicine applications (e.g., metaiodobenzylguanidine [MIBG] scanning)
            </td>
          </tr>
          <tr>
            <td>
              Diagnostic imaging effective access
            </td>
            <td>
              Rarely accessible, depends on NGO support
            </td>
            <td>
              Accessible to some patients sometimes; may depend on financial situation or NGO support
            </td>
            <td>
              Accessible to most patients; partial dependence on financial situation or NGO support
            </td>
            <td>
              Accessible to all patients with rare exceptions
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Diagnostic imaging personnel
            </td>
            <td>
              No radiologist
            </td>
            <td>
              Radiologist available to interpret most imaging, occasional delays
            </td>
            <td>
              Radiologist available to interpret all imaging in real time; some interventional radiology
            </td>
            <td>
              Pediatric radiologist available to interpret all imaging in real time; advanced interventional radiology
            </td>
            <td>
              Pediatric radiologist with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Personnel not included with specific service lines above
            </td>
          </tr>
          <tr>
            <td>
              Multidisciplinary team
            </td>
            <td>
              Absent
            </td>
            <td>
              Ad hoc meetings for special cases
            </td>
            <td>
              Routinely scheduled meetings with reasonable attendance
            </td>
            <td>
              Real‐time discussion of all complex cases to guide important care decisions
            </td>
            <td>
              Incorporation of molecular and genetic expertise in meetings; cancer‐specific multidisciplinary meetings like a CNS cancer or a sarcoma meeting
            </td>
          </tr>
          <tr>
            <td>
              Oncology team leader
            </td>
            <td>
              Primary care physicians care for cancer and many other diseases
            </td>
            <td>
              Primary care provider with interest in oncology
            </td>
            <td>
              Primary care provider with pediatric oncology experience or some training, medical oncologist without pediatric expertise
            </td>
            <td>
              Pediatric oncologist or medical oncologist with significant pediatric experience or training
            </td>
            <td>
              Pediatric oncologist with highly disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Oncology team training and experience
            </td>
            <td>
              A few staff members with basic training
            </td>
            <td>
              A few oncology personnel with some oncology training; trainees responsible for many aspects of patient care
            </td>
            <td>
              Generally adequate numbers of oncology personnel; consistent supervision of any trainees involved in patient care
            </td>
            <td>
              Full complement of pediatric oncologists; specialized oncology nurses; pharmacists with oncology training
            </td>
            <td>
              Full complement of oncology personnel, including specialized physician extenders (e.g., nurse practitioners, hospitalists)
            </td>
          </tr>
          <tr>
            <td>
              Oncology physician effective access
            </td>
            <td>
              Rarely accessible; for private patients only
            </td>
            <td>
              Occasionally accessible; most oncology work done by non-oncologists
            </td>
            <td>
              Usually accessible, some oncology work done by non-oncologists or medical oncologists with some pediatric expertise
            </td>
            <td>
              All patients cared for by pediatric oncologists
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Nurse training and expertise
            </td>
            <td>
              No nurses with oncology training and no experience with oncology patients
            </td>
            <td>
              Nurses with no specialized oncology training; some experience with cancer patients
            </td>
            <td>
              Nurses with some dedicated oncology training and experience (e.g., the ability to handle chemotherapy); oncology nurses not permanently assigned to the oncology unit; nurse educator available sometimes
            </td>
            <td>
              Nurses with oncology training and experience who are permanently assigned to the pediatric cancer unit; nurse educators available
            </td>
            <td>
              Highly specialized pediatric cancer nurses with disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Nursing effective access
            </td>
            <td>
              Extremely low nurse‐to‐patient ratio for oncology patients (1:25 or lower)
            </td>
            <td>
              Very low nurse‐to‐patient ratio for oncology patients (1:15 or lower)
            </td>
            <td>
              Low nurse‐to‐patient ratio for oncology patients (1:7 or lower)
            </td>
            <td>
              Adequate nurse‐to‐patient ratio for oncology patients (1:6 or higher)
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Surgery
            </td>
            <td>
              No surgeon
            </td>
            <td>
              General surgeon; limited pediatric experience
            </td>
            <td>
              Pediatric surgeon with limited oncology experience, oncology surgeon with limited pediatric experience
            </td>
            <td>
              Pediatric oncology surgeon
            </td>
            <td>
              Pediatric cancer surgeons with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Surgical subspecialties relevant for oncology
            </td>
            <td>
              None
            </td>
            <td>
              Adult subspecialty surgeon (neurosurgeon, orthopedic surgeon, ophthalmologist, other)
            </td>
            <td>
              Some pediatric subspecialty surgeons (neurosurgeon, orthopedic surgeon, ophthalmologist, other)
            </td>
            <td>
              Full range of pediatric subspecialty surgeons (neurosurgeon, orthopedic surgeon, ophthalmologist, other)
            </td>
            <td>
              Pediatric subspecialty surgeons with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Anesthesiologists
            </td>
            <td>
              None
            </td>
            <td>
              Anesthesiologist available sometimes
            </td>
            <td>
              Anesthesiologists available for major procedures
            </td>
            <td>
              Pediatric anesthesiologists available for all procedures; cancer surgery experience
            </td>
            <td>
              Pediatric anesthesiologist with highly specialized disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Pharmacists 
            </td>
            <td>
              None
            </td>
            <td>
              Pharmacist in the hospital to dispense medications, but not available to prepare chemotherapy
            </td>
            <td>
              Pharmacist available to prepare most chemotherapy and provide support to doctors and nurses
            </td>
            <td>
              Dedicated oncology pharmacist with expertise preparing chemotherapy and monitoring drug safety
            </td>
            <td>
              Highly specialized pediatric oncology pharmacists with expertise with specific patient groups (e.g., transplant) and medicine classes
            </td>
          </tr>
          <tr>
            <td>
              Infectious disease specialists
            </td>
            <td>
              None
            </td>
            <td>
              General pediatricians manage infectious disease problems
            </td>
            <td>
              Pediatricians with special interest in infectious disease available for some patients
            </td>
            <td>
              Pediatric infectious disease subspecialist available for most patients
            </td>
            <td>
              Pediatric infectious disease subspecialist embedded in the multidisciplinary oncology team
            </td>
          </tr>
          <tr>
            <td>
              Pediatric subspecialty support (e.g., nephrology, neurology, endocrinology)
            </td>
            <td>
              None
            </td>
            <td>
              General pediatricians manage subspecialty problems
            </td>
            <td>
              Pediatricians with a special interest in subspecialty care
            </td>
            <td>
              Pediatric subspecialists in most specialties
            </td>
            <td>
              Pediatric subspecialists in all specialties
            </td>
          </tr>
          <tr>
            <td>
              Professions allied to medicine (e.g., physical therapist, occupational therapist, speech therapist, psychologist)
            </td>
            <td>
              None
            </td>
            <td>
              Some availability of some professionals
            </td>
            <td>
              Some availability of most professionals for most patients
            </td>
            <td>
              Full range of allied healthcare professions available
            </td>
            <td>
              Professionals with specialized, pediatric, disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Social workers
            </td>
            <td>
              None
            </td>
            <td>
              Small number of social workers available to some patients
            </td>
            <td>
              Social workers available to most patients
            </td>
            <td>
              Adequate number and training of social workers available to all patients
            </td>
            <td>
              Professionals with specialized pediatric, disease‐specific expertise
            </td>
          </tr>
          <tr>
            <td>
              Logistical and social support
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Abandonment prevention program
            </td>
            <td>
              None
            </td>
            <td>
              Limited support for some patients’ nonmedical expenses. Limited support for some medical expenses. Limited access to psychologists, social workers, and parent support groups
            </td>
            <td>
              Guest house, subsidized food and subsidized transportation for some patients some of the time. Substantial support for most medical expenses for most patients. Some access to psychologists, social workers, and parent support groups
            </td>
            <td>
              Guest house, subsidized food, and subsidized transportation provided to all patients with documented need. Full support for almost all medical expenses for almost all patients. Reliable access to psychologists, social workers, and parent support groups for all patients
            </td>
            <td>
              Full support for housing, food, transportation, and daily nonmedical necessities. Vocational training and support for school for patients and families. Full support for all medical expenses for all patients. Universal access to psychologists, social workers, and parent support groups for all patients
            </td>
          </tr>
          <tr>
            <td>
              Guest house (patient/family lodging)
            </td>
            <td>
              None
            </td>
            <td>
              Available to a few patients; delayed access; overcrowded
            </td>
            <td>
              Available to many patients; occasional overcrowding
            </td>
            <td>
              Adequate number of rooms, rapid and easy access to the hospital or outpatient care
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Appointment scheduling and call‐back system
            </td>
            <td>
              None
            </td>
            <td>
              Appointment records kept, no systematic way to identify patients who miss an appointment
            </td>
            <td>
              System to identify patients who miss appointments; ad hoc tracking and call‐back
            </td>
            <td>
              Electronic appointment system with automated warnings for missed appointments; tracking system to contact patients who miss appointments
            </td>
            <td>
              Electronic appointment and tracking systems fully integrated into a state‐of‐the art electronic health record
            </td>
          </tr>
          <tr>
            <td>
              Transportation support
            </td>
            <td>
              None
            </td>
            <td>
              Some transportation subsidy for some patients
            </td>
            <td>
              Transportation subsidy for most patients who need it
            </td>
            <td>
              Full transportation subsidy and tracking to proactively identify patient needs
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Patient and family education
            </td>
            <td>
              None
            </td>
            <td>
              Some education for some patients and families
            </td>
            <td>
              System for patient and family education for most patients
            </td>
            <td>
              Routine and continuous patient and family education for all patients
            </td>
            <td>
               
            </td>
          </tr>
          <tr>
            <td>
              Patient and family support groups
            </td>
            <td>
              None
            </td>
            <td>
              Ad hoc support by some families of others; not supported by the oncology service
            </td>
            <td>
              Support groups that meet regularly; support from the oncology service
            </td>
            <td>
              Routine and integrated patient and family support groups fully supported and moderated by trained pediatric oncology personnel (e.g., psychologist, social worker)
            </td>
            <td>
               
            </td>
          </tr>
          <tr className="row-heading">
            <td colspan="6">
              Health system
            </td>
          </tr>
          <tr>
            <td>
              Satellite centers for shared care
            </td>
            <td>
              None
            </td>
            <td>
              Informal relationship with local primary care colleagues. Communication delayed or sporadic
            </td>
            <td>
              Network of primary care colleagues willing to facilitate some aspects of treatment and follow‐up. Communication as needed for specific patients
            </td>
            <td>
              Network of primary, secondary, and tertiary care centers with established communication methods and written procedures for the care that should be provided at each center
            </td>
            <td>
               Advanced, integrated referral and communication pathways and fully shared medical records
            </td>
          </tr>
          <tr>
            <td>
              Data management program
            </td>
            <td>
              None
            </td>
            <td>
              Record of patients treated is kept ad hoc by various staff members
            </td>
            <td>
              Data manager collects basic information about most patients. Electronic database with occasional back‐ups
            </td>
            <td>
              Data manager collects basic information about all patients and detailed information for those treated with specific regimens. Regular evaluation of outcomes, including toxic death, abandonment, and event‐free survival. Electronic database with daily back‐up procedure, access controls, and security procedures
            </td>
            <td>
              Data manager career ladders fully implemented and local team capable of advanced data analysis to guide care. Database fully integrated with the electronic health record
            </td>
          </tr>
          <tr>
            <td>
              Research focused on quality improvement and enhancing clinical care
            </td>
            <td>
              None
            </td>
            <td>
              Limited single‐center research including retrospective analyses with limited outcome data
            </td>
            <td>
              Single‐center retrospective studies with good follow‐up and outcome data, prospective studies
            </td>
            <td>
              Multicenter retrospective or prospective observational studies or those with single arm interventions; benchmarking against other hospitals to identify areas for improvement
            </td>
            <td>
              Part of prospective multicenter phase III randomized controlled trials; phase I/II trials; contributing to generalized knowledge locally, regionally, nationally, and internationally
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default LevelDefinitionsTable;
