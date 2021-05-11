const regimens = {
  "lggunresectableorincompleteresectioncarboplatinvincristine": {
    "cancer": "LGG",
    "risk_strat": "Unresectable or Incomplete Resection",
    "regimen": "Carboplatin + Vincristine",
    "drugs": {
      "carboplatin": [
        {
          "units": "mg/m2",
          "total_dosage": 2200,
          "num_days": 1,
          "doses_day_patient": 550,
          "phase": "Induction",
          "drug": "Carboplatin",
          "num_cycles": 4
        }, {
          "num_days": 1,
          "total_dosage": 6050,
          "phase": "Consolidation",
          "doses_day_patient": 550,
          "drug": "Carboplatin",
          "num_cycles": 11,
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_days": 1,
          "phase": "Induction",
          "num_cycles": 10,
          "total_dosage": 15,
          "doses_day_patient": 1.5,
          "max_dose": 2
        }, {
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "phase": "Consolidation",
          "drug": "Vincristine",
          "num_days": 1,
          "total_dosage": 16.5,
          "num_cycles": 11,
          "max_dose": 2
        }
      ]
    }
  },
  "burkittlymphomastage3burkittlymphomaregimen2": {
    "cancer": "Burkitt Lymphoma",
    "risk_strat": "Stage 3",
    "regimen": "Burkitt Lymphoma Regimen 2",
    "drugs": {
      "cyclophosphamide": [
        {
          "units": "mg/kg",
          "doses_day_patient": 40,
          "total_dosage": 120,
          "drug": "Cyclophosphamide",
          "num_days": 1,
          "num_cycles": 3,
          "phase": "Induction"
        }, {
          "units": "mg/kg",
          "num_days": 1,
          "total_dosage": 120,
          "phase": "Consolidation",
          "doses_day_patient": 60,
          "drug": "Cyclophosphamide",
          "num_cycles": 2
        }
      ],
      "methotrexate": [
        {
          "drug": "Methotrexate",
          "doses_day_patient": 12.5,
          "phase": "Induction",
          "total_dosage": 37.5,
          "num_cycles": 3,
          "units": "mg",
          "num_days": 1
        }
      ],
      "hydrocortisone": [
        {
          "num_cycles": 3,
          "phase": "Induction",
          "units": "mg",
          "total_dosage": 37.5,
          "doses_day_patient": 12.5,
          "num_days": 1,
          "drug": "Hydrocortisone"
        }
      ]
    }
  },
  "germcelltumorstandardriskbep3cycles": {
    "cancer": "Germ Cell Tumor",
    "risk_strat": "Standard Risk",
    "regimen": "BEP (3 Cycles)",
    "drugs": {
      "cisplatin": [
        {
          "units": "mg/m2",
          "total_dosage": 300,
          "doses_day_patient": 20,
          "phase": "-",
          "num_cycles": 3,
          "drug": "Cisplatin",
          "num_days": 5
        }
      ],
      "etoposide": [
        {
          "num_days": 5,
          "drug": "Etoposide",
          "doses_day_patient": 100,
          "total_dosage": 1500,
          "phase": "-",
          "num_cycles": 3,
          "units": "mg/m2"
        }
      ],
      "bleomycin": [
        {
          "doses_day_patient": 30,
          "drug": "Bleomycin",
          "units": "mg/m2",
          "total_dosage": 270,
          "max_dose": 30000,
          "phase": "-",
          "num_cycles": 3,
          "num_days": 3
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage1vincristineactinomycind": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 1",
    "regimen": "Vincristine + Actinomycin D",
    "drugs": {
      "vincristine": [
        {
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "num_days": 1,
          "phase": "Pre-Operative",
          "units": "mg/m2",
          "total_dosage": 7.5,
          "drug": "Vincristine",
          "num_cycles": 5
        }
      ],
      "actinomycind": [
        {
          "phase": "Pre-Operative",
          "drug": "Actinomycin D",
          "total_dosage": 0.09,
          "num_days": 1,
          "num_cycles": 2,
          "doses_day_patient": 0.045,
          "units": "mg/kg"
        }
      ]
    }
  },
  "hodgkinslymphomalowriskabvd4cycles": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "ABVD (4 Cycles)",
    "drugs": {
      "doxorubicin": [
        {
          "num_cycles": 4,
          "total_dosage": 200,
          "doses_day_patient": 25,
          "num_days": 2,
          "units": "mg/m2",
          "phase": "-",
          "drug": "Doxorubicin"
        }
      ],
      "bleomycin": [
        {
          "phase": "-",
          "max_dose": 30000,
          "drug": "Bleomycin",
          "doses_day_patient": 10,
          "num_cycles": 4,
          "units": "mg/m2",
          "total_dosage": 80,
          "num_days": 2
        }
      ],
      "vinblastine": [
        {
          "doses_day_patient": 6,
          "num_days": 2,
          "num_cycles": 4,
          "drug": "Vinblastine",
          "phase": "-",
          "total_dosage": 48,
          "units": "mg/m2"
        }
      ],
      "dacarbazine": [
        {
          "units": "mg/m2",
          "num_days": 2,
          "num_cycles": 4,
          "phase": "-",
          "total_dosage": 3000,
          "doses_day_patient": 375,
          "drug": "Dacarbazine"
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage3vincristineactinomycinddoxorubicin": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 3",
    "regimen": "Vincristine + Actinomycin D + Doxorubicin",
    "drugs": {
      "vincristine": [
        {
          "phase": "Pre-Operative",
          "units": "mg/m2",
          "drug": "Vincristine",
          "total_dosage": 9,
          "max_dose": 2,
          "num_cycles": 6,
          "doses_day_patient": 1.5,
          "num_days": 1
        }
      ],
      "actinomycind": [
        {
          "phase": "Pre-Operative",
          "drug": "Actinomycin D",
          "num_days": 1,
          "doses_day_patient": 0.045,
          "total_dosage": 0.135,
          "units": "mg/kg",
          "num_cycles": 3
        }
      ],
      "doxorubicin": [
        {
          "num_days": 1,
          "phase": "Pre-Operative",
          "units": "mg/m2",
          "total_dosage": 100,
          "doses_day_patient": 50,
          "num_cycles": 2,
          "drug": "Doxorubicin"
        }
      ]
    }
  },
  "osteosarcomaosteosarcomamethotrexatefeasible": {
    "cancer": "Osteosarcoma",
    "risk_strat": "Osteosarcoma",
    "regimen": "Methotrexate-Feasible",
    "drugs": {
      "cisplatin": [
        {
          "total_dosage": 480,
          "num_cycles": 4,
          "doses_day_patient": 60,
          "phase": "-",
          "units": "mg/m2",
          "num_days": 2,
          "drug": "Cisplatin"
        }
      ],
      "doxorubicin": [
        {
          "num_days": 2,
          "doses_day_patient": 37.5,
          "num_cycles": 6,
          "drug": "Doxorubicin",
          "units": "mg/m2",
          "phase": "-",
          "total_dosage": 450
        }
      ],
      "methotrexate": [
        {
          "phase": "-",
          "total_dosage": 144000,
          "doses_day_patient": 12000,
          "drug": "Methotrexate",
          "num_days": 1,
          "num_cycles": 12,
          "units": "mg/m2"
        }
      ]
    }
  },
  "alllowriskallregimen1": {
    "cancer": "ALL",
    "risk_strat": "Low Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "units": "mg/m2",
          "num_cycles": 7,
          "phase": "Induction",
          "num_days": 1,
          "total_dosage": 420,
          "drug": "Prednisone",
          "doses_day_patient": 60
        }, {
          "doses_day_patient": 40,
          "units": "mg/m2",
          "drug": "Prednisone",
          "num_cycles": 21,
          "phase": "Induction",
          "num_days": 1,
          "total_dosage": 840
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "total_dosage": 6,
          "num_cycles": 4,
          "units": "mg/m2",
          "max_dose": 2,
          "phase": "Induction",
          "num_days": 1
        }, {
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_days": 1,
          "phase": "Consolidation",
          "num_cycles": 1,
          "total_dosage": 1.5,
          "max_dose": 2
        }, {
          "num_cycles": 10,
          "drug": "Vincristine",
          "max_dose": 2,
          "phase": "Maintenance",
          "doses_day_patient": 1.5,
          "total_dosage": 45,
          "num_days": 3,
          "units": "mg/m2"
        }
      ],
      "asparaginase": [
        {
          "units": "mg/m2",
          "drug": "Asparaginase",
          "num_cycles": 3,
          "phase": "Induction",
          "total_dosage": 54000,
          "doses_day_patient": 6000,
          "num_days": 3
        }
      ],
      "methotrexateit": [
        {
          "units": "mg",
          "doses_day_patient": 15,
          "num_cycles": 3,
          "total_dosage": 45,
          "num_days": 1,
          "drug": "Methotrexate IT",
          "phase": "Induction"
        }, {
          "doses_day_patient": 15,
          "num_cycles": 3,
          "num_days": 1,
          "phase": "Consolidation",
          "units": "mg",
          "drug": "Methotrexate IT",
          "total_dosage": 45
        }, {
          "num_cycles": 4,
          "doses_day_patient": 15,
          "total_dosage": 120,
          "phase": "Maintenance",
          "units": "mg",
          "num_days": 2,
          "drug": "Methotrexate IT"
        }, {
          "doses_day_patient": 15,
          "total_dosage": 90,
          "num_cycles": 6,
          "num_days": 1,
          "units": "mg",
          "phase": "Maintenance",
          "drug": "Methotrexate IT"
        }
      ],
      "6mp": [
        {
          "num_days": 1,
          "units": "mg/m2",
          "phase": "Consolidation",
          "doses_day_patient": 75,
          "num_cycles": 28,
          "total_dosage": 2100,
          "drug": "6MP"
        }, {
          "num_cycles": 10,
          "total_dosage": 63000,
          "phase": "Maintenance",
          "units": "mg/m2",
          "doses_day_patient": 75,
          "drug": "6MP",
          "num_days": 84
        }
      ],
      "dexamethasone": [
        {
          "phase": "Maintenance",
          "num_cycles": 10,
          "units": "mg/m2",
          "total_dosage": 900,
          "drug": "Dexamethasone",
          "num_days": 15,
          "doses_day_patient": 6
        }
      ],
      "methotrexate": [
        {
          "doses_day_patient": 20,
          "phase": "Maintenance",
          "num_cycles": 4,
          "num_days": 10,
          "drug": "Methotrexate",
          "total_dosage": 800,
          "units": "mg/m2"
        }, {
          "total_dosage": 1320,
          "num_days": 11,
          "units": "mg/m2",
          "drug": "Methotrexate",
          "doses_day_patient": 20,
          "num_cycles": 6,
          "phase": "Maintenance"
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskoppa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "OPPA",
    "drugs": {
      "vincristine": [
        {
          "num_days": 3,
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 4,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "phase": "-",
          "total_dosage": 18
        }
      ],
      "procarbazine": [
        {
          "drug": "Procarbazine",
          "doses_day_patient": 100,
          "units": "mg/m2",
          "num_days": 15,
          "total_dosage": 6000,
          "phase": "-",
          "num_cycles": 4
        }
      ],
      "prednisone": [
        {
          "phase": "-",
          "units": "mg/m2",
          "num_cycles": 4,
          "drug": "Prednisone",
          "total_dosage": 3600,
          "num_days": 15,
          "doses_day_patient": 60
        }
      ],
      "doxorubicin": [
        {
          "drug": "Doxorubicin",
          "units": "mg/m2",
          "doses_day_patient": 40,
          "phase": "-",
          "num_days": 2,
          "num_cycles": 4,
          "total_dosage": 320
        }
      ]
    }
  },
  "standardriskmedulloblastomastandardriskmedulloblastomacisplatincarboplatinbasedcombination": {
    "cancer": "Standard-Risk Medulloblastoma",
    "risk_strat": "Standard-Risk Medulloblastoma",
    "regimen": "Cisplatin + Carboplatin-based Combination",
    "drugs": {
      "cisplatin": [
        {
          "total_dosage": 300,
          "num_cycles": 4,
          "drug": "Cisplatin",
          "doses_day_patient": 75,
          "units": "mg/m2",
          "num_days": 1,
          "phase": "-"
        }
      ],
      "etoposide": [
        {
          "units": "mg/m2",
          "phase": "-",
          "total_dosage": 800,
          "drug": "Etoposide",
          "doses_day_patient": 200,
          "num_days": 1,
          "num_cycles": 4
        }
      ],
      "vincristine": [
        {
          "num_days": 1,
          "doses_day_patient": 1,
          "num_cycles": 4,
          "units": "mg/m2",
          "drug": "Vincristine",
          "max_dose": 2,
          "phase": "-",
          "total_dosage": 4
        }
      ],
      "carboplatin": [
        {
          "units": "mg/m2",
          "doses_day_patient": 500,
          "num_cycles": 4,
          "phase": "-",
          "num_days": 1,
          "drug": "Carboplatin",
          "total_dosage": 2000
        }
      ],
      "cyclophosphamide": [
        {
          "num_days": 1,
          "doses_day_patient": 1000,
          "num_cycles": 4,
          "phase": "-",
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "total_dosage": 4000
        }
      ]
    }
  },
  "burkittlymphomastage1or2burkittlymphomaregimen1": {
    "cancer": "Burkitt Lymphoma",
    "risk_strat": "Stage 1or2",
    "regimen": "Burkitt Lymphoma Regimen 1",
    "drugs": {
      "cyclophosphamide": [
        {
          "num_days": 1,
          "phase": "Induction",
          "num_cycles": 3,
          "total_dosage": 120,
          "units": "mg/kg",
          "doses_day_patient": 40,
          "drug": "Cyclophosphamide"
        }, {
          "total_dosage": 60,
          "doses_day_patient": 60,
          "phase": "Consolidation",
          "drug": "Cyclophosphamide",
          "units": "mg/kg",
          "num_days": 1,
          "num_cycles": 1
        }
      ],
      "methotrexate": [
        {
          "num_days": 1,
          "doses_day_patient": 12.5,
          "phase": "Induction",
          "units": "mg",
          "drug": "Methotrexate",
          "total_dosage": 37.5,
          "num_cycles": 3
        }
      ],
      "hydrocortisone": [
        {
          "units": "mg",
          "doses_day_patient": 12.5,
          "phase": "Induction",
          "num_cycles": 3,
          "total_dosage": 37.5,
          "drug": "Hydrocortisone",
          "num_days": 1
        }
      ]
    }
  },
  "lymphoblasticlymphomahighriskallregimen3": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 3",
    "drugs": {
      "prednisone": [
        {
          "num_cycles": 29,
          "total_dosage": 1740,
          "drug": "Prednisone",
          "num_days": 1,
          "units": "mg/m2",
          "doses_day_patient": 60,
          "phase": "Induction"
        }
      ],
      "vincristine": [
        {
          "num_days": 1,
          "max_dose": 2,
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_cycles": 4,
          "phase": "Induction",
          "total_dosage": 6,
          "doses_day_patient": 1.5
        }, {
          "phase": "Interim Maintenance",
          "units": "mg/m2",
          "drug": "Vincristine",
          "total_dosage": 3,
          "num_days": 1,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "num_cycles": 2
        }, {
          "total_dosage": 4.5,
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_cycles": 3,
          "max_dose": 2,
          "num_days": 1,
          "drug": "Vincristine",
          "phase": "Delayed Intensification"
        }, {
          "num_days": 3,
          "max_dose": 2,
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_cycles": 8,
          "doses_day_patient": 1.5,
          "total_dosage": 36,
          "phase": "Maintenance"
        }
      ],
      "asparaginase": [
        {
          "phase": "Induction",
          "drug": "Asparaginase",
          "num_days": 3,
          "num_cycles": 3,
          "units": "mg/m2",
          "doses_day_patient": 6000,
          "total_dosage": 54000
        }, {
          "total_dosage": 36000,
          "doses_day_patient": 6000,
          "num_cycles": 2,
          "num_days": 3,
          "drug": "Asparaginase",
          "phase": "Delayed Intensification",
          "units": "mg/m2"
        }
      ],
      "methotrexateit": [
        {
          "num_cycles": 3,
          "units": "mg",
          "total_dosage": 45,
          "phase": "Induction",
          "doses_day_patient": 15,
          "num_days": 1,
          "drug": "Methotrexate IT"
        },
        {
          "num_cycles": 4,
          "total_dosage": 60,
          "units": "mg",
          "phase": "Consolidation",
          "doses_day_patient": 15,
          "num_days": 1,
          "drug": "Methotrexate IT"
        },
        {
          "drug": "Methotrexate IT",
          "num_cycles": 1,
          "total_dosage": 15,
          "doses_day_patient": 15,
          "num_days": 1,
          "units": "mg",
          "phase": "Interim Maintenance"
        },
        {
          "total_dosage": 45,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "num_cycles": 3,
          "num_days": 1,
          "phase": "Delayed Intensification",
          "units": "mg"
        }, {
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "units": "mg",
          "num_cycles": 4,
          "phase": "Maintenance",
          "total_dosage": 120,
          "num_days": 2
        }, {
          "phase": "Maintenance",
          "num_cycles": 4,
          "units": "mg",
          "doses_day_patient": 15,
          "num_days": 1,
          "total_dosage": 60,
          "drug": "Methotrexate IT"
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 2,
          "units": "mg/m2",
          "total_dosage": 2000,
          "drug": "Cyclophosphamide",
          "doses_day_patient": 1000,
          "num_days": 1,
          "phase": "Consolidation"
        }, {
          "num_days": 1,
          "total_dosage": 1000,
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "num_cycles": 1,
          "doses_day_patient": 1000,
          "phase": "Delayed Intensification"
        }
      ],
      "6mp": [
        {
          "num_cycles": 28,
          "num_days": 1,
          "total_dosage": 1680,
          "drug": "6MP",
          "units": "mg/m2",
          "phase": "Consolidation",
          "doses_day_patient": 60
        }, {
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "num_days": 1,
          "total_dosage": 3750,
          "doses_day_patient": 75,
          "num_cycles": 50,
          "drug": "6MP"
        }, {
          "num_cycles": 15,
          "total_dosage": 900,
          "phase": "Delayed Intensification",
          "num_days": 1,
          "drug": "6MP",
          "doses_day_patient": 60,
          "units": "mg/m2"
        }, {
          "phase": "Maintenance",
          "drug": "6MP",
          "total_dosage": 50400,
          "units": "mg/m2",
          "doses_day_patient": 75,
          "num_days": 84,
          "num_cycles": 8
        }
      ],
      "cytarabine": [
        {
          "doses_day_patient": 75,
          "units": "mg/m2",
          "total_dosage": 1200,
          "num_days": 4,
          "phase": "Consolidation",
          "num_cycles": 4,
          "drug": "Cytarabine"
        }, {
          "num_cycles": 2,
          "units": "mg/m2",
          "doses_day_patient": 75,
          "phase": "Delayed Intensification",
          "drug": "Cytarabine",
          "num_days": 4,
          "total_dosage": 600
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "num_cycles": 2,
          "num_days": 5,
          "doses_day_patient": 6,
          "total_dosage": 60,
          "drug": "Dexamethasone"
        }, {
          "phase": "Delayed Intensification",
          "num_days": 7,
          "drug": "Dexamethasone",
          "doses_day_patient": 10,
          "units": "mg/m2",
          "num_cycles": 2,
          "total_dosage": 140
        }, {
          "total_dosage": 720,
          "units": "mg/m2",
          "phase": "Maintenance",
          "num_cycles": 8,
          "doses_day_patient": 6,
          "num_days": 15,
          "drug": "Dexamethasone"
        }
      ],
      "methotrexate": [
        {
          "doses_day_patient": 20,
          "num_days": 1,
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "num_cycles": 8,
          "drug": "Methotrexate",
          "total_dosage": 160
        }, {
          "num_days": 10,
          "units": "mg/m2",
          "total_dosage": 800,
          "num_cycles": 4,
          "drug": "Methotrexate",
          "phase": "Maintenance",
          "doses_day_patient": 20
        }, {
          "units": "mg/m2",
          "phase": "Maintenance",
          "num_days": 11,
          "total_dosage": 880,
          "num_cycles": 4,
          "doses_day_patient": 20,
          "drug": "Methotrexate"
        }
      ],
      "doxorubicin": [
        {
          "num_days": 1,
          "drug": "Doxorubicin",
          "doses_day_patient": 25,
          "total_dosage": 75,
          "phase": "Delayed Intensification",
          "num_cycles": 3,
          "units": "mg/m2"
        }
      ]
    }
  },
  "lymphoblasticlymphomalowriskallregimen2": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "phase": "Induction",
          "doses_day_patient": 60,
          "num_cycles": 29,
          "total_dosage": 1740,
          "num_days": 1,
          "units": "mg/m2",
          "drug": "Prednisone"
        }
      ],
      "vincristine": [
        {
          "num_cycles": 4,
          "units": "mg/m2",
          "phase": "Induction",
          "doses_day_patient": 1.5,
          "total_dosage": 12,
          "num_days": 2,
          "max_dose": 2,
          "drug": "Vincristine"
        },
        {
          "drug": "Vincristine",
          "num_days": 1,
          "num_cycles": 1,
          "phase": "Consolidation",
          "doses_day_patient": 1.5,
          "total_dosage": 1.5,
          "max_dose": 2,
          "units": "mg/m2"
        },
        {
          "phase": "Interim Maintenance",
          "drug": "Vincristine",
          "num_days": 1,
          "total_dosage": 3,
          "num_cycles": 2,
          "max_dose": 2,
          "units": "mg/m2",
          "doses_day_patient": 1.5
        },
        {
          "max_dose": 2,
          "total_dosage": 4.5,
          "num_days": 1,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "num_cycles": 3,
          "drug": "Vincristine"
        }, {
          "total_dosage": 36,
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_days": 3,
          "phase": "Maintenance",
          "max_dose": 2,
          "drug": "Vincristine",
          "num_cycles": 8
        }
      ],
      "asparaginase": [
        {
          "doses_day_patient": 6000,
          "phase": "Induction",
          "drug": "Asparaginase",
          "units": "mg/m2",
          "total_dosage": 54000,
          "num_days": 3,
          "num_cycles": 3
        }, {
          "num_days": 3,
          "total_dosage": 54000,
          "drug": "Asparaginase",
          "units": "mg/m2",
          "num_cycles": 3,
          "doses_day_patient": 6000,
          "phase": "Delayed Intensification"
        }
      ],
      "methotrexateit": [
        {
          "units": "mg",
          "doses_day_patient": 15,
          "num_cycles": 3,
          "num_days": 1,
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "phase": "Induction"
        },
        {
          "units": "mg",
          "num_cycles": 3,
          "drug": "Methotrexate IT",
          "phase": "Consolidation",
          "doses_day_patient": 15,
          "num_days": 1,
          "total_dosage": 45
        },
        {
          "units": "mg",
          "num_cycles": 1,
          "total_dosage": 15,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "doses_day_patient": 15,
          "phase": "Interim Maintenance"
        },
        {
          "phase": "Delayed Intensification",
          "num_cycles": 3,
          "units": "mg",
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "num_days": 1,
          "total_dosage": 45
        }, {
          "phase": "Maintenance",
          "units": "mg",
          "num_days": 2,
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "total_dosage": 120,
          "doses_day_patient": 15
        }, {
          "units": "mg",
          "doses_day_patient": 15,
          "phase": "Maintenance",
          "num_cycles": 4,
          "num_days": 1,
          "drug": "Methotrexate IT",
          "total_dosage": 60
        }
      ],
      "6mp": [
        {
          "phase": "Consolidation",
          "units": "mg/m2",
          "num_cycles": 28,
          "total_dosage": 2100,
          "drug": "6MP",
          "doses_day_patient": 75,
          "num_days": 1
        }, {
          "num_cycles": 50,
          "doses_day_patient": 75,
          "drug": "6MP",
          "units": "mg/m2",
          "num_days": 1,
          "total_dosage": 3750,
          "phase": "Interim Maintenance"
        }, {
          "doses_day_patient": 60,
          "units": "mg/m2",
          "drug": "6MP",
          "total_dosage": 900,
          "num_days": 1,
          "phase": "Delayed Intensification",
          "num_cycles": 15
        }, {
          "phase": "Maintenance",
          "drug": "6MP",
          "num_cycles": 8,
          "num_days": 84,
          "units": "mg/m2",
          "doses_day_patient": 75,
          "total_dosage": 50400
        }
      ],
      "dexamethasone": [
        {
          "num_cycles": 2,
          "total_dosage": 60,
          "num_days": 5,
          "drug": "Dexamethasone",
          "doses_day_patient": 6,
          "units": "mg/m2",
          "phase": "Interim Maintenance"
        }, {
          "phase": "Delayed Intensification",
          "doses_day_patient": 10,
          "drug": "Dexamethasone",
          "total_dosage": 140,
          "num_days": 7,
          "num_cycles": 2,
          "units": "mg/m2"
        }, {
          "units": "mg/m2",
          "doses_day_patient": 6,
          "total_dosage": 720,
          "num_cycles": 8,
          "drug": "Dexamethasone",
          "num_days": 15,
          "phase": "Maintenance"
        }
      ],
      "methotrexate": [
        {
          "doses_day_patient": 20,
          "phase": "Interim Maintenance",
          "units": "mg/m2",
          "num_days": 1,
          "drug": "Methotrexate",
          "total_dosage": 160,
          "num_cycles": 8
        }, {
          "num_days": 10,
          "total_dosage": 800,
          "units": "mg/m2",
          "drug": "Methotrexate",
          "num_cycles": 4,
          "phase": "Maintenance",
          "doses_day_patient": 20
        }, {
          "total_dosage": 880,
          "units": "mg/m2",
          "num_days": 11,
          "num_cycles": 4,
          "phase": "Maintenance",
          "drug": "Methotrexate",
          "doses_day_patient": 20
        }
      ],
      "doxorubicin": [
        {
          "num_cycles": 3,
          "doses_day_patient": 25,
          "units": "mg/m2",
          "total_dosage": 75,
          "phase": "Delayed Intensification",
          "num_days": 1,
          "drug": "Doxorubicin"
        }
      ],
      "cyclophosphamide": [
        {
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 1000,
          "total_dosage": 1000,
          "phase": "Delayed Intensification",
          "num_cycles": 1
        }
      ],
      "cytarabine": [
        {
          "num_cycles": 2,
          "units": "mg/m2",
          "num_days": 3,
          "total_dosage": 450,
          "drug": "Cytarabine",
          "doses_day_patient": 75,
          "phase": "Delayed Intensification"
        }
      ]
    }
  },
  "lymphoblasticlymphomaveryhighriskallregimen2": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "total_dosage": 1740,
          "drug": "Prednisone",
          "num_cycles": 29,
          "doses_day_patient": 60,
          "phase": "Induction",
          "units": "mg/m2",
          "num_days": 1
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_cycles": 4,
          "drug": "Vincristine",
          "max_dose": 2,
          "num_days": 2,
          "total_dosage": 12,
          "phase": "Induction"
        },
        {
          "drug": "Vincristine",
          "num_days": 1,
          "doses_day_patient": 1.5,
          "total_dosage": 1.5,
          "num_cycles": 1,
          "phase": "Consolidation",
          "max_dose": 2,
          "units": "mg/m2"
        },
        {
          "max_dose": 2,
          "phase": "Interim Maintenance",
          "num_cycles": 2,
          "drug": "Vincristine",
          "total_dosage": 3,
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_days": 1
        },
        {
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_cycles": 3,
          "total_dosage": 4.5,
          "phase": "Delayed Intensification",
          "max_dose": 2,
          "num_days": 1
        }, {
          "phase": "Maintenance",
          "num_days": 3,
          "num_cycles": 8,
          "total_dosage": 36,
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "units": "mg/m2"
        }
      ],
      "asparaginase": [
        {
          "phase": "Induction",
          "units": "mg/m2",
          "drug": "Asparaginase",
          "doses_day_patient": 6000,
          "num_days": 3,
          "total_dosage": 54000,
          "num_cycles": 3
        }, {
          "drug": "Asparaginase",
          "num_days": 3,
          "phase": "Delayed Intensification",
          "doses_day_patient": 6000,
          "num_cycles": 3,
          "units": "mg/m2",
          "total_dosage": 54000
        }
      ],
      "methotrexateit": [
        {
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "num_cycles": 3,
          "num_days": 1,
          "units": "mg",
          "total_dosage": 45,
          "phase": "Induction"
        },
        {
          "total_dosage": 45,
          "num_days": 1,
          "doses_day_patient": 15,
          "units": "mg",
          "drug": "Methotrexate IT",
          "phase": "Consolidation",
          "num_cycles": 3
        },
        {
          "drug": "Methotrexate IT",
          "phase": "Interim Maintenance",
          "num_cycles": 1,
          "num_days": 1,
          "total_dosage": 15,
          "units": "mg",
          "doses_day_patient": 15
        },
        {
          "total_dosage": 45,
          "doses_day_patient": 15,
          "units": "mg",
          "drug": "Methotrexate IT",
          "phase": "Delayed Intensification",
          "num_days": 1,
          "num_cycles": 3
        }, {
          "num_days": 2,
          "num_cycles": 4,
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "phase": "Maintenance",
          "units": "mg",
          "total_dosage": 120
        }, {
          "total_dosage": 60,
          "units": "mg",
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "num_cycles": 4,
          "phase": "Maintenance"
        }
      ],
      "6mp": [
        {
          "drug": "6MP",
          "num_days": 1,
          "phase": "Consolidation",
          "total_dosage": 2100,
          "units": "mg/m2",
          "num_cycles": 28,
          "doses_day_patient": 75
        }, {
          "drug": "6MP",
          "phase": "Interim Maintenance",
          "num_cycles": 50,
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 75,
          "total_dosage": 3750
        }, {
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 900,
          "doses_day_patient": 60,
          "drug": "6MP",
          "phase": "Delayed Intensification",
          "num_cycles": 15
        }, {
          "drug": "6MP",
          "total_dosage": 50400,
          "num_days": 84,
          "doses_day_patient": 75,
          "units": "mg/m2",
          "num_cycles": 8,
          "phase": "Maintenance"
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "drug": "Dexamethasone",
          "doses_day_patient": 6,
          "phase": "Interim Maintenance",
          "num_days": 5,
          "num_cycles": 2,
          "total_dosage": 60
        }, {
          "units": "mg/m2",
          "num_cycles": 2,
          "total_dosage": 140,
          "drug": "Dexamethasone",
          "phase": "Delayed Intensification",
          "num_days": 7,
          "doses_day_patient": 10
        }, {
          "total_dosage": 720,
          "phase": "Maintenance",
          "num_cycles": 8,
          "units": "mg/m2",
          "num_days": 15,
          "drug": "Dexamethasone",
          "doses_day_patient": 6
        }
      ],
      "methotrexate": [
        {
          "phase": "Interim Maintenance",
          "total_dosage": 160,
          "num_cycles": 8,
          "drug": "Methotrexate",
          "units": "mg/m2",
          "doses_day_patient": 20,
          "num_days": 1
        }, {
          "num_days": 10,
          "drug": "Methotrexate",
          "doses_day_patient": 20,
          "units": "mg/m2",
          "phase": "Maintenance",
          "num_cycles": 4,
          "total_dosage": 800
        }, {
          "total_dosage": 880,
          "doses_day_patient": 20,
          "num_cycles": 4,
          "num_days": 11,
          "units": "mg/m2",
          "phase": "Maintenance",
          "drug": "Methotrexate"
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "num_cycles": 3,
          "total_dosage": 75,
          "doses_day_patient": 25,
          "drug": "Doxorubicin",
          "num_days": 1,
          "phase": "Delayed Intensification"
        }
      ],
      "cyclophosphamide": [
        {
          "drug": "Cyclophosphamide",
          "total_dosage": 1000,
          "num_days": 1,
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "num_cycles": 1,
          "doses_day_patient": 1000
        }
      ],
      "cytarabine": [
        {
          "units": "mg/m2",
          "num_cycles": 2,
          "total_dosage": 450,
          "doses_day_patient": 75,
          "drug": "Cytarabine",
          "phase": "Delayed Intensification",
          "num_days": 3
        }
      ]
    }
  },
  "osteosarcomaosteosarcomamethotrexatenotfeasible": {
    "cancer": "Osteosarcoma",
    "risk_strat": "Osteosarcoma",
    "regimen": "Methotrexate NOT Feasible",
    "drugs": {
      "cisplatin": [
        {
          "phase": "-",
          "total_dosage": 600,
          "num_days": 2,
          "drug": "Cisplatin",
          "units": "mg/m2",
          "num_cycles": 4,
          "doses_day_patient": 75
        }
      ],
      "doxorubicin": [
        {
          "doses_day_patient": 37.5,
          "drug": "Doxorubicin",
          "phase": "-",
          "units": "mg/m2",
          "num_cycles": 4,
          "num_days": 2,
          "total_dosage": 300
        }
      ],
      "ifosfamide": [
        {
          "total_dosage": 36000,
          "phase": "-",
          "units": "mg/m2",
          "num_days": 3,
          "doses_day_patient": 3000,
          "num_cycles": 4,
          "drug": "Ifosfamide"
        }
      ],
      "etoposide": [
        {
          "num_cycles": 4,
          "num_days": 3,
          "phase": "-",
          "doses_day_patient": 150,
          "drug": "Etoposide",
          "total_dosage": 1800,
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomalowriskcopp": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "COPP",
    "drugs": {
      "cyclophosphamide": [
        {
          "num_cycles": 4,
          "units": "mg/m2",
          "doses_day_patient": 500,
          "total_dosage": 4000,
          "phase": "-",
          "drug": "Cyclophosphamide",
          "num_days": 2
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "phase": "-",
          "drug": "Vincristine",
          "total_dosage": 12,
          "max_dose": 2,
          "num_days": 2,
          "units": "mg/m2",
          "num_cycles": 4
        }
      ],
      "prednisone": [
        {
          "units": "mg/m2",
          "doses_day_patient": 40,
          "total_dosage": 2400,
          "num_cycles": 4,
          "num_days": 15,
          "phase": "-",
          "drug": "Prednisone"
        }
      ],
      "procarbazine": [
        {
          "num_days": 15,
          "phase": "-",
          "drug": "Procarbazine",
          "doses_day_patient": 100,
          "num_cycles": 4,
          "total_dosage": 6000,
          "units": "mg/m2"
        }
      ]
    }
  },
  "amlamllowdoseinduction": {
    "cancer": "AML",
    "risk_strat": "AML",
    "regimen": "Low-Dose Induction",
    "drugs": {
      "daunorubicin": [
        {
          "doses_day_patient": 25,
          "total_dosage": 150,
          "units": "mg/m2",
          "drug": "Daunorubicin",
          "num_cycles": 2,
          "phase": "LD Induction",
          "num_days": 3
        }
      ],
      "cytarabine": [
        {
          "num_days": 10,
          "num_cycles": 2,
          "drug": "Cytarabine",
          "doses_day_patient": 20,
          "units": "mg/m2",
          "total_dosage": 400,
          "phase": "LD Induction"
        }
      ]
    }
  },
  "hodgkinslymphomalowriskoepa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "OEPA",
    "drugs": {
      "vincristine": [
        {
          "drug": "Vincristine",
          "total_dosage": 9,
          "num_cycles": 2,
          "num_days": 3,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "-",
          "units": "mg/m2"
        }
      ],
      "etoposide": [
        {
          "num_cycles": 2,
          "phase": "-",
          "doses_day_patient": 125,
          "num_days": 5,
          "units": "mg/m2",
          "drug": "Etoposide",
          "total_dosage": 1250
        }
      ],
      "prednisone": [
        {
          "phase": "-",
          "total_dosage": 1800,
          "doses_day_patient": 60,
          "num_days": 15,
          "units": "mg/m2",
          "num_cycles": 2,
          "drug": "Prednisone"
        }
      ],
      "doxorubicin": [
        {
          "doses_day_patient": 40,
          "num_cycles": 2,
          "total_dosage": 160,
          "num_days": 2,
          "drug": "Doxorubicin",
          "phase": "-",
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskabvd6cycles": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "ABVD (6 Cycles)",
    "drugs": {
      "doxorubicin": [
        {
          "num_cycles": 6,
          "doses_day_patient": 25,
          "num_days": 2,
          "drug": "Doxorubicin",
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 300
        }
      ],
      "bleomycin": [
        {
          "doses_day_patient": 10,
          "drug": "Bleomycin",
          "max_dose": 30000,
          "num_days": 2,
          "num_cycles": 6,
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 120
        }
      ],
      "vinblastine": [
        {
          "units": "mg/m2",
          "doses_day_patient": 6,
          "num_days": 2,
          "drug": "Vinblastine",
          "num_cycles": 6,
          "phase": "-",
          "total_dosage": 72
        }
      ],
      "dacarbazine": [
        {
          "num_cycles": 6,
          "units": "mg/m2",
          "doses_day_patient": 375,
          "total_dosage": 4500,
          "drug": "Dacarbazine",
          "num_days": 2,
          "phase": "-"
        }
      ]
    }
  },
  "dlbcldlbclrchop": {
    "cancer": "DLBCL",
    "risk_strat": "DLBCL",
    "regimen": "R-CHOP",
    "drugs": {
      "rituximab": [
        {
          "drug": "Rituximab",
          "units": "mg/m2",
          "total_dosage": 2250,
          "num_cycles": 6,
          "num_days": 1,
          "phase": "-",
          "doses_day_patient": 375
        }
      ],
      "vincristine": [
        {
          "phase": "-",
          "doses_day_patient": 1.4,
          "max_dose": 2,
          "units": "mg/m2",
          "total_dosage": 8.399999999999999,
          "num_cycles": 6,
          "num_days": 1,
          "drug": "Vincristine"
        }
      ],
      "prednisone": [
        {
          "num_days": 1,
          "num_cycles": 6,
          "doses_day_patient": 45,
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 270,
          "drug": "Prednisone"
        }
      ],
      "cyclophosphamide": [
        {
          "num_days": 1,
          "doses_day_patient": 750,
          "units": "mg/m2",
          "total_dosage": 4500,
          "num_cycles": 6,
          "drug": "Cyclophosphamide",
          "phase": "-"
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 300,
          "doses_day_patient": 50,
          "units": "mg/m2",
          "num_days": 1,
          "phase": "-",
          "drug": "Doxorubicin",
          "num_cycles": 6
        }
      ]
    }
  },
  "wilmstumorlowriskstage3vincristineactinomycind5cycles": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Low Risk Stage 3",
    "regimen": "Vincristine + Actinomycin D (5 Cycles)",
    "drugs": {
      "vincristine": [
        {
          "units": "mg/m2",
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "num_cycles": 11,
          "phase": "Post-Operative",
          "num_days": 1,
          "drug": "Vincristine",
          "total_dosage": 16.5
        }
      ],
      "actinomycind": [
        {
          "units": "mg/kg",
          "drug": "Actinomycin D",
          "num_cycles": 5,
          "num_days": 1,
          "total_dosage": 0.22499999999999998,
          "phase": "Post-Operative",
          "doses_day_patient": 0.045
        }
      ]
    }
  },
  "hodgkinslymphomalowriskoppa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "OPPA",
    "drugs": {
      "vincristine": [
        {
          "num_cycles": 4,
          "phase": "-",
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "num_days": 3,
          "total_dosage": 18,
          "drug": "Vincristine"
        }
      ],
      "procarbazine": [
        {
          "drug": "Procarbazine",
          "doses_day_patient": 100,
          "num_cycles": 4,
          "units": "mg/m2",
          "total_dosage": 6000,
          "num_days": 15,
          "phase": "-"
        }
      ],
      "prednisone": [
        {
          "phase": "-",
          "doses_day_patient": 60,
          "drug": "Prednisone",
          "num_cycles": 4,
          "units": "mg/m2",
          "num_days": 15,
          "total_dosage": 3600
        }
      ],
      "doxorubicin": [
        {
          "num_days": 2,
          "drug": "Doxorubicin",
          "units": "mg/m2",
          "phase": "-",
          "num_cycles": 4,
          "total_dosage": 320,
          "doses_day_patient": 40
        }
      ]
    }
  },
  "hodgkinslymphomalowriskcopdac": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "COPDac",
    "drugs": {
      "cyclophosphamide": [
        {
          "doses_day_patient": 500,
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "total_dosage": 4000,
          "num_days": 2,
          "num_cycles": 4,
          "phase": "-"
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "num_cycles": 4,
          "drug": "Vincristine",
          "num_days": 2,
          "phase": "-",
          "max_dose": 2,
          "total_dosage": 12,
          "units": "mg/m2"
        }
      ],
      "prednisone": [
        {
          "units": "mg/m2",
          "drug": "Prednisone",
          "num_cycles": 4,
          "num_days": 15,
          "phase": "-",
          "total_dosage": 2400,
          "doses_day_patient": 40
        }
      ],
      "dacarbazine": [
        {
          "drug": "Dacarbazine",
          "total_dosage": 3000,
          "units": "mg/m2",
          "phase": "-",
          "doses_day_patient": 250,
          "num_cycles": 4,
          "num_days": 3
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomaabvstandarddosewithvinblastine": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "ABV Standard Dose (with Vinblastine)",
    "drugs": {
      "doxorubicin": [
        {
          "num_days": 2,
          "total_dosage": 200,
          "phase": "-",
          "drug": "Doxorubicin",
          "num_cycles": 4,
          "doses_day_patient": 25,
          "units": "mg/m2",
          "max_dose": 300
        }
      ],
      "bleomycin": [
        {
          "doses_day_patient": 10,
          "total_dosage": 40,
          "drug": "Bleomycin",
          "num_cycles": 4,
          "num_days": 1,
          "units": "mg/m2",
          "phase": "-"
        }
      ],
      "vinblastine": [
        {
          "doses_day_patient": 6,
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 4,
          "drug": "Vinblastine",
          "total_dosage": 24,
          "phase": "-"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskcopp": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "COPP",
    "drugs": {
      "cyclophosphamide": [
        {
          "units": "mg/m2",
          "doses_day_patient": 500,
          "drug": "Cyclophosphamide",
          "total_dosage": 4000,
          "num_days": 2,
          "num_cycles": 4,
          "phase": "-"
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "total_dosage": 12,
          "phase": "-",
          "units": "mg/m2",
          "max_dose": 2,
          "num_days": 2,
          "drug": "Vincristine",
          "num_cycles": 4
        }
      ],
      "prednisone": [
        {
          "doses_day_patient": 40,
          "num_cycles": 4,
          "units": "mg/m2",
          "drug": "Prednisone",
          "num_days": 15,
          "phase": "-",
          "total_dosage": 2400
        }
      ],
      "procarbazine": [
        {
          "phase": "-",
          "drug": "Procarbazine",
          "num_cycles": 4,
          "doses_day_patient": 100,
          "units": "mg/m2",
          "total_dosage": 6000,
          "num_days": 15
        }
      ]
    }
  },
  "lymphoblasticlymphomalowriskallregimen1": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "drug": "Prednisone",
          "doses_day_patient": 60,
          "units": "mg/m2",
          "total_dosage": 420,
          "num_days": 1,
          "num_cycles": 7,
          "phase": "Induction"
        }, {
          "doses_day_patient": 40,
          "num_days": 1,
          "total_dosage": 840,
          "phase": "Induction",
          "units": "mg/m2",
          "drug": "Prednisone",
          "num_cycles": 21
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "total_dosage": 6,
          "max_dose": 2,
          "phase": "Induction",
          "num_cycles": 4,
          "num_days": 1,
          "drug": "Vincristine"
        }, {
          "units": "mg/m2",
          "max_dose": 2,
          "num_days": 1,
          "doses_day_patient": 1.5,
          "total_dosage": 1.5,
          "phase": "Consolidation",
          "drug": "Vincristine",
          "num_cycles": 1
        }, {
          "num_cycles": 10,
          "phase": "Maintenance",
          "num_days": 3,
          "total_dosage": 45,
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "drug": "Vincristine"
        }
      ],
      "asparaginase": [
        {
          "num_cycles": 3,
          "phase": "Induction",
          "drug": "Asparaginase",
          "num_days": 3,
          "units": "mg/m2",
          "total_dosage": 54000,
          "doses_day_patient": 6000
        }
      ],
      "methotrexateit": [
        {
          "num_days": 1,
          "units": "mg",
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "phase": "Induction",
          "num_cycles": 3
        }, {
          "drug": "Methotrexate IT",
          "num_cycles": 3,
          "phase": "Consolidation",
          "num_days": 1,
          "total_dosage": 45,
          "doses_day_patient": 15,
          "units": "mg"
        }, {
          "total_dosage": 120,
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "units": "mg",
          "phase": "Maintenance",
          "num_days": 2,
          "doses_day_patient": 15
        }, {
          "num_cycles": 6,
          "num_days": 1,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "units": "mg",
          "total_dosage": 90,
          "phase": "Maintenance"
        }
      ],
      "6mp": [
        {
          "doses_day_patient": 75,
          "drug": "6MP",
          "num_cycles": 28,
          "units": "mg/m2",
          "total_dosage": 2100,
          "num_days": 1,
          "phase": "Consolidation"
        }, {
          "total_dosage": 63000,
          "doses_day_patient": 75,
          "phase": "Maintenance",
          "drug": "6MP",
          "num_cycles": 10,
          "units": "mg/m2",
          "num_days": 84
        }
      ],
      "dexamethasone": [
        {
          "num_days": 15,
          "drug": "Dexamethasone",
          "units": "mg/m2",
          "phase": "Maintenance",
          "doses_day_patient": 6,
          "num_cycles": 10,
          "total_dosage": 900
        }
      ],
      "methotrexate": [
        {
          "num_days": 10,
          "total_dosage": 800,
          "num_cycles": 4,
          "phase": "Maintenance",
          "drug": "Methotrexate",
          "units": "mg/m2",
          "doses_day_patient": 20
        }, {
          "phase": "Maintenance",
          "doses_day_patient": 20,
          "total_dosage": 1320,
          "drug": "Methotrexate",
          "num_days": 11,
          "units": "mg/m2",
          "num_cycles": 6
        }
      ]
    }
  },
  "wilmstumorhighriskallstagesvincristineactinomycinddoxorubicin5cycles": {
    "cancer": "Wilms Tumor",
    "risk_strat": "High Risk All Stages",
    "regimen": "Vincristine + Actinomycin D + Doxorubicin (5 Cycles)",
    "drugs": {
      "vincristine": [
        {
          "phase": "Post-Operative",
          "num_days": 1,
          "num_cycles": 11,
          "units": "mg/m2",
          "drug": "Vincristine",
          "total_dosage": 16.5,
          "doses_day_patient": 1.5,
          "max_dose": 2
        }
      ],
      "actinomycind": [
        {
          "total_dosage": 0.22499999999999998,
          "num_days": 1,
          "phase": "Post-Operative",
          "drug": "Actinomycin D",
          "num_cycles": 5,
          "units": "mg/kg",
          "doses_day_patient": 0.045
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "total_dosage": 250,
          "phase": "Post-Operative",
          "num_cycles": 5,
          "doses_day_patient": 50,
          "drug": "Doxorubicin",
          "num_days": 1
        }
      ]
    }
  },
  "wilmstumorhighriskallstagesvincristineactinomycinddoxorubicin": {
    "cancer": "Wilms Tumor",
    "risk_strat": "High Risk All Stages",
    "regimen": "Vincristine + Actinomycin D + Doxorubicin",
    "drugs": {
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "Pre-Operative",
          "units": "mg/m2",
          "num_cycles": 6,
          "drug": "Vincristine",
          "total_dosage": 9,
          "num_days": 1
        }
      ],
      "actinomycind": [
        {
          "num_days": 1,
          "num_cycles": 3,
          "phase": "Pre-Operative",
          "units": "mg/kg",
          "doses_day_patient": 0.045,
          "drug": "Actinomycin D",
          "total_dosage": 0.135
        }
      ],
      "doxorubicin": [
        {
          "phase": "Pre-Operative",
          "total_dosage": 100,
          "num_cycles": 2,
          "doses_day_patient": 50,
          "num_days": 1,
          "units": "mg/m2",
          "drug": "Doxorubicin"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomaava": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "AVA",
    "drugs": {
      "doxorubicin": [
        {
          "num_cycles": 4,
          "total_dosage": 200,
          "units": "mg/m2",
          "phase": "-",
          "doses_day_patient": 50,
          "num_days": 1,
          "drug": "Doxorubicin"
        }
      ],
      "actinomycind": [
        {
          "num_cycles": 4,
          "phase": "-",
          "total_dosage": 4,
          "drug": "Actinomycin D",
          "doses_day_patient": 1,
          "num_days": 1,
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "phase": "-",
          "num_cycles": 8,
          "units": "mg/m2",
          "total_dosage": 12,
          "num_days": 1
        }
      ],
      "cyclophosphamide": [
        {
          "drug": "Cyclophosphamide",
          "total_dosage": 2400,
          "num_days": 1,
          "num_cycles": 4,
          "units": "mg/m2",
          "doses_day_patient": 600,
          "phase": "-"
        }
      ]
    }
  },
  "allveryhighriskallregimen4": {
    "cancer": "ALL",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 4",
    "drugs": {
      "prednisone": [
        {
          "drug": "Prednisone",
          "num_cycles": 29,
          "num_days": 1,
          "total_dosage": 1740,
          "doses_day_patient": 60,
          "phase": "Induction",
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "num_cycles": 4,
          "total_dosage": 6,
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "num_days": 1,
          "phase": "Induction",
          "units": "mg/m2"
        }, {
          "phase": "Interim Maintenance",
          "doses_day_patient": 1.5,
          "num_days": 1,
          "num_cycles": 5,
          "total_dosage": 7.5,
          "units": "mg/m2",
          "max_dose": 2,
          "drug": "Vincristine"
        }, {
          "num_days": 1,
          "total_dosage": 4.5,
          "phase": "Delayed Intensification",
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_cycles": 3,
          "drug": "Vincristine",
          "max_dose": 2
        }, {
          "drug": "Vincristine",
          "max_dose": 2,
          "phase": "Maintenance",
          "doses_day_patient": 1.5,
          "total_dosage": 36,
          "units": "mg/m2",
          "num_cycles": 8,
          "num_days": 3
        }
      ],
      "asparaginase": [
        {
          "total_dosage": 54000,
          "drug": "Asparaginase",
          "num_cycles": 3,
          "num_days": 3,
          "phase": "Induction",
          "doses_day_patient": 6000,
          "units": "mg/m2"
        }, {
          "num_days": 3,
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "drug": "Asparaginase",
          "num_cycles": 2,
          "total_dosage": 36000
        }
      ],
      "methotrexateit": [
        {
          "phase": "Induction",
          "doses_day_patient": 15,
          "num_cycles": 3,
          "drug": "Methotrexate IT",
          "units": "mg",
          "total_dosage": 45,
          "num_days": 1
        },
        {
          "num_cycles": 4,
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "total_dosage": 60,
          "phase": "Consolidation",
          "units": "mg"
        },
        {
          "total_dosage": 15,
          "num_days": 1,
          "num_cycles": 1,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "phase": "Interim Maintenance",
          "units": "mg"
        },
        {
          "drug": "Methotrexate IT",
          "units": "mg",
          "num_cycles": 3,
          "num_days": 1,
          "doses_day_patient": 15,
          "phase": "Delayed Intensification",
          "total_dosage": 45
        }, {
          "units": "mg",
          "doses_day_patient": 15,
          "total_dosage": 120,
          "num_days": 1,
          "num_cycles": 8,
          "phase": "Maintenance",
          "drug": "Methotrexate IT"
        }
      ],
      "cyclophosphamide": [
        {
          "num_days": 1,
          "phase": "Consolidation",
          "total_dosage": 2000,
          "doses_day_patient": 1000,
          "num_cycles": 2,
          "units": "mg/m2",
          "drug": "Cyclophosphamide"
        }, {
          "num_days": 1,
          "num_cycles": 1,
          "units": "mg/m2",
          "doses_day_patient": 1000,
          "phase": "Delayed Intensification",
          "drug": "Cyclophosphamide",
          "total_dosage": 1000
        }
      ],
      "6mp": [
        {
          "num_days": 1,
          "phase": "Consolidation",
          "drug": "6MP",
          "doses_day_patient": 60,
          "total_dosage": 1680,
          "units": "mg/m2",
          "num_cycles": 28
        }, {
          "drug": "6MP",
          "total_dosage": 900,
          "phase": "Delayed Intensification",
          "num_days": 1,
          "num_cycles": 15,
          "units": "mg/m2",
          "doses_day_patient": 60
        }, {
          "num_days": 84,
          "phase": "Maintenance",
          "drug": "6MP",
          "num_cycles": 8,
          "total_dosage": 50400,
          "doses_day_patient": 75,
          "units": "mg/m2"
        }
      ],
      "cytarabine": [
        {
          "doses_day_patient": 75,
          "num_cycles": 4,
          "phase": "Consolidation",
          "units": "mg/m2",
          "total_dosage": 1200,
          "num_days": 4,
          "drug": "Cytarabine"
        }, {
          "phase": "Delayed Intensification",
          "num_days": 4,
          "drug": "Cytarabine",
          "units": "mg/m2",
          "num_cycles": 2,
          "doses_day_patient": 75,
          "total_dosage": 600
        }
      ],
      "methotrexate": [
        {
          "phase": "Interim Maintenance",
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 100,
          "num_cycles": 1,
          "drug": "Methotrexate",
          "doses_day_patient": 100
        },
        {
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "drug": "Methotrexate",
          "num_cycles": 1,
          "total_dosage": 150,
          "doses_day_patient": 150,
          "num_days": 1
        },
        {
          "phase": "Interim Maintenance",
          "total_dosage": 200,
          "drug": "Methotrexate",
          "num_days": 1,
          "doses_day_patient": 200,
          "num_cycles": 1,
          "units": "mg/m2"
        },
        {
          "num_days": 1,
          "units": "mg/m2",
          "doses_day_patient": 250,
          "drug": "Methotrexate",
          "total_dosage": 250,
          "num_cycles": 1,
          "phase": "Interim Maintenance"
        }, {
          "total_dosage": 300,
          "doses_day_patient": 300,
          "units": "mg/m2",
          "num_days": 1,
          "phase": "Interim Maintenance",
          "num_cycles": 1,
          "drug": "Methotrexate"
        }, {
          "drug": "Methotrexate",
          "doses_day_patient": 20,
          "total_dosage": 1760,
          "num_cycles": 8,
          "phase": "Maintenance",
          "units": "mg/m2",
          "num_days": 11
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "doses_day_patient": 10,
          "drug": "Dexamethasone",
          "total_dosage": 140,
          "num_cycles": 2,
          "num_days": 7,
          "phase": "Delayed Intensification"
        }, {
          "doses_day_patient": 6,
          "total_dosage": 720,
          "drug": "Dexamethasone",
          "num_cycles": 8,
          "num_days": 15,
          "phase": "Maintenance",
          "units": "mg/m2"
        }
      ],
      "doxorubicin": [
        {
          "doses_day_patient": 25,
          "num_days": 1,
          "drug": "Doxorubicin",
          "num_cycles": 3,
          "total_dosage": 75,
          "units": "mg/m2",
          "phase": "Delayed Intensification"
        }
      ]
    }
  },
  "lymphoblasticlymphomahighriskallregimen2": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 60,
          "total_dosage": 1740,
          "phase": "Induction",
          "num_cycles": 29,
          "drug": "Prednisone"
        }
      ],
      "vincristine": [
        {
          "phase": "Induction",
          "units": "mg/m2",
          "max_dose": 2,
          "total_dosage": 12,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "num_cycles": 4,
          "num_days": 2
        },
        {
          "drug": "Vincristine",
          "num_days": 1,
          "units": "mg/m2",
          "max_dose": 2,
          "total_dosage": 1.5,
          "num_cycles": 1,
          "doses_day_patient": 1.5,
          "phase": "Consolidation"
        },
        {
          "num_cycles": 2,
          "units": "mg/m2",
          "max_dose": 2,
          "total_dosage": 3,
          "doses_day_patient": 1.5,
          "phase": "Interim Maintenance",
          "num_days": 1,
          "drug": "Vincristine"
        },
        {
          "drug": "Vincristine",
          "num_days": 1,
          "num_cycles": 3,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "total_dosage": 4.5
        }, {
          "units": "mg/m2",
          "num_days": 3,
          "drug": "Vincristine",
          "num_cycles": 8,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "Maintenance",
          "total_dosage": 36
        }
      ],
      "asparaginase": [
        {
          "num_cycles": 3,
          "doses_day_patient": 6000,
          "num_days": 3,
          "drug": "Asparaginase",
          "total_dosage": 54000,
          "units": "mg/m2",
          "phase": "Induction"
        }, {
          "total_dosage": 54000,
          "num_cycles": 3,
          "units": "mg/m2",
          "drug": "Asparaginase",
          "doses_day_patient": 6000,
          "num_days": 3,
          "phase": "Delayed Intensification"
        }
      ],
      "methotrexateit": [
        {
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "num_days": 1,
          "units": "mg",
          "phase": "Induction",
          "doses_day_patient": 15,
          "num_cycles": 3
        },
        {
          "num_days": 1,
          "phase": "Consolidation",
          "doses_day_patient": 15,
          "units": "mg",
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "num_cycles": 3
        },
        {
          "units": "mg",
          "doses_day_patient": 15,
          "num_cycles": 1,
          "phase": "Interim Maintenance",
          "total_dosage": 15,
          "drug": "Methotrexate IT",
          "num_days": 1
        },
        {
          "total_dosage": 45,
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "units": "mg",
          "num_cycles": 3,
          "phase": "Delayed Intensification",
          "num_days": 1
        }, {
          "num_days": 2,
          "drug": "Methotrexate IT",
          "total_dosage": 120,
          "phase": "Maintenance",
          "units": "mg",
          "num_cycles": 4,
          "doses_day_patient": 15
        }, {
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "units": "mg",
          "phase": "Maintenance",
          "doses_day_patient": 15,
          "total_dosage": 60,
          "num_days": 1
        }
      ],
      "6mp": [
        {
          "doses_day_patient": 75,
          "phase": "Consolidation",
          "num_cycles": 28,
          "drug": "6MP",
          "num_days": 1,
          "total_dosage": 2100,
          "units": "mg/m2"
        }, {
          "units": "mg/m2",
          "num_cycles": 50,
          "total_dosage": 3750,
          "phase": "Interim Maintenance",
          "drug": "6MP",
          "num_days": 1,
          "doses_day_patient": 75
        }, {
          "doses_day_patient": 60,
          "units": "mg/m2",
          "drug": "6MP",
          "num_cycles": 15,
          "total_dosage": 900,
          "num_days": 1,
          "phase": "Delayed Intensification"
        }, {
          "num_cycles": 8,
          "total_dosage": 50400,
          "doses_day_patient": 75,
          "num_days": 84,
          "units": "mg/m2",
          "phase": "Maintenance",
          "drug": "6MP"
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "doses_day_patient": 6,
          "total_dosage": 60,
          "phase": "Interim Maintenance",
          "drug": "Dexamethasone",
          "num_cycles": 2,
          "num_days": 5
        }, {
          "total_dosage": 140,
          "num_cycles": 2,
          "num_days": 7,
          "units": "mg/m2",
          "doses_day_patient": 10,
          "phase": "Delayed Intensification",
          "drug": "Dexamethasone"
        }, {
          "num_cycles": 8,
          "doses_day_patient": 6,
          "num_days": 15,
          "phase": "Maintenance",
          "total_dosage": 720,
          "drug": "Dexamethasone",
          "units": "mg/m2"
        }
      ],
      "methotrexate": [
        {
          "num_days": 1,
          "doses_day_patient": 20,
          "num_cycles": 8,
          "phase": "Interim Maintenance",
          "units": "mg/m2",
          "drug": "Methotrexate",
          "total_dosage": 160
        }, {
          "num_days": 10,
          "doses_day_patient": 20,
          "phase": "Maintenance",
          "total_dosage": 800,
          "num_cycles": 4,
          "drug": "Methotrexate",
          "units": "mg/m2"
        }, {
          "drug": "Methotrexate",
          "total_dosage": 880,
          "doses_day_patient": 20,
          "phase": "Maintenance",
          "units": "mg/m2",
          "num_days": 11,
          "num_cycles": 4
        }
      ],
      "doxorubicin": [
        {
          "doses_day_patient": 25,
          "phase": "Delayed Intensification",
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 3,
          "total_dosage": 75,
          "drug": "Doxorubicin"
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 1,
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "doses_day_patient": 1000,
          "num_days": 1,
          "phase": "Delayed Intensification",
          "total_dosage": 1000
        }
      ],
      "cytarabine": [
        {
          "phase": "Delayed Intensification",
          "num_days": 3,
          "num_cycles": 2,
          "doses_day_patient": 75,
          "total_dosage": 450,
          "units": "mg/m2",
          "drug": "Cytarabine"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskcopdac": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "COPDac",
    "drugs": {
      "cyclophosphamide": [
        {
          "doses_day_patient": 500,
          "units": "mg/m2",
          "num_cycles": 4,
          "total_dosage": 4000,
          "drug": "Cyclophosphamide",
          "num_days": 2,
          "phase": "-"
        }
      ],
      "vincristine": [
        {
          "phase": "-",
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_cycles": 4,
          "num_days": 2,
          "total_dosage": 12,
          "max_dose": 2,
          "doses_day_patient": 1.5
        }
      ],
      "prednisone": [
        {
          "drug": "Prednisone",
          "num_days": 15,
          "total_dosage": 2400,
          "phase": "-",
          "num_cycles": 4,
          "doses_day_patient": 40,
          "units": "mg/m2"
        }
      ],
      "dacarbazine": [
        {
          "units": "mg/m2",
          "drug": "Dacarbazine",
          "num_days": 3,
          "num_cycles": 4,
          "phase": "-",
          "total_dosage": 3000,
          "doses_day_patient": 250
        }
      ]
    }
  },
  "wilmstumorlowriskstage2vincristineactinomycind5cycles": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Low Risk Stage 2",
    "regimen": "Vincristine + Actinomycin D (5 Cycles)",
    "drugs": {
      "vincristine": [
        {
          "max_dose": 2,
          "num_days": 1,
          "drug": "Vincristine",
          "phase": "Post-Operative",
          "total_dosage": 16.5,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_cycles": 11
        }
      ],
      "actinomycind": [
        {
          "doses_day_patient": 0.045,
          "num_days": 1,
          "drug": "Actinomycin D",
          "total_dosage": 0.22499999999999998,
          "units": "mg/kg",
          "num_cycles": 5,
          "phase": "Post-Operative"
        }
      ]
    }
  },
  "neuroblastomaintermediaterisk100doseintermediateriskregimen": {
    "cancer": "Neuroblastoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "100% Dose Intermediate Risk Regimen",
    "drugs": {
      "carboplatin": [
        {
          "doses_day_patient": 560,
          "drug": "Carboplatin",
          "num_cycles": 3,
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 1680,
          "num_days": 1
        }
      ],
      "cyclophosphamide": [
        {
          "total_dosage": 2000,
          "doses_day_patient": 1000,
          "phase": "-",
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 2,
          "drug": "Cyclophosphamide"
        }
      ],
      "doxorubicin": [
        {
          "phase": "-",
          "drug": "Doxorubicin",
          "num_days": 1,
          "num_cycles": 2,
          "doses_day_patient": 30,
          "total_dosage": 60,
          "units": "mg/m2"
        }
      ],
      "etoposide": [
        {
          "num_cycles": 2,
          "total_dosage": 720,
          "drug": "Etoposide",
          "units": "mg/m2",
          "doses_day_patient": 120,
          "num_days": 3,
          "phase": "-"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskabvepc": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "ABVE-PC",
    "drugs": {
      "doxorubicin": [
        {
          "drug": "Doxorubicin",
          "doses_day_patient": 25,
          "total_dosage": 200,
          "phase": "-",
          "num_days": 2,
          "num_cycles": 4,
          "units": "mg/m2"
        }
      ],
      "bleomycin": [
        {
          "max_dose": 30000,
          "drug": "Bleomycin",
          "doses_day_patient": 5,
          "num_cycles": 4,
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 20,
          "phase": "-"
        }, {
          "units": "mg/m2",
          "drug": "Bleomycin",
          "total_dosage": 40,
          "max_dose": 30000,
          "phase": "-",
          "num_days": 1,
          "doses_day_patient": 10,
          "num_cycles": 4
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "phase": "-",
          "doses_day_patient": 1.4,
          "total_dosage": 11.2,
          "num_cycles": 4,
          "max_dose": 2,
          "units": "mg/m2",
          "num_days": 2
        }
      ],
      "etoposide": [
        {
          "num_days": 3,
          "phase": "-",
          "total_dosage": 1500,
          "units": "mg/m2",
          "drug": "Etoposide",
          "doses_day_patient": 125,
          "num_cycles": 4
        }
      ],
      "prednisone": [
        {
          "units": "mg/m2",
          "num_days": 7,
          "doses_day_patient": 20,
          "phase": "-",
          "total_dosage": 560,
          "num_cycles": 4,
          "drug": "Prednisone"
        }
      ],
      "cyclophosphamide": [
        {
          "phase": "-",
          "num_days": 2,
          "units": "mg/m2",
          "total_dosage": 4800,
          "num_cycles": 4,
          "drug": "Cyclophosphamide",
          "doses_day_patient": 600
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskoepa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "OEPA",
    "drugs": {
      "vincristine": [
        {
          "total_dosage": 9,
          "drug": "Vincristine",
          "num_cycles": 2,
          "num_days": 3,
          "max_dose": 2,
          "phase": "-",
          "doses_day_patient": 1.5,
          "units": "mg/m2"
        }
      ],
      "etoposide": [
        {
          "total_dosage": 1250,
          "doses_day_patient": 125,
          "num_days": 5,
          "num_cycles": 2,
          "units": "mg/m2",
          "drug": "Etoposide",
          "phase": "-"
        }
      ],
      "prednisone": [
        {
          "drug": "Prednisone",
          "doses_day_patient": 60,
          "total_dosage": 1800,
          "num_cycles": 2,
          "units": "mg/m2",
          "phase": "-",
          "num_days": 15
        }
      ],
      "doxorubicin": [
        {
          "num_cycles": 2,
          "phase": "-",
          "num_days": 2,
          "total_dosage": 160,
          "doses_day_patient": 40,
          "drug": "Doxorubicin",
          "units": "mg/m2"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomavincristinebleomycindoublet": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "Vincristine + Bleomycin Doublet",
    "drugs": {
      "vincristine": [
        {
          "total_dosage": 9,
          "phase": "-",
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_cycles": 6,
          "drug": "Vincristine",
          "num_days": 1,
          "max_dose": 2
        }
      ],
      "bleomycin": [
        {
          "num_days": 1,
          "doses_day_patient": 15,
          "drug": "Bleomycin",
          "phase": "-",
          "num_cycles": 6,
          "total_dosage": 90,
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskoepa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "OEPA",
    "drugs": {
      "vincristine": [
        {
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "total_dosage": 9,
          "num_days": 3,
          "phase": "-",
          "units": "mg/m2",
          "max_dose": 2,
          "num_cycles": 2
        }
      ],
      "etoposide": [
        {
          "drug": "Etoposide",
          "num_days": 5,
          "phase": "-",
          "total_dosage": 1250,
          "num_cycles": 2,
          "units": "mg/m2",
          "doses_day_patient": 125
        }
      ],
      "prednisone": [
        {
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 1800,
          "drug": "Prednisone",
          "num_days": 15,
          "doses_day_patient": 60,
          "num_cycles": 2
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 160,
          "num_days": 2,
          "drug": "Doxorubicin",
          "doses_day_patient": 40,
          "num_cycles": 2,
          "phase": "-",
          "units": "mg/m2"
        }
      ]
    }
  },
  "germcelltumorstandardriskpeb": {
    "cancer": "Germ Cell Tumor",
    "risk_strat": "Standard Risk",
    "regimen": "PEB",
    "drugs": {
      "cisplatin": [
        {
          "phase": "-",
          "num_cycles": 4,
          "total_dosage": 400,
          "doses_day_patient": 20,
          "drug": "Cisplatin",
          "units": "mg/m2",
          "num_days": 5
        }
      ],
      "etoposide": [
        {
          "drug": "Etoposide",
          "total_dosage": 2000,
          "num_cycles": 4,
          "phase": "-",
          "num_days": 5,
          "units": "mg/m2",
          "doses_day_patient": 100
        }
      ],
      "bleomycin": [
        {
          "units": "mg/m2",
          "num_days": 1,
          "num_cycles": 4,
          "drug": "Bleomycin",
          "max_dose": 30000,
          "doses_day_patient": 15,
          "phase": "-",
          "total_dosage": 60
        }
      ]
    }
  },
  "retinoblastomametastaticcho": {
    "cancer": "Retinoblastoma",
    "risk_strat": "Metastatic",
    "regimen": "CHO",
    "drugs": {
      "cyclophosphamide": [
        {
          "doses_day_patient": 40,
          "phase": "-",
          "units": "mg/kg",
          "total_dosage": 240,
          "num_days": 1,
          "num_cycles": 6,
          "drug": "Cyclophosphamide"
        }
      ],
      "vincristine": [
        {
          "phase": "-",
          "num_days": 1,
          "total_dosage": 9,
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_cycles": 6,
          "doses_day_patient": 1.5,
          "max_dose": 2
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 180,
          "phase": "-",
          "drug": "Doxorubicin",
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 6,
          "doses_day_patient": 30
        }
      ]
    }
  },
  "allhighriskallregimen2": {
    "cancer": "ALL",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "phase": "Induction",
          "drug": "Prednisone",
          "num_cycles": 29,
          "num_days": 1,
          "units": "mg/m2",
          "doses_day_patient": 60,
          "total_dosage": 1740
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "num_days": 2,
          "num_cycles": 4,
          "units": "mg/m2",
          "max_dose": 2,
          "total_dosage": 12,
          "phase": "Induction",
          "doses_day_patient": 1.5
        },
        {
          "units": "mg/m2",
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "phase": "Consolidation",
          "num_days": 1,
          "drug": "Vincristine",
          "total_dosage": 1.5,
          "num_cycles": 1
        },
        {
          "num_cycles": 2,
          "units": "mg/m2",
          "drug": "Vincristine",
          "total_dosage": 3,
          "max_dose": 2,
          "phase": "Interim Maintenance",
          "doses_day_patient": 1.5,
          "num_days": 1
        },
        {
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "max_dose": 2,
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "num_cycles": 3,
          "num_days": 1,
          "total_dosage": 4.5
        }, {
          "drug": "Vincristine",
          "units": "mg/m2",
          "total_dosage": 36,
          "num_days": 3,
          "num_cycles": 8,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "Maintenance"
        }
      ],
      "asparaginase": [
        {
          "total_dosage": 54000,
          "doses_day_patient": 6000,
          "num_cycles": 3,
          "units": "mg/m2",
          "phase": "Induction",
          "drug": "Asparaginase",
          "num_days": 3
        }, {
          "phase": "Delayed Intensification",
          "num_days": 3,
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "total_dosage": 54000,
          "drug": "Asparaginase",
          "num_cycles": 3
        }
      ],
      "methotrexateit": [
        {
          "num_cycles": 3,
          "total_dosage": 45,
          "num_days": 1,
          "doses_day_patient": 15,
          "units": "mg",
          "phase": "Induction",
          "drug": "Methotrexate IT"
        },
        {
          "total_dosage": 45,
          "doses_day_patient": 15,
          "num_days": 1,
          "phase": "Consolidation",
          "drug": "Methotrexate IT",
          "num_cycles": 3,
          "units": "mg"
        },
        {
          "num_days": 1,
          "num_cycles": 1,
          "phase": "Interim Maintenance",
          "total_dosage": 15,
          "units": "mg",
          "drug": "Methotrexate IT",
          "doses_day_patient": 15
        },
        {
          "doses_day_patient": 15,
          "total_dosage": 45,
          "units": "mg",
          "drug": "Methotrexate IT",
          "num_days": 1,
          "num_cycles": 3,
          "phase": "Delayed Intensification"
        }, {
          "phase": "Maintenance",
          "num_days": 2,
          "units": "mg",
          "num_cycles": 4,
          "total_dosage": 120,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15
        }, {
          "phase": "Maintenance",
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "total_dosage": 60,
          "doses_day_patient": 15,
          "num_days": 1,
          "units": "mg"
        }
      ],
      "6mp": [
        {
          "total_dosage": 2100,
          "phase": "Consolidation",
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 28,
          "drug": "6MP",
          "doses_day_patient": 75
        }, {
          "units": "mg/m2",
          "total_dosage": 3750,
          "phase": "Interim Maintenance",
          "drug": "6MP",
          "num_days": 1,
          "num_cycles": 50,
          "doses_day_patient": 75
        }, {
          "total_dosage": 900,
          "num_days": 1,
          "phase": "Delayed Intensification",
          "num_cycles": 15,
          "doses_day_patient": 60,
          "drug": "6MP",
          "units": "mg/m2"
        }, {
          "phase": "Maintenance",
          "num_cycles": 8,
          "total_dosage": 50400,
          "units": "mg/m2",
          "num_days": 84,
          "drug": "6MP",
          "doses_day_patient": 75
        }
      ],
      "dexamethasone": [
        {
          "drug": "Dexamethasone",
          "num_days": 5,
          "units": "mg/m2",
          "num_cycles": 2,
          "doses_day_patient": 6,
          "phase": "Interim Maintenance",
          "total_dosage": 60
        }, {
          "doses_day_patient": 10,
          "phase": "Delayed Intensification",
          "num_days": 7,
          "drug": "Dexamethasone",
          "units": "mg/m2",
          "total_dosage": 140,
          "num_cycles": 2
        }, {
          "num_days": 15,
          "doses_day_patient": 6,
          "phase": "Maintenance",
          "drug": "Dexamethasone",
          "num_cycles": 8,
          "total_dosage": 720,
          "units": "mg/m2"
        }
      ],
      "methotrexate": [
        {
          "total_dosage": 160,
          "num_days": 1,
          "doses_day_patient": 20,
          "phase": "Interim Maintenance",
          "num_cycles": 8,
          "drug": "Methotrexate",
          "units": "mg/m2"
        }, {
          "phase": "Maintenance",
          "total_dosage": 800,
          "num_days": 10,
          "units": "mg/m2",
          "doses_day_patient": 20,
          "num_cycles": 4,
          "drug": "Methotrexate"
        }, {
          "num_days": 11,
          "total_dosage": 880,
          "units": "mg/m2",
          "drug": "Methotrexate",
          "phase": "Maintenance",
          "num_cycles": 4,
          "doses_day_patient": 20
        }
      ],
      "doxorubicin": [
        {
          "num_cycles": 3,
          "num_days": 1,
          "total_dosage": 75,
          "phase": "Delayed Intensification",
          "drug": "Doxorubicin",
          "units": "mg/m2",
          "doses_day_patient": 25
        }
      ],
      "cyclophosphamide": [
        {
          "total_dosage": 1000,
          "phase": "Delayed Intensification",
          "drug": "Cyclophosphamide",
          "num_cycles": 1,
          "doses_day_patient": 1000,
          "units": "mg/m2",
          "num_days": 1
        }
      ],
      "cytarabine": [
        {
          "num_days": 3,
          "phase": "Delayed Intensification",
          "drug": "Cytarabine",
          "units": "mg/m2",
          "total_dosage": 450,
          "num_cycles": 2,
          "doses_day_patient": 75
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage2vincristineactinomycind5cycles": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 2",
    "regimen": "Vincristine + Actinomycin D (5 Cycles)",
    "drugs": {
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "Post-Operative",
          "units": "mg/m2",
          "num_cycles": 11,
          "drug": "Vincristine",
          "total_dosage": 16.5,
          "num_days": 1
        }
      ],
      "actinomycind": [
        {
          "drug": "Actinomycin D",
          "num_cycles": 5,
          "total_dosage": 0.22499999999999998,
          "num_days": 1,
          "phase": "Post-Operative",
          "doses_day_patient": 0.045,
          "units": "mg/kg"
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskcopdac": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "COPDac",
    "drugs": {
      "cyclophosphamide": [
        {
          "doses_day_patient": 500,
          "num_cycles": 4,
          "units": "mg/m2",
          "total_dosage": 4000,
          "drug": "Cyclophosphamide",
          "phase": "-",
          "num_days": 2
        }
      ],
      "vincristine": [
        {
          "num_cycles": 4,
          "drug": "Vincristine",
          "max_dose": 2,
          "total_dosage": 12,
          "units": "mg/m2",
          "phase": "-",
          "doses_day_patient": 1.5,
          "num_days": 2
        }
      ],
      "prednisone": [
        {
          "units": "mg/m2",
          "doses_day_patient": 40,
          "drug": "Prednisone",
          "num_cycles": 4,
          "num_days": 15,
          "phase": "-",
          "total_dosage": 2400
        }
      ],
      "dacarbazine": [
        {
          "doses_day_patient": 250,
          "num_days": 3,
          "drug": "Dacarbazine",
          "num_cycles": 4,
          "units": "mg/m2",
          "total_dosage": 3000,
          "phase": "-"
        }
      ]
    }
  },
  "aplstandardriskstandarddose": {
    "cancer": "APL",
    "risk_strat": "Standard Risk",
    "regimen": "Standard Dose",
    "drugs": {
      "atra": [
        {
          "num_cycles": 1,
          "phase": "Induction",
          "num_days": 56,
          "max_dose": 40,
          "total_dosage": 700,
          "units": "mg/m2",
          "doses_day_patient": 12.5,
          "drug": "ATRA"
        }, {
          "num_cycles": 3,
          "max_dose": 40,
          "phase": "Consolidation 1-3",
          "total_dosage": 2100,
          "units": "mg/m2",
          "drug": "ATRA",
          "num_days": 56,
          "doses_day_patient": 12.5
        }, {
          "num_days": 20,
          "max_dose": 40,
          "units": "mg/m2",
          "num_cycles": 1,
          "phase": "Consolidation 4",
          "total_dosage": 250,
          "doses_day_patient": 12.5,
          "drug": "ATRA"
        }
      ],
      "arsenictrioxide": [
        {
          "phase": "Induction",
          "units": "mg/m2",
          "num_days": 28,
          "num_cycles": 1,
          "doses_day_patient": 0.15,
          "total_dosage": 4.2,
          "drug": "Arsenic Trioxide"
        }, {
          "total_dosage": 9,
          "drug": "Arsenic Trioxide",
          "doses_day_patient": 0.15,
          "num_cycles": 3,
          "phase": "Consolidation 1-3",
          "units": "mg/kg",
          "num_days": 20
        }, {
          "total_dosage": 4.2,
          "phase": "Consolidation 4",
          "doses_day_patient": 0.15,
          "num_days": 28,
          "units": "mg/kg",
          "drug": "Arsenic Trioxide",
          "num_cycles": 1
        }
      ]
    }
  },
  "hepatoblastomametastaticcisplatincarboplatindoxorubicin": {
    "cancer": "Hepatoblastoma",
    "risk_strat": "Metastatic",
    "regimen": "Cisplatin + Carboplatin + Doxorubicin",
    "drugs": {
      "cisplatin": [
        {
          "phase": "-",
          "num_cycles": 5,
          "doses_day_patient": 80,
          "drug": "Cisplatin",
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 400
        }
      ],
      "carboplatin": [
        {
          "drug": "Carboplatin",
          "phase": "-",
          "total_dosage": 2500,
          "num_cycles": 5,
          "doses_day_patient": 500,
          "units": "mg/m2",
          "num_days": 1
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 300,
          "num_days": 1,
          "doses_day_patient": 60,
          "drug": "Doxorubicin",
          "phase": "-",
          "num_cycles": 5,
          "units": "mg/m2"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomableomycinmonotherapy": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "Bleomycin Monotherapy",
    "drugs": {
      "bleomycin": [
        {
          "num_cycles": 6,
          "units": "mg/m2",
          "doses_day_patient": 15,
          "drug": "Bleomycin",
          "num_days": 1,
          "total_dosage": 90,
          "phase": "-"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomaetoposidemonotherapy": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "Etoposide Monotherapy",
    "drugs": {
      "etoposide": [
        {
          "doses_day_patient": 100,
          "units": "mg/m2",
          "num_days": 3,
          "phase": "-",
          "drug": "Etoposide",
          "num_cycles": 33.333333333333336,
          "total_dosage": 10000,
          "max_dose": 10000
        }
      ]
    }
  },
  "germcelltumorpoorriskbep4cycles": {
    "cancer": "Germ Cell Tumor",
    "risk_strat": "Poor Risk",
    "regimen": "BEP (4 Cycles)",
    "drugs": {
      "cisplatin": [
        {
          "total_dosage": 400,
          "num_days": 5,
          "num_cycles": 4,
          "doses_day_patient": 20,
          "drug": "Cisplatin",
          "units": "mg/m2",
          "phase": "-"
        }
      ],
      "etoposide": [
        {
          "units": "mg/m2",
          "total_dosage": 2000,
          "doses_day_patient": 100,
          "drug": "Etoposide",
          "num_cycles": 4,
          "phase": "-",
          "num_days": 5
        }
      ],
      "bleomycin": [
        {
          "units": "mg/m2",
          "doses_day_patient": 30,
          "total_dosage": 360,
          "num_days": 3,
          "num_cycles": 4,
          "max_dose": 30000,
          "phase": "-",
          "drug": "Bleomycin"
        }
      ]
    }
  },
  "dlbcldlbclchop": {
    "cancer": "DLBCL",
    "risk_strat": "DLBCL",
    "regimen": "CHOP",
    "drugs": {
      "vincristine": [
        {
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 6,
          "doses_day_patient": 1.4,
          "total_dosage": 8.399999999999999,
          "phase": "-",
          "units": "mg/m2",
          "num_days": 1
        }
      ],
      "prednisone": [
        {
          "drug": "Prednisone",
          "units": "mg/m2",
          "phase": "-",
          "doses_day_patient": 45,
          "total_dosage": 270,
          "num_days": 1,
          "num_cycles": 6
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 6,
          "phase": "-",
          "units": "mg/m2",
          "doses_day_patient": 750,
          "total_dosage": 4500,
          "drug": "Cyclophosphamide",
          "num_days": 1
        }
      ],
      "doxorubicin": [
        {
          "phase": "-",
          "doses_day_patient": 50,
          "total_dosage": 300,
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 6,
          "drug": "Doxorubicin"
        }
      ]
    }
  },
  "amlamlstandarddoseinduction": {
    "cancer": "AML",
    "risk_strat": "AML",
    "regimen": "Standard-Dose Induction",
    "drugs": {
      "cytarabine": [
        {
          "units": "mg/m2",
          "num_cycles": 2,
          "num_days": 7,
          "drug": "Cytarabine",
          "total_dosage": 2800,
          "phase": "Standard Induction",
          "doses_day_patient": 200
        }, {
          "phase": "HD Consolidation",
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "num_cycles": 1,
          "drug": "Cytarabine",
          "num_days": 3,
          "total_dosage": 18000
        }
      ],
      "daunorubicin": [
        {
          "units": "mg/m2",
          "num_cycles": 2,
          "total_dosage": 300,
          "num_days": 3,
          "phase": "Standard Induction",
          "doses_day_patient": 50,
          "drug": "Daunorubicin"
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage2vincristineactinomycind": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 2",
    "regimen": "Vincristine + Actinomycin D",
    "drugs": {
      "vincristine": [
        {
          "units": "mg/m2",
          "max_dose": 2,
          "num_cycles": 5,
          "num_days": 1,
          "drug": "Vincristine",
          "phase": "Pre-Operative",
          "doses_day_patient": 1.5,
          "total_dosage": 7.5
        }
      ],
      "actinomycind": [
        {
          "units": "mg/kg",
          "num_days": 1,
          "doses_day_patient": 0.045,
          "num_cycles": 2,
          "total_dosage": 0.09,
          "drug": "Actinomycin D",
          "phase": "Pre-Operative"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomaabvlowdosewithvincristine": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "ABV Low Dose (with Vincristine)",
    "drugs": {
      "daunorubicin": [
        {
          "doses_day_patient": 10,
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 60,
          "drug": "Daunorubicin",
          "phase": "-",
          "num_cycles": 6
        }
      ],
      "bleomycin": [
        {
          "num_days": 1,
          "total_dosage": 60,
          "drug": "Bleomycin",
          "doses_day_patient": 10,
          "num_cycles": 6,
          "units": "mg/m2",
          "phase": "-"
        }
      ],
      "vincristine": [
        {
          "num_cycles": 6,
          "total_dosage": 9,
          "phase": "-",
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_days": 1,
          "max_dose": 2
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskabvepc": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "ABVE-PC",
    "drugs": {
      "doxorubicin": [
        {
          "total_dosage": 200,
          "num_days": 2,
          "num_cycles": 4,
          "phase": "-",
          "doses_day_patient": 25,
          "units": "mg/m2",
          "drug": "Doxorubicin"
        }
      ],
      "bleomycin": [
        {
          "phase": "-",
          "drug": "Bleomycin",
          "num_cycles": 4,
          "total_dosage": 20,
          "doses_day_patient": 5,
          "units": "mg/m2",
          "num_days": 1,
          "max_dose": 30000
        }, {
          "phase": "-",
          "doses_day_patient": 10,
          "units": "mg/m2",
          "num_days": 1,
          "total_dosage": 40,
          "max_dose": 30000,
          "drug": "Bleomycin",
          "num_cycles": 4
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_days": 2,
          "num_cycles": 4,
          "max_dose": 2,
          "phase": "-",
          "doses_day_patient": 1.4,
          "total_dosage": 11.2
        }
      ],
      "etoposide": [
        {
          "total_dosage": 1500,
          "phase": "-",
          "num_days": 3,
          "num_cycles": 4,
          "drug": "Etoposide",
          "units": "mg/m2",
          "doses_day_patient": 125
        }
      ],
      "prednisone": [
        {
          "drug": "Prednisone",
          "phase": "-",
          "units": "mg/m2",
          "num_cycles": 4,
          "total_dosage": 560,
          "num_days": 7,
          "doses_day_patient": 20
        }
      ],
      "cyclophosphamide": [
        {
          "phase": "-",
          "doses_day_patient": 600,
          "num_cycles": 4,
          "drug": "Cyclophosphamide",
          "num_days": 2,
          "total_dosage": 4800,
          "units": "mg/m2"
        }
      ]
    }
  },
  "lymphoblasticlymphomahighriskallregimen1": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "num_days": 1,
          "units": "mg/m2",
          "phase": "Induction",
          "doses_day_patient": 60,
          "num_cycles": 7,
          "drug": "Prednisone",
          "total_dosage": 420
        }, {
          "total_dosage": 840,
          "num_days": 1,
          "doses_day_patient": 40,
          "num_cycles": 21,
          "drug": "Prednisone",
          "phase": "Induction",
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "total_dosage": 6,
          "phase": "Induction",
          "num_days": 1,
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "num_cycles": 4,
          "units": "mg/m2"
        }, {
          "drug": "Vincristine",
          "total_dosage": 1.5,
          "num_cycles": 1,
          "max_dose": 2,
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "num_days": 1,
          "phase": "Consolidation"
        }, {
          "max_dose": 2,
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_days": 3,
          "phase": "Maintenance",
          "total_dosage": 45,
          "doses_day_patient": 1.5,
          "num_cycles": 10
        }
      ],
      "asparaginase": [
        {
          "drug": "Asparaginase",
          "phase": "Induction",
          "doses_day_patient": 6000,
          "num_days": 3,
          "num_cycles": 3,
          "total_dosage": 54000,
          "units": "mg/m2"
        }
      ],
      "methotrexateit": [
        {
          "num_cycles": 3,
          "doses_day_patient": 15,
          "total_dosage": 45,
          "units": "mg",
          "num_days": 1,
          "drug": "Methotrexate IT",
          "phase": "Induction"
        }, {
          "num_cycles": 3,
          "doses_day_patient": 15,
          "num_days": 1,
          "units": "mg",
          "total_dosage": 45,
          "drug": "Methotrexate IT",
          "phase": "Consolidation"
        }, {
          "total_dosage": 120,
          "phase": "Maintenance",
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "units": "mg",
          "doses_day_patient": 15,
          "num_days": 2
        }, {
          "num_days": 1,
          "drug": "Methotrexate IT",
          "phase": "Maintenance",
          "units": "mg",
          "total_dosage": 90,
          "doses_day_patient": 15,
          "num_cycles": 6
        }
      ],
      "6mp": [
        {
          "units": "mg/m2",
          "drug": "6MP",
          "total_dosage": 2100,
          "phase": "Consolidation",
          "num_cycles": 28,
          "doses_day_patient": 75,
          "num_days": 1
        }, {
          "doses_day_patient": 75,
          "drug": "6MP",
          "num_cycles": 10,
          "num_days": 84,
          "units": "mg/m2",
          "phase": "Maintenance",
          "total_dosage": 63000
        }
      ],
      "dexamethasone": [
        {
          "drug": "Dexamethasone",
          "num_cycles": 10,
          "phase": "Maintenance",
          "num_days": 15,
          "doses_day_patient": 6,
          "units": "mg/m2",
          "total_dosage": 900
        }
      ],
      "methotrexate": [
        {
          "doses_day_patient": 20,
          "num_days": 10,
          "drug": "Methotrexate",
          "total_dosage": 800,
          "units": "mg/m2",
          "phase": "Maintenance",
          "num_cycles": 4
        }, {
          "phase": "Maintenance",
          "num_days": 11,
          "doses_day_patient": 20,
          "drug": "Methotrexate",
          "num_cycles": 6,
          "total_dosage": 1320,
          "units": "mg/m2"
        }
      ]
    }
  },
  "germcelltumorstandardriskjeb": {
    "cancer": "Germ Cell Tumor",
    "risk_strat": "Standard Risk",
    "regimen": "JEB",
    "drugs": {
      "carboplatin": [
        {
          "num_cycles": 4,
          "units": "mg/m2",
          "phase": "-",
          "num_days": 1,
          "drug": "Carboplatin",
          "total_dosage": 2400,
          "doses_day_patient": 600
        }
      ],
      "etoposide": [
        {
          "drug": "Etoposide",
          "num_cycles": 4,
          "phase": "-",
          "doses_day_patient": 120,
          "units": "mg/m2",
          "num_days": 3,
          "total_dosage": 1440
        }
      ],
      "bleomycin": [
        {
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 15,
          "phase": "-",
          "drug": "Bleomycin",
          "total_dosage": 60,
          "num_cycles": 4,
          "max_dose": 30000
        }
      ]
    }
  },
  "hodgkinslymphomaintermediateriskcopp": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "COPP",
    "drugs": {
      "cyclophosphamide": [
        {
          "total_dosage": 4000,
          "num_days": 2,
          "doses_day_patient": 500,
          "num_cycles": 4,
          "drug": "Cyclophosphamide",
          "phase": "-",
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "num_cycles": 4,
          "total_dosage": 12,
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_days": 2,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "phase": "-"
        }
      ],
      "prednisone": [
        {
          "units": "mg/m2",
          "phase": "-",
          "num_cycles": 4,
          "num_days": 15,
          "doses_day_patient": 40,
          "drug": "Prednisone",
          "total_dosage": 2400
        }
      ],
      "procarbazine": [
        {
          "num_cycles": 4,
          "doses_day_patient": 100,
          "phase": "-",
          "num_days": 15,
          "drug": "Procarbazine",
          "total_dosage": 6000,
          "units": "mg/m2"
        }
      ]
    }
  },
  "burkittlymphomastage4burkittlymphomaregimen3": {
    "cancer": "Burkitt Lymphoma",
    "risk_strat": "Stage 4",
    "regimen": "Burkitt Lymphoma Regimen 3",
    "drugs": {
      "cyclophosphamide": [
        {
          "doses_day_patient": 40,
          "units": "mg/kg",
          "phase": "Induction",
          "num_days": 1,
          "num_cycles": 3,
          "drug": "Cyclophosphamide",
          "total_dosage": 120
        }, {
          "drug": "Cyclophosphamide",
          "phase": "Consolidation",
          "num_cycles": 3,
          "total_dosage": 180,
          "doses_day_patient": 60,
          "units": "mg/kg",
          "num_days": 1
        }
      ],
      "methotrexate": [
        {
          "num_cycles": 3,
          "units": "mg",
          "num_days": 1,
          "drug": "Methotrexate",
          "phase": "Induction",
          "doses_day_patient": 12.5,
          "total_dosage": 37.5
        }, {
          "drug": "Methotrexate",
          "num_days": 1,
          "total_dosage": 1000,
          "num_cycles": 1,
          "doses_day_patient": 1000,
          "phase": "Consolidation",
          "units": "mg/m2"
        }
      ],
      "hydrocortisone": [
        {
          "phase": "Induction",
          "num_days": 1,
          "drug": "Hydrocortisone",
          "num_cycles": 3,
          "total_dosage": 37.5,
          "doses_day_patient": 12.5,
          "units": "mg"
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "phase": "Consolidation",
          "num_cycles": 3,
          "num_days": 1,
          "total_dosage": 4.5,
          "drug": "Vincristine",
          "units": "mg/m2",
          "max_dose": 2
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage3vincristineactinomycinddoxorubicin5cycles": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 3",
    "regimen": "Vincristine + Actinomycin D + Doxorubicin (5 Cycles)",
    "drugs": {
      "vincristine": [
        {
          "phase": "Post-Operative",
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "num_cycles": 11,
          "units": "mg/m2",
          "max_dose": 2,
          "num_days": 1,
          "total_dosage": 16.5
        }
      ],
      "actinomycind": [
        {
          "total_dosage": 0.22499999999999998,
          "doses_day_patient": 0.045,
          "num_cycles": 5,
          "units": "mg/kg",
          "drug": "Actinomycin D",
          "phase": "Post-Operative",
          "num_days": 1
        }
      ],
      "doxorubicin": [
        {
          "doses_day_patient": 50,
          "units": "mg/m2",
          "drug": "Doxorubicin",
          "num_cycles": 5,
          "phase": "Post-Operative",
          "total_dosage": 250,
          "num_days": 1
        }
      ]
    }
  },
  "neuroblastomahighriskmodifiedpog9341": {
    "cancer": "Neuroblastoma",
    "risk_strat": "High Risk",
    "regimen": "Modified POG-9341",
    "drugs": {
      "carboplatin": [
        {
          "total_dosage": 3360,
          "drug": "Carboplatin",
          "num_days": 1,
          "num_cycles": 6,
          "units": "mg/m2",
          "phase": "Induction",
          "doses_day_patient": 560
        }, {
          "phase": "Consolidation",
          "units": "mg/m2",
          "total_dosage": 1000,
          "drug": "Carboplatin",
          "num_cycles": 1,
          "num_days": 2,
          "doses_day_patient": 500
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 4,
          "total_dosage": 4000,
          "doses_day_patient": 1000,
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "num_days": 1,
          "phase": "Induction"
        }, {
          "drug": "Cyclophosphamide",
          "num_days": 2,
          "phase": "Consolidation",
          "num_cycles": 1,
          "doses_day_patient": 1000,
          "total_dosage": 2000,
          "units": "mg/m2"
        }
      ],
      "doxorubicin": [
        {
          "num_cycles": 4,
          "doses_day_patient": 30,
          "total_dosage": 120,
          "phase": "Induction",
          "units": "mg/m2",
          "num_days": 1,
          "drug": "Doxorubicin"
        }, {
          "units": "mg/m2",
          "drug": "Doxorubicin",
          "phase": "Consolidation",
          "doses_day_patient": 60,
          "total_dosage": 60,
          "num_cycles": 1,
          "num_days": 1
        }
      ],
      "etoposide": [
        {
          "num_days": 3,
          "drug": "Etoposide",
          "phase": "Induction",
          "units": "mg/m2",
          "num_cycles": 4,
          "doses_day_patient": 120,
          "total_dosage": 1440
        }, {
          "num_days": 3,
          "drug": "Etoposide",
          "num_cycles": 1,
          "phase": "Consolidation",
          "doses_day_patient": 100,
          "units": "mg/m2",
          "total_dosage": 300
        }, {
          "total_dosage": 375,
          "units": "mg/m2",
          "phase": "Consolidation",
          "drug": "Etoposide",
          "doses_day_patient": 75,
          "num_days": 5,
          "num_cycles": 1
        }, {
          "num_cycles": 1,
          "phase": "Consolidation",
          "total_dosage": 75,
          "num_days": 1,
          "drug": "Etoposide",
          "units": "mg/m2",
          "doses_day_patient": 75
        }
      ],
      "cisplatin": [
        {
          "phase": "Consolidation",
          "units": "mg/m2",
          "total_dosage": 200,
          "drug": "Cisplatin",
          "num_cycles": 1,
          "doses_day_patient": 40,
          "num_days": 5
        }
      ],
      "vincristine": [
        {
          "total_dosage": 4.5,
          "units": "mg/m2",
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "num_days": 3,
          "drug": "Vincristine",
          "phase": "Consolidation",
          "num_cycles": 1
        }
      ],
      "ifosfamide": [
        {
          "drug": "Ifosfamide",
          "num_cycles": 1,
          "total_dosage": 10000,
          "doses_day_patient": 2000,
          "phase": "Consolidation",
          "units": "mg/m2",
          "num_days": 5
        }
      ]
    }
  },
  "wilmstumorlowriskstage3vincristineactinomycind": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Low Risk Stage 3",
    "regimen": "Vincristine + Actinomycin D",
    "drugs": {
      "vincristine": [
        {
          "total_dosage": 7.5,
          "num_cycles": 5,
          "phase": "Pre-Operative",
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "drug": "Vincristine",
          "num_days": 1,
          "units": "mg/m2"
        }
      ],
      "actinomycind": [
        {
          "num_days": 1,
          "drug": "Actinomycin D",
          "units": "mg/kg",
          "num_cycles": 2,
          "total_dosage": 0.09,
          "doses_day_patient": 0.045,
          "phase": "Pre-Operative"
        }
      ]
    }
  },
  "retinoblastomanonmetastaticcev": {
    "cancer": "Retinoblastoma",
    "risk_strat": "Non-Metastatic",
    "regimen": "CEV",
    "drugs": {
      "carboplatin": [
        {
          "doses_day_patient": 560,
          "drug": "Carboplatin",
          "num_days": 1,
          "total_dosage": 3360,
          "num_cycles": 6,
          "phase": "-",
          "units": "mg/m2"
        }
      ],
      "etoposide": [
        {
          "total_dosage": 1800,
          "num_days": 2,
          "doses_day_patient": 150,
          "num_cycles": 6,
          "units": "mg/m2",
          "drug": "Etoposide",
          "phase": "-"
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "num_cycles": 6,
          "phase": "-",
          "total_dosage": 9,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "num_days": 1,
          "drug": "Vincristine"
        }
      ]
    }
  },
  "rhabdomyosarcomarhabdomyosarcomavac": {
    "cancer": "Rhabdomyosarcoma",
    "risk_strat": "Rhabdomyosarcoma",
    "regimen": "VAC",
    "drugs": {
      "vincristine": [
        {
          "phase": "-",
          "max_dose": 2,
          "total_dosage": 22.5,
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 15
        }
      ],
      "actinomycind": [
        {
          "drug": "Actinomycin D",
          "total_dosage": 22.5,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "phase": "-",
          "num_cycles": 15,
          "num_days": 1
        }
      ],
      "cyclophosphamide": [
        {
          "drug": "Cyclophosphamide",
          "phase": "-",
          "num_days": 1,
          "total_dosage": 8400,
          "units": "mg/m2",
          "doses_day_patient": 1200,
          "num_cycles": 7
        }
      ]
    }
  },
  "hodgkinslymphomalowriskabvepc": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "ABVE-PC",
    "drugs": {
      "doxorubicin": [
        {
          "drug": "Doxorubicin",
          "num_days": 2,
          "num_cycles": 4,
          "doses_day_patient": 25,
          "total_dosage": 200,
          "units": "mg/m2",
          "phase": "-"
        }
      ],
      "bleomycin": [
        {
          "units": "mg/m2",
          "max_dose": 30000,
          "num_cycles": 4,
          "doses_day_patient": 5,
          "num_days": 1,
          "drug": "Bleomycin",
          "total_dosage": 20,
          "phase": "-"
        }, {
          "num_cycles": 4,
          "drug": "Bleomycin",
          "phase": "-",
          "units": "mg/m2",
          "total_dosage": 40,
          "num_days": 1,
          "doses_day_patient": 10,
          "max_dose": 30000
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 4,
          "phase": "-",
          "num_days": 2,
          "doses_day_patient": 1.4,
          "total_dosage": 11.2
        }
      ],
      "etoposide": [
        {
          "units": "mg/m2",
          "total_dosage": 1500,
          "phase": "-",
          "doses_day_patient": 125,
          "num_cycles": 4,
          "num_days": 3,
          "drug": "Etoposide"
        }
      ],
      "prednisone": [
        {
          "drug": "Prednisone",
          "num_days": 7,
          "units": "mg/m2",
          "num_cycles": 4,
          "total_dosage": 560,
          "doses_day_patient": 20,
          "phase": "-"
        }
      ],
      "cyclophosphamide": [
        {
          "num_days": 2,
          "drug": "Cyclophosphamide",
          "phase": "-",
          "num_cycles": 4,
          "doses_day_patient": 600,
          "total_dosage": 4800,
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskcoppabvd6cycles": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "COPP/ABVD (6 Cycles)",
    "drugs": {
      "cyclophosphamide": [
        {
          "total_dosage": 7800,
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "doses_day_patient": 650,
          "phase": "-",
          "num_days": 2,
          "num_cycles": 6
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "phase": "-",
          "num_days": 2,
          "drug": "Vincristine",
          "doses_day_patient": 1.4,
          "num_cycles": 6,
          "total_dosage": 16.799999999999997,
          "max_dose": 2
        }
      ],
      "procarbazine": [
        {
          "total_dosage": 8400,
          "units": "mg/m2",
          "drug": "Procarbazine",
          "num_cycles": 6,
          "num_days": 14,
          "phase": "-",
          "doses_day_patient": 100
        }
      ],
      "prednisone": [
        {
          "num_days": 14,
          "total_dosage": 3360,
          "units": "mg/m2",
          "drug": "Prednisone",
          "doses_day_patient": 40,
          "phase": "-",
          "num_cycles": 6
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 300,
          "num_cycles": 6,
          "doses_day_patient": 25,
          "drug": "Doxorubicin",
          "num_days": 2,
          "units": "mg/m2",
          "phase": "-"
        }
      ],
      "bleomycin": [
        {
          "phase": "-",
          "max_dose": 30000,
          "num_days": 2,
          "drug": "Bleomycin",
          "total_dosage": 120,
          "num_cycles": 6,
          "doses_day_patient": 10,
          "units": "mg/m2"
        }
      ],
      "vinblastine": [
        {
          "doses_day_patient": 6,
          "drug": "Vinblastine",
          "phase": "-",
          "total_dosage": 72,
          "num_cycles": 6,
          "units": "mg/m2",
          "num_days": 2
        }
      ],
      "dacarbazine": [
        {
          "doses_day_patient": 375,
          "total_dosage": 4500,
          "num_days": 2,
          "drug": "Dacarbazine",
          "phase": "-",
          "units": "mg/m2",
          "num_cycles": 6
        }
      ]
    }
  },
  "allveryhighriskallregimen1": {
    "cancer": "ALL",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "total_dosage": 420,
          "num_cycles": 7,
          "drug": "Prednisone",
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 60,
          "phase": "Induction"
        }, {
          "phase": "Induction",
          "num_days": 1,
          "total_dosage": 840,
          "doses_day_patient": 40,
          "drug": "Prednisone",
          "units": "mg/m2",
          "num_cycles": 21
        }
      ],
      "vincristine": [
        {
          "num_cycles": 4,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_days": 1,
          "drug": "Vincristine",
          "total_dosage": 6,
          "phase": "Induction",
          "max_dose": 2
        }, {
          "phase": "Consolidation",
          "num_cycles": 1,
          "total_dosage": 1.5,
          "num_days": 1,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "max_dose": 2,
          "units": "mg/m2"
        }, {
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_cycles": 10,
          "total_dosage": 45,
          "drug": "Vincristine",
          "phase": "Maintenance",
          "num_days": 3
        }
      ],
      "asparaginase": [
        {
          "num_cycles": 3,
          "num_days": 3,
          "phase": "Induction",
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "drug": "Asparaginase",
          "total_dosage": 54000
        }
      ],
      "methotrexateit": [
        {
          "doses_day_patient": 15,
          "units": "mg",
          "num_cycles": 3,
          "num_days": 1,
          "total_dosage": 45,
          "phase": "Induction",
          "drug": "Methotrexate IT"
        }, {
          "doses_day_patient": 15,
          "units": "mg",
          "phase": "Consolidation",
          "num_cycles": 3,
          "total_dosage": 45,
          "drug": "Methotrexate IT",
          "num_days": 1
        }, {
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "total_dosage": 120,
          "phase": "Maintenance",
          "num_cycles": 4,
          "num_days": 2,
          "units": "mg"
        }, {
          "units": "mg",
          "drug": "Methotrexate IT",
          "phase": "Maintenance",
          "doses_day_patient": 15,
          "num_cycles": 6,
          "num_days": 1,
          "total_dosage": 90
        }
      ],
      "6mp": [
        {
          "num_days": 1,
          "phase": "Consolidation",
          "total_dosage": 2100,
          "drug": "6MP",
          "num_cycles": 28,
          "doses_day_patient": 75,
          "units": "mg/m2"
        }, {
          "total_dosage": 63000,
          "drug": "6MP",
          "units": "mg/m2",
          "phase": "Maintenance",
          "doses_day_patient": 75,
          "num_cycles": 10,
          "num_days": 84
        }
      ],
      "dexamethasone": [
        {
          "total_dosage": 900,
          "doses_day_patient": 6,
          "num_days": 15,
          "num_cycles": 10,
          "phase": "Maintenance",
          "units": "mg/m2",
          "drug": "Dexamethasone"
        }
      ],
      "methotrexate": [
        {
          "doses_day_patient": 20,
          "num_cycles": 4,
          "total_dosage": 800,
          "phase": "Maintenance",
          "num_days": 10,
          "drug": "Methotrexate",
          "units": "mg/m2"
        }, {
          "drug": "Methotrexate",
          "total_dosage": 1320,
          "num_days": 11,
          "units": "mg/m2",
          "phase": "Maintenance",
          "num_cycles": 6,
          "doses_day_patient": 20
        }
      ]
    }
  },
  "allveryhighriskallregimen2": {
    "cancer": "ALL",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "drug": "Prednisone",
          "phase": "Induction",
          "units": "mg/m2",
          "total_dosage": 1740,
          "doses_day_patient": 60,
          "num_cycles": 29,
          "num_days": 1
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "max_dose": 2,
          "num_days": 2,
          "doses_day_patient": 1.5,
          "total_dosage": 12,
          "num_cycles": 4,
          "phase": "Induction",
          "units": "mg/m2"
        },
        {
          "num_days": 1,
          "units": "mg/m2",
          "doses_day_patient": 1.5,
          "total_dosage": 1.5,
          "phase": "Consolidation",
          "max_dose": 2,
          "num_cycles": 1,
          "drug": "Vincristine"
        },
        {
          "num_cycles": 2,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "total_dosage": 3,
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "num_days": 1,
          "drug": "Vincristine"
        },
        {
          "phase": "Delayed Intensification",
          "max_dose": 2,
          "total_dosage": 4.5,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_cycles": 3,
          "num_days": 1
        }, {
          "total_dosage": 36,
          "phase": "Maintenance",
          "drug": "Vincristine",
          "num_cycles": 8,
          "num_days": 3,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "units": "mg/m2"
        }
      ],
      "asparaginase": [
        {
          "phase": "Induction",
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "total_dosage": 54000,
          "num_days": 3,
          "num_cycles": 3,
          "drug": "Asparaginase"
        }, {
          "total_dosage": 54000,
          "num_days": 3,
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "num_cycles": 3,
          "phase": "Delayed Intensification",
          "drug": "Asparaginase"
        }
      ],
      "methotrexateit": [
        {
          "phase": "Induction",
          "num_days": 1,
          "doses_day_patient": 15,
          "total_dosage": 45,
          "units": "mg",
          "num_cycles": 3,
          "drug": "Methotrexate IT"
        },
        {
          "num_days": 1,
          "num_cycles": 3,
          "units": "mg",
          "total_dosage": 45,
          "phase": "Consolidation",
          "doses_day_patient": 15,
          "drug": "Methotrexate IT"
        },
        {
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "phase": "Interim Maintenance",
          "num_days": 1,
          "num_cycles": 1,
          "units": "mg",
          "total_dosage": 15
        },
        {
          "units": "mg",
          "phase": "Delayed Intensification",
          "num_days": 1,
          "total_dosage": 45,
          "doses_day_patient": 15,
          "num_cycles": 3,
          "drug": "Methotrexate IT"
        }, {
          "doses_day_patient": 15,
          "total_dosage": 120,
          "units": "mg",
          "num_days": 2,
          "drug": "Methotrexate IT",
          "phase": "Maintenance",
          "num_cycles": 4
        }, {
          "num_days": 1,
          "num_cycles": 4,
          "total_dosage": 60,
          "units": "mg",
          "doses_day_patient": 15,
          "drug": "Methotrexate IT",
          "phase": "Maintenance"
        }
      ],
      "6mp": [
        {
          "total_dosage": 2100,
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 75,
          "drug": "6MP",
          "num_cycles": 28,
          "phase": "Consolidation"
        }, {
          "num_days": 1,
          "num_cycles": 50,
          "units": "mg/m2",
          "doses_day_patient": 75,
          "phase": "Interim Maintenance",
          "drug": "6MP",
          "total_dosage": 3750
        }, {
          "phase": "Delayed Intensification",
          "drug": "6MP",
          "doses_day_patient": 60,
          "num_cycles": 15,
          "total_dosage": 900,
          "num_days": 1,
          "units": "mg/m2"
        }, {
          "num_days": 84,
          "phase": "Maintenance",
          "num_cycles": 8,
          "units": "mg/m2",
          "total_dosage": 50400,
          "doses_day_patient": 75,
          "drug": "6MP"
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "drug": "Dexamethasone",
          "num_cycles": 2,
          "phase": "Interim Maintenance",
          "num_days": 5,
          "total_dosage": 60,
          "doses_day_patient": 6
        }, {
          "drug": "Dexamethasone",
          "phase": "Delayed Intensification",
          "total_dosage": 140,
          "num_days": 7,
          "num_cycles": 2,
          "units": "mg/m2",
          "doses_day_patient": 10
        }, {
          "num_cycles": 8,
          "num_days": 15,
          "drug": "Dexamethasone",
          "phase": "Maintenance",
          "units": "mg/m2",
          "total_dosage": 720,
          "doses_day_patient": 6
        }
      ],
      "methotrexate": [
        {
          "total_dosage": 160,
          "num_cycles": 8,
          "num_days": 1,
          "drug": "Methotrexate",
          "units": "mg/m2",
          "phase": "Interim Maintenance",
          "doses_day_patient": 20
        }, {
          "phase": "Maintenance",
          "total_dosage": 800,
          "doses_day_patient": 20,
          "num_cycles": 4,
          "num_days": 10,
          "units": "mg/m2",
          "drug": "Methotrexate"
        }, {
          "num_days": 11,
          "doses_day_patient": 20,
          "units": "mg/m2",
          "drug": "Methotrexate",
          "phase": "Maintenance",
          "total_dosage": 880,
          "num_cycles": 4
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "drug": "Doxorubicin",
          "phase": "Delayed Intensification",
          "doses_day_patient": 25,
          "num_days": 1,
          "total_dosage": 75,
          "num_cycles": 3
        }
      ],
      "cyclophosphamide": [
        {
          "units": "mg/m2",
          "num_cycles": 1,
          "phase": "Delayed Intensification",
          "drug": "Cyclophosphamide",
          "num_days": 1,
          "doses_day_patient": 1000,
          "total_dosage": 1000
        }
      ],
      "cytarabine": [
        {
          "num_days": 3,
          "doses_day_patient": 75,
          "drug": "Cytarabine",
          "num_cycles": 2,
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "total_dosage": 450
        }
      ]
    }
  },
  "aplhighriskhighriskdose": {
    "cancer": "APL",
    "risk_strat": "High Risk",
    "regimen": "High Risk Dose",
    "drugs": {
      "atra": [
        {
          "phase": "Induction",
          "units": "mg/m2",
          "total_dosage": 700,
          "num_days": 56,
          "doses_day_patient": 12.5,
          "drug": "ATRA",
          "num_cycles": 1,
          "max_dose": 40
        }, {
          "num_cycles": 3,
          "drug": "ATRA",
          "units": "mg/m2",
          "max_dose": 40,
          "total_dosage": 2100,
          "doses_day_patient": 12.5,
          "num_days": 56,
          "phase": "Consolidation 1-3"
        }, {
          "max_dose": 40,
          "drug": "ATRA",
          "total_dosage": 250,
          "units": "mg/m2",
          "num_cycles": 1,
          "num_days": 20,
          "phase": "Consolidation 4",
          "doses_day_patient": 12.5
        }
      ],
      "arsenictrioxide": [
        {
          "num_days": 28,
          "doses_day_patient": 0.15,
          "units": "mg/m2",
          "phase": "Induction",
          "num_cycles": 1,
          "total_dosage": 4.2,
          "drug": "Arsenic Trioxide"
        }, {
          "units": "mg/kg",
          "phase": "Consolidation 1-3",
          "num_cycles": 3,
          "drug": "Arsenic Trioxide",
          "doses_day_patient": 0.15,
          "total_dosage": 9,
          "num_days": 20
        }, {
          "units": "mg/kg",
          "drug": "Arsenic Trioxide",
          "phase": "Consolidation 4",
          "num_cycles": 1,
          "doses_day_patient": 0.15,
          "total_dosage": 4.2,
          "num_days": 28
        }
      ],
      "daunorubicin": [
        {
          "drug": "Daunorubicin",
          "num_days": 4,
          "num_cycles": 1,
          "units": "mg/m2",
          "doses_day_patient": 40,
          "phase": "Induction",
          "total_dosage": 160
        }
      ],
      "dexamethasone": [
        {
          "drug": "Dexamethasone",
          "num_days": 28,
          "num_cycles": 1,
          "total_dosage": 70,
          "phase": "Induction",
          "doses_day_patient": 2.5,
          "units": "mg/m2"
        }
      ]
    }
  },
  "ewingsarcomaewingsarcomaaews1031": {
    "cancer": "Ewing Sarcoma",
    "risk_strat": "Ewing Sarcoma",
    "regimen": "AEWS1031",
    "drugs": {
      "vincristine": [
        {
          "num_days": 1,
          "total_dosage": 14,
          "phase": "-",
          "max_dose": 2,
          "drug": "Vincristine",
          "num_cycles": 7,
          "doses_day_patient": 2,
          "units": "mg/m2"
        }
      ],
      "doxorubicin": [
        {
          "num_cycles": 5,
          "total_dosage": 375,
          "units": "mg/m2",
          "phase": "-",
          "num_days": 2,
          "doses_day_patient": 37.5,
          "drug": "Doxorubicin"
        }
      ],
      "cyclophosphamide": [
        {
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "phase": "-",
          "doses_day_patient": 1200,
          "num_days": 1,
          "num_cycles": 7,
          "total_dosage": 8400
        }
      ],
      "ifosfamide": [
        {
          "total_dosage": 63000,
          "phase": "-",
          "num_cycles": 7,
          "units": "mg/m2",
          "num_days": 5,
          "drug": "Ifosfamide",
          "doses_day_patient": 1800
        }
      ],
      "etoposide": [
        {
          "num_days": 5,
          "num_cycles": 7,
          "doses_day_patient": 100,
          "phase": "-",
          "drug": "Etoposide",
          "total_dosage": 3500,
          "units": "mg/m2"
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomaabvstandarddosewithvincristine": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "ABV Standard Dose (with Vincristine)",
    "drugs": {
      "doxorubicin": [
        {
          "max_dose": 300,
          "units": "mg/m2",
          "num_cycles": 4,
          "total_dosage": 200,
          "drug": "Doxorubicin",
          "doses_day_patient": 25,
          "phase": "-",
          "num_days": 2
        }
      ],
      "bleomycin": [
        {
          "drug": "Bleomycin",
          "phase": "-",
          "num_days": 1,
          "num_cycles": 4,
          "units": "mg/m2",
          "doses_day_patient": 10,
          "total_dosage": 40
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "phase": "-",
          "max_dose": 2,
          "total_dosage": 6,
          "drug": "Vincristine",
          "units": "mg/m2",
          "num_days": 1,
          "num_cycles": 4
        }
      ]
    }
  },
  "lymphoblasticlymphomaveryhighriskallregimen4": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 4",
    "drugs": {
      "prednisone": [
        {
          "total_dosage": 1740,
          "num_cycles": 29,
          "num_days": 1,
          "drug": "Prednisone",
          "phase": "Induction",
          "doses_day_patient": 60,
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "total_dosage": 6,
          "units": "mg/m2",
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 4,
          "phase": "Induction",
          "num_days": 1
        }, {
          "max_dose": 2,
          "total_dosage": 7.5,
          "units": "mg/m2",
          "drug": "Vincristine",
          "phase": "Interim Maintenance",
          "num_days": 1,
          "num_cycles": 5,
          "doses_day_patient": 1.5
        }, {
          "total_dosage": 4.5,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "max_dose": 2,
          "drug": "Vincristine",
          "num_cycles": 3,
          "num_days": 1,
          "phase": "Delayed Intensification"
        }, {
          "total_dosage": 36,
          "phase": "Maintenance",
          "num_days": 3,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_cycles": 8,
          "drug": "Vincristine",
          "max_dose": 2
        }
      ],
      "asparaginase": [
        {
          "phase": "Induction",
          "units": "mg/m2",
          "num_cycles": 3,
          "doses_day_patient": 6000,
          "num_days": 3,
          "total_dosage": 54000,
          "drug": "Asparaginase"
        }, {
          "phase": "Delayed Intensification",
          "num_days": 3,
          "drug": "Asparaginase",
          "num_cycles": 2,
          "units": "mg/m2",
          "doses_day_patient": 6000,
          "total_dosage": 36000
        }
      ],
      "methotrexateit": [
        {
          "doses_day_patient": 15,
          "num_cycles": 3,
          "drug": "Methotrexate IT",
          "phase": "Induction",
          "units": "mg",
          "total_dosage": 45,
          "num_days": 1
        },
        {
          "num_cycles": 4,
          "total_dosage": 60,
          "doses_day_patient": 15,
          "num_days": 1,
          "units": "mg",
          "phase": "Consolidation",
          "drug": "Methotrexate IT"
        },
        {
          "drug": "Methotrexate IT",
          "num_days": 1,
          "phase": "Interim Maintenance",
          "doses_day_patient": 15,
          "total_dosage": 15,
          "num_cycles": 1,
          "units": "mg"
        },
        {
          "num_cycles": 3,
          "num_days": 1,
          "doses_day_patient": 15,
          "total_dosage": 45,
          "units": "mg",
          "phase": "Delayed Intensification",
          "drug": "Methotrexate IT"
        }, {
          "total_dosage": 120,
          "num_days": 1,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "num_cycles": 8,
          "phase": "Maintenance",
          "units": "mg"
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 2,
          "units": "mg/m2",
          "total_dosage": 2000,
          "num_days": 1,
          "phase": "Consolidation",
          "doses_day_patient": 1000,
          "drug": "Cyclophosphamide"
        }, {
          "num_cycles": 1,
          "drug": "Cyclophosphamide",
          "num_days": 1,
          "total_dosage": 1000,
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "doses_day_patient": 1000
        }
      ],
      "6mp": [
        {
          "units": "mg/m2",
          "phase": "Consolidation",
          "doses_day_patient": 60,
          "num_cycles": 28,
          "drug": "6MP",
          "num_days": 1,
          "total_dosage": 1680
        }, {
          "drug": "6MP",
          "units": "mg/m2",
          "num_days": 1,
          "phase": "Delayed Intensification",
          "doses_day_patient": 60,
          "total_dosage": 900,
          "num_cycles": 15
        }, {
          "phase": "Maintenance",
          "units": "mg/m2",
          "drug": "6MP",
          "doses_day_patient": 75,
          "total_dosage": 50400,
          "num_days": 84,
          "num_cycles": 8
        }
      ],
      "cytarabine": [
        {
          "doses_day_patient": 75,
          "total_dosage": 1200,
          "num_days": 4,
          "units": "mg/m2",
          "drug": "Cytarabine",
          "phase": "Consolidation",
          "num_cycles": 4
        }, {
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "doses_day_patient": 75,
          "drug": "Cytarabine",
          "total_dosage": 600,
          "num_days": 4,
          "num_cycles": 2
        }
      ],
      "methotrexate": [
        {
          "drug": "Methotrexate",
          "num_days": 1,
          "phase": "Interim Maintenance",
          "units": "mg/m2",
          "total_dosage": 100,
          "doses_day_patient": 100,
          "num_cycles": 1
        },
        {
          "num_cycles": 1,
          "units": "mg/m2",
          "doses_day_patient": 150,
          "phase": "Interim Maintenance",
          "num_days": 1,
          "total_dosage": 150,
          "drug": "Methotrexate"
        },
        {
          "total_dosage": 200,
          "num_days": 1,
          "drug": "Methotrexate",
          "num_cycles": 1,
          "phase": "Interim Maintenance",
          "doses_day_patient": 200,
          "units": "mg/m2"
        },
        {
          "drug": "Methotrexate",
          "units": "mg/m2",
          "total_dosage": 250,
          "num_cycles": 1,
          "doses_day_patient": 250,
          "num_days": 1,
          "phase": "Interim Maintenance"
        }, {
          "doses_day_patient": 300,
          "total_dosage": 300,
          "phase": "Interim Maintenance",
          "drug": "Methotrexate",
          "num_days": 1,
          "units": "mg/m2",
          "num_cycles": 1
        }, {
          "doses_day_patient": 20,
          "units": "mg/m2",
          "num_cycles": 8,
          "total_dosage": 1760,
          "phase": "Maintenance",
          "num_days": 11,
          "drug": "Methotrexate"
        }
      ],
      "dexamethasone": [
        {
          "drug": "Dexamethasone",
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "num_days": 7,
          "num_cycles": 2,
          "doses_day_patient": 10,
          "total_dosage": 140
        }, {
          "num_days": 15,
          "units": "mg/m2",
          "total_dosage": 720,
          "drug": "Dexamethasone",
          "phase": "Maintenance",
          "doses_day_patient": 6,
          "num_cycles": 8
        }
      ],
      "doxorubicin": [
        {
          "drug": "Doxorubicin",
          "doses_day_patient": 25,
          "phase": "Delayed Intensification",
          "num_cycles": 3,
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 75
        }
      ]
    }
  },
  "hepatoblastomanonmetastaticcisplatinmonotherapy": {
    "cancer": "Hepatoblastoma",
    "risk_strat": "Non-Metastatic",
    "regimen": "Cisplatin Monotherapy",
    "drugs": {
      "cisplatin": [
        {
          "phase": "-",
          "num_cycles": 6,
          "total_dosage": 480,
          "doses_day_patient": 80,
          "drug": "Cisplatin",
          "units": "mg/m2",
          "num_days": 1
        }
      ]
    }
  },
  "allhighriskallregimen1": {
    "cancer": "ALL",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "phase": "Induction",
          "drug": "Prednisone",
          "units": "mg/m2",
          "doses_day_patient": 60,
          "num_days": 1,
          "num_cycles": 7,
          "total_dosage": 420
        }, {
          "num_days": 1,
          "total_dosage": 840,
          "units": "mg/m2",
          "doses_day_patient": 40,
          "num_cycles": 21,
          "phase": "Induction",
          "drug": "Prednisone"
        }
      ],
      "vincristine": [
        {
          "phase": "Induction",
          "num_days": 1,
          "doses_day_patient": 1.5,
          "total_dosage": 6,
          "units": "mg/m2",
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 4
        }, {
          "max_dose": 2,
          "num_days": 1,
          "drug": "Vincristine",
          "units": "mg/m2",
          "total_dosage": 1.5,
          "num_cycles": 1,
          "phase": "Consolidation",
          "doses_day_patient": 1.5
        }, {
          "num_days": 3,
          "phase": "Maintenance",
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "num_cycles": 10,
          "total_dosage": 45,
          "units": "mg/m2",
          "drug": "Vincristine"
        }
      ],
      "asparaginase": [
        {
          "num_days": 3,
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "total_dosage": 54000,
          "num_cycles": 3,
          "phase": "Induction",
          "drug": "Asparaginase"
        }
      ],
      "methotrexateit": [
        {
          "num_days": 1,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "units": "mg",
          "phase": "Induction",
          "num_cycles": 3,
          "total_dosage": 45
        }, {
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "num_cycles": 3,
          "doses_day_patient": 15,
          "num_days": 1,
          "phase": "Consolidation",
          "units": "mg"
        }, {
          "num_cycles": 4,
          "num_days": 2,
          "phase": "Maintenance",
          "drug": "Methotrexate IT",
          "doses_day_patient": 15,
          "total_dosage": 120,
          "units": "mg"
        }, {
          "num_days": 1,
          "phase": "Maintenance",
          "total_dosage": 90,
          "drug": "Methotrexate IT",
          "units": "mg",
          "doses_day_patient": 15,
          "num_cycles": 6
        }
      ],
      "6mp": [
        {
          "doses_day_patient": 75,
          "units": "mg/m2",
          "num_cycles": 28,
          "drug": "6MP",
          "total_dosage": 2100,
          "num_days": 1,
          "phase": "Consolidation"
        }, {
          "phase": "Maintenance",
          "doses_day_patient": 75,
          "num_days": 84,
          "drug": "6MP",
          "units": "mg/m2",
          "num_cycles": 10,
          "total_dosage": 63000
        }
      ],
      "dexamethasone": [
        {
          "doses_day_patient": 6,
          "phase": "Maintenance",
          "drug": "Dexamethasone",
          "num_days": 15,
          "num_cycles": 10,
          "total_dosage": 900,
          "units": "mg/m2"
        }
      ],
      "methotrexate": [
        {
          "drug": "Methotrexate",
          "units": "mg/m2",
          "doses_day_patient": 20,
          "num_cycles": 4,
          "total_dosage": 800,
          "num_days": 10,
          "phase": "Maintenance"
        }, {
          "total_dosage": 1320,
          "doses_day_patient": 20,
          "phase": "Maintenance",
          "drug": "Methotrexate",
          "num_cycles": 6,
          "units": "mg/m2",
          "num_days": 11
        }
      ]
    }
  },
  "wilmstumorlowriskstage1vincristineactinomycind": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Low Risk Stage 1",
    "regimen": "Vincristine + Actinomycin D",
    "drugs": {
      "vincristine": [
        {
          "total_dosage": 7.5,
          "doses_day_patient": 1.5,
          "phase": "Pre-Operative",
          "units": "mg/m2",
          "num_days": 1,
          "max_dose": 2,
          "num_cycles": 5,
          "drug": "Vincristine"
        }
      ],
      "actinomycind": [
        {
          "total_dosage": 0.09,
          "num_days": 1,
          "num_cycles": 2,
          "phase": "Pre-Operative",
          "units": "mg/kg",
          "drug": "Actinomycin D",
          "doses_day_patient": 0.045
        }
      ]
    }
  },
  "allhighriskallregimen3": {
    "cancer": "ALL",
    "risk_strat": "High Risk",
    "regimen": "ALL Regimen 3",
    "drugs": {
      "prednisone": [
        {
          "units": "mg/m2",
          "num_cycles": 29,
          "total_dosage": 1740,
          "num_days": 1,
          "doses_day_patient": 60,
          "phase": "Induction",
          "drug": "Prednisone"
        }
      ],
      "vincristine": [
        {
          "units": "mg/m2",
          "drug": "Vincristine",
          "max_dose": 2,
          "num_cycles": 4,
          "total_dosage": 6,
          "doses_day_patient": 1.5,
          "num_days": 1,
          "phase": "Induction"
        }, {
          "phase": "Interim Maintenance",
          "num_days": 1,
          "num_cycles": 2,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "total_dosage": 3,
          "units": "mg/m2",
          "max_dose": 2
        }, {
          "phase": "Delayed Intensification",
          "doses_day_patient": 1.5,
          "num_days": 1,
          "total_dosage": 4.5,
          "units": "mg/m2",
          "drug": "Vincristine",
          "num_cycles": 3,
          "max_dose": 2
        }, {
          "max_dose": 2,
          "units": "mg/m2",
          "num_days": 3,
          "drug": "Vincristine",
          "total_dosage": 36,
          "doses_day_patient": 1.5,
          "phase": "Maintenance",
          "num_cycles": 8
        }
      ],
      "asparaginase": [
        {
          "drug": "Asparaginase",
          "num_cycles": 3,
          "doses_day_patient": 6000,
          "units": "mg/m2",
          "num_days": 3,
          "phase": "Induction",
          "total_dosage": 54000
        }, {
          "num_days": 3,
          "num_cycles": 2,
          "drug": "Asparaginase",
          "phase": "Delayed Intensification",
          "total_dosage": 36000,
          "doses_day_patient": 6000,
          "units": "mg/m2"
        }
      ],
      "methotrexateit": [
        {
          "total_dosage": 45,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "num_cycles": 3,
          "phase": "Induction",
          "units": "mg",
          "doses_day_patient": 15
        },
        {
          "num_days": 1,
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "doses_day_patient": 15,
          "units": "mg",
          "phase": "Consolidation",
          "total_dosage": 60
        },
        {
          "num_days": 1,
          "total_dosage": 15,
          "doses_day_patient": 15,
          "phase": "Interim Maintenance",
          "drug": "Methotrexate IT",
          "units": "mg",
          "num_cycles": 1
        },
        {
          "phase": "Delayed Intensification",
          "doses_day_patient": 15,
          "total_dosage": 45,
          "num_cycles": 3,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "units": "mg"
        }, {
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "num_days": 2,
          "phase": "Maintenance",
          "total_dosage": 120,
          "doses_day_patient": 15,
          "units": "mg"
        }, {
          "units": "mg",
          "total_dosage": 60,
          "num_days": 1,
          "phase": "Maintenance",
          "num_cycles": 4,
          "drug": "Methotrexate IT",
          "doses_day_patient": 15
        }
      ],
      "cyclophosphamide": [
        {
          "units": "mg/m2",
          "drug": "Cyclophosphamide",
          "total_dosage": 2000,
          "num_days": 1,
          "doses_day_patient": 1000,
          "phase": "Consolidation",
          "num_cycles": 2
        }, {
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "total_dosage": 1000,
          "num_days": 1,
          "num_cycles": 1,
          "doses_day_patient": 1000,
          "phase": "Delayed Intensification"
        }
      ],
      "6mp": [
        {
          "units": "mg/m2",
          "total_dosage": 1680,
          "phase": "Consolidation",
          "num_cycles": 28,
          "drug": "6MP",
          "doses_day_patient": 60,
          "num_days": 1
        }, {
          "units": "mg/m2",
          "doses_day_patient": 75,
          "phase": "Interim Maintenance",
          "total_dosage": 3750,
          "drug": "6MP",
          "num_days": 1,
          "num_cycles": 50
        }, {
          "doses_day_patient": 60,
          "num_cycles": 15,
          "drug": "6MP",
          "units": "mg/m2",
          "num_days": 1,
          "phase": "Delayed Intensification",
          "total_dosage": 900
        }, {
          "units": "mg/m2",
          "phase": "Maintenance",
          "drug": "6MP",
          "num_days": 84,
          "doses_day_patient": 75,
          "num_cycles": 8,
          "total_dosage": 50400
        }
      ],
      "cytarabine": [
        {
          "phase": "Consolidation",
          "num_days": 4,
          "units": "mg/m2",
          "total_dosage": 1200,
          "drug": "Cytarabine",
          "doses_day_patient": 75,
          "num_cycles": 4
        }, {
          "num_days": 4,
          "doses_day_patient": 75,
          "total_dosage": 600,
          "units": "mg/m2",
          "drug": "Cytarabine",
          "num_cycles": 2,
          "phase": "Delayed Intensification"
        }
      ],
      "dexamethasone": [
        {
          "num_days": 5,
          "total_dosage": 60,
          "num_cycles": 2,
          "drug": "Dexamethasone",
          "phase": "Interim Maintenance",
          "doses_day_patient": 6,
          "units": "mg/m2"
        }, {
          "num_days": 7,
          "doses_day_patient": 10,
          "phase": "Delayed Intensification",
          "drug": "Dexamethasone",
          "units": "mg/m2",
          "total_dosage": 140,
          "num_cycles": 2
        }, {
          "total_dosage": 720,
          "doses_day_patient": 6,
          "phase": "Maintenance",
          "units": "mg/m2",
          "drug": "Dexamethasone",
          "num_cycles": 8,
          "num_days": 15
        }
      ],
      "methotrexate": [
        {
          "units": "mg/m2",
          "num_cycles": 8,
          "drug": "Methotrexate",
          "total_dosage": 160,
          "phase": "Interim Maintenance",
          "num_days": 1,
          "doses_day_patient": 20
        }, {
          "units": "mg/m2",
          "total_dosage": 800,
          "doses_day_patient": 20,
          "num_days": 10,
          "phase": "Maintenance",
          "num_cycles": 4,
          "drug": "Methotrexate"
        }, {
          "drug": "Methotrexate",
          "num_days": 11,
          "units": "mg/m2",
          "num_cycles": 4,
          "total_dosage": 880,
          "doses_day_patient": 20,
          "phase": "Maintenance"
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "doses_day_patient": 25,
          "total_dosage": 75,
          "phase": "Delayed Intensification",
          "drug": "Doxorubicin",
          "num_days": 1,
          "num_cycles": 3
        }
      ]
    }
  },
  "neuroblastomahighriskpalliativecyclophosphamidemonotherapy": {
    "cancer": "Neuroblastoma",
    "risk_strat": "High Risk",
    "regimen": "Palliative Cyclophosphamide Monotherapy",
    "drugs": {
      "cyclophosphamide": [
        {
          "num_days": 1,
          "doses_day_patient": 50,
          "drug": "Cyclophosphamide",
          "units": "mg",
          "phase": "-",
          "num_cycles": 1,
          "total_dosage": 50
        }
      ]
    }
  },
  "wilmstumorlowriskstage2vincristineactinomycind": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Low Risk Stage 2",
    "regimen": "Vincristine + Actinomycin D",
    "drugs": {
      "vincristine": [
        {
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "total_dosage": 7.5,
          "num_days": 1,
          "phase": "Pre-Operative",
          "drug": "Vincristine",
          "num_cycles": 5,
          "units": "mg/m2"
        }
      ],
      "actinomycind": [
        {
          "total_dosage": 0.09,
          "num_days": 1,
          "drug": "Actinomycin D",
          "num_cycles": 2,
          "phase": "Pre-Operative",
          "units": "mg/kg",
          "doses_day_patient": 0.045
        }
      ]
    }
  },
  "wilmstumorintermediateriskstage1vincristineactinomycind1cycle": {
    "cancer": "Wilms Tumor",
    "risk_strat": "Intermediate Risk Stage 1",
    "regimen": "Vincristine + Actinomycin D (1 Cycle)",
    "drugs": {
      "vincristine": [
        {
          "total_dosage": 6,
          "num_days": 1,
          "num_cycles": 4,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "max_dose": 2,
          "phase": "Post-Operative",
          "units": "mg/m2"
        }
      ],
      "actinomycind": [
        {
          "units": "mg/kg",
          "num_cycles": 1,
          "total_dosage": 0.045,
          "num_days": 1,
          "drug": "Actinomycin D",
          "doses_day_patient": 0.045,
          "phase": "Post-Operative"
        }
      ]
    }
  },
  "alllowriskallregimen2": {
    "cancer": "ALL",
    "risk_strat": "Low Risk",
    "regimen": "ALL Regimen 2",
    "drugs": {
      "prednisone": [
        {
          "phase": "Induction",
          "doses_day_patient": 60,
          "num_days": 1,
          "units": "mg/m2",
          "total_dosage": 1740,
          "num_cycles": 29,
          "drug": "Prednisone"
        }
      ],
      "vincristine": [
        {
          "drug": "Vincristine",
          "phase": "Induction",
          "num_days": 2,
          "num_cycles": 4,
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "total_dosage": 12,
          "max_dose": 2
        },
        {
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "num_cycles": 1,
          "num_days": 1,
          "total_dosage": 1.5,
          "units": "mg/m2",
          "phase": "Consolidation",
          "max_dose": 2
        },
        {
          "num_cycles": 2,
          "max_dose": 2,
          "num_days": 1,
          "doses_day_patient": 1.5,
          "phase": "Interim Maintenance",
          "drug": "Vincristine",
          "total_dosage": 3,
          "units": "mg/m2"
        },
        {
          "num_days": 1,
          "total_dosage": 4.5,
          "max_dose": 2,
          "num_cycles": 3,
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "phase": "Delayed Intensification"
        }, {
          "phase": "Maintenance",
          "units": "mg/m2",
          "num_days": 3,
          "doses_day_patient": 1.5,
          "max_dose": 2,
          "num_cycles": 8,
          "drug": "Vincristine",
          "total_dosage": 36
        }
      ],
      "asparaginase": [
        {
          "units": "mg/m2",
          "doses_day_patient": 6000,
          "num_cycles": 3,
          "total_dosage": 54000,
          "drug": "Asparaginase",
          "phase": "Induction",
          "num_days": 3
        }, {
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "total_dosage": 54000,
          "drug": "Asparaginase",
          "doses_day_patient": 6000,
          "num_cycles": 3,
          "num_days": 3
        }
      ],
      "methotrexateit": [
        {
          "units": "mg",
          "doses_day_patient": 15,
          "total_dosage": 45,
          "phase": "Induction",
          "num_days": 1,
          "num_cycles": 3,
          "drug": "Methotrexate IT"
        },
        {
          "phase": "Consolidation",
          "drug": "Methotrexate IT",
          "total_dosage": 45,
          "units": "mg",
          "num_cycles": 3,
          "num_days": 1,
          "doses_day_patient": 15
        },
        {
          "drug": "Methotrexate IT",
          "num_cycles": 1,
          "num_days": 1,
          "doses_day_patient": 15,
          "total_dosage": 15,
          "units": "mg",
          "phase": "Interim Maintenance"
        },
        {
          "drug": "Methotrexate IT",
          "num_days": 1,
          "num_cycles": 3,
          "total_dosage": 45,
          "doses_day_patient": 15,
          "units": "mg",
          "phase": "Delayed Intensification"
        }, {
          "doses_day_patient": 15,
          "units": "mg",
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "total_dosage": 120,
          "num_days": 2,
          "phase": "Maintenance"
        }, {
          "phase": "Maintenance",
          "units": "mg",
          "drug": "Methotrexate IT",
          "num_cycles": 4,
          "total_dosage": 60,
          "doses_day_patient": 15,
          "num_days": 1
        }
      ],
      "6mp": [
        {
          "phase": "Consolidation",
          "drug": "6MP",
          "total_dosage": 2100,
          "units": "mg/m2",
          "num_cycles": 28,
          "num_days": 1,
          "doses_day_patient": 75
        }, {
          "doses_day_patient": 75,
          "num_days": 1,
          "units": "mg/m2",
          "drug": "6MP",
          "num_cycles": 50,
          "total_dosage": 3750,
          "phase": "Interim Maintenance"
        }, {
          "drug": "6MP",
          "total_dosage": 900,
          "doses_day_patient": 60,
          "num_cycles": 15,
          "num_days": 1,
          "phase": "Delayed Intensification",
          "units": "mg/m2"
        }, {
          "units": "mg/m2",
          "num_cycles": 8,
          "drug": "6MP",
          "doses_day_patient": 75,
          "num_days": 84,
          "total_dosage": 50400,
          "phase": "Maintenance"
        }
      ],
      "dexamethasone": [
        {
          "units": "mg/m2",
          "drug": "Dexamethasone",
          "total_dosage": 60,
          "num_days": 5,
          "doses_day_patient": 6,
          "phase": "Interim Maintenance",
          "num_cycles": 2
        }, {
          "num_days": 7,
          "units": "mg/m2",
          "total_dosage": 140,
          "phase": "Delayed Intensification",
          "num_cycles": 2,
          "doses_day_patient": 10,
          "drug": "Dexamethasone"
        }, {
          "num_days": 15,
          "units": "mg/m2",
          "doses_day_patient": 6,
          "total_dosage": 720,
          "phase": "Maintenance",
          "drug": "Dexamethasone",
          "num_cycles": 8
        }
      ],
      "methotrexate": [
        {
          "units": "mg/m2",
          "drug": "Methotrexate",
          "num_days": 1,
          "total_dosage": 160,
          "num_cycles": 8,
          "phase": "Interim Maintenance",
          "doses_day_patient": 20
        }, {
          "phase": "Maintenance",
          "units": "mg/m2",
          "num_cycles": 4,
          "doses_day_patient": 20,
          "num_days": 10,
          "drug": "Methotrexate",
          "total_dosage": 800
        }, {
          "phase": "Maintenance",
          "units": "mg/m2",
          "drug": "Methotrexate",
          "total_dosage": 880,
          "num_days": 11,
          "doses_day_patient": 20,
          "num_cycles": 4
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "drug": "Doxorubicin",
          "doses_day_patient": 25,
          "num_cycles": 3,
          "total_dosage": 75,
          "num_days": 1,
          "phase": "Delayed Intensification"
        }
      ],
      "cyclophosphamide": [
        {
          "num_cycles": 1,
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "phase": "Delayed Intensification",
          "num_days": 1,
          "total_dosage": 1000,
          "doses_day_patient": 1000
        }
      ],
      "cytarabine": [
        {
          "phase": "Delayed Intensification",
          "units": "mg/m2",
          "num_cycles": 2,
          "num_days": 3,
          "doses_day_patient": 75,
          "total_dosage": 450,
          "drug": "Cytarabine"
        }
      ]
    }
  },
  "neuroblastomaintermediaterisk80doseintermediateriskregimen": {
    "cancer": "Neuroblastoma",
    "risk_strat": "Intermediate Risk",
    "regimen": "80% Dose Intermediate Risk Regimen",
    "drugs": {
      "carboplatin": [
        {
          "units": "mg/m2",
          "total_dosage": 1344,
          "phase": "-",
          "num_cycles": 3,
          "num_days": 1,
          "drug": "Carboplatin",
          "doses_day_patient": 448
        }
      ],
      "cyclophosphamide": [
        {
          "phase": "-",
          "total_dosage": 1600,
          "doses_day_patient": 800,
          "drug": "Cyclophosphamide",
          "units": "mg/m2",
          "num_days": 1,
          "num_cycles": 2
        }
      ],
      "doxorubicin": [
        {
          "total_dosage": 48,
          "drug": "Doxorubicin",
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 24,
          "phase": "-",
          "num_cycles": 2
        }
      ],
      "etoposide": [
        {
          "drug": "Etoposide",
          "total_dosage": 864,
          "num_cycles": 3,
          "num_days": 3,
          "units": "mg/m2",
          "phase": "-",
          "doses_day_patient": 96
        }
      ]
    }
  },
  "hodgkinslymphomalowriskcoppabvd4cycles": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "Low Risk",
    "regimen": "COPP/ABVD (4 Cycles)",
    "drugs": {
      "cyclophosphamide": [
        {
          "phase": "-",
          "total_dosage": 5200,
          "num_days": 2,
          "drug": "Cyclophosphamide",
          "num_cycles": 4,
          "doses_day_patient": 650,
          "units": "mg/m2"
        }
      ],
      "vincristine": [
        {
          "max_dose": 2,
          "units": "mg/m2",
          "num_cycles": 4,
          "num_days": 2,
          "phase": "-",
          "drug": "Vincristine",
          "doses_day_patient": 1.4,
          "total_dosage": 11.2
        }
      ],
      "procarbazine": [
        {
          "units": "mg/m2",
          "num_days": 14,
          "num_cycles": 4,
          "drug": "Procarbazine",
          "doses_day_patient": 100,
          "total_dosage": 5600,
          "phase": "-"
        }
      ],
      "prednisone": [
        {
          "num_cycles": 4,
          "total_dosage": 2240,
          "drug": "Prednisone",
          "units": "mg/m2",
          "num_days": 14,
          "phase": "-",
          "doses_day_patient": 40
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "num_days": 2,
          "drug": "Doxorubicin",
          "total_dosage": 200,
          "num_cycles": 4,
          "phase": "-",
          "doses_day_patient": 25
        }
      ],
      "bleomycin": [
        {
          "max_dose": 30000,
          "phase": "-",
          "doses_day_patient": 10,
          "num_cycles": 4,
          "drug": "Bleomycin",
          "num_days": 2,
          "units": "mg/m2",
          "total_dosage": 80
        }
      ],
      "vinblastine": [
        {
          "total_dosage": 48,
          "phase": "-",
          "drug": "Vinblastine",
          "num_cycles": 4,
          "num_days": 2,
          "units": "mg/m2",
          "doses_day_patient": 6
        }
      ],
      "dacarbazine": [
        {
          "drug": "Dacarbazine",
          "num_days": 2,
          "total_dosage": 3000,
          "doses_day_patient": 375,
          "num_cycles": 4,
          "phase": "-",
          "units": "mg/m2"
        }
      ]
    }
  },
  "standardriskmedulloblastomastandardriskmedulloblastomacisplatinbasedcombination": {
    "cancer": "Standard-Risk Medulloblastoma",
    "risk_strat": "Standard-Risk Medulloblastoma",
    "regimen": "Cisplatin-based Combination",
    "drugs": {
      "cisplatin": [
        {
          "phase": "-",
          "num_cycles": 3,
          "total_dosage": 225,
          "drug": "Cisplatin",
          "doses_day_patient": 75,
          "num_days": 1,
          "units": "mg/m2"
        }
      ],
      "etoposide": [
        {
          "total_dosage": 600,
          "phase": "-",
          "doses_day_patient": 200,
          "units": "mg/m2",
          "drug": "Etoposide",
          "num_days": 1,
          "num_cycles": 3
        }
      ],
      "vincristine": [
        {
          "max_dose": 2,
          "num_cycles": 6,
          "doses_day_patient": 1,
          "units": "mg/m2",
          "num_days": 1,
          "phase": "-",
          "total_dosage": 6,
          "drug": "Vincristine"
        }
      ],
      "cyclophosphamide": [
        {
          "doses_day_patient": 1000,
          "phase": "-",
          "num_days": 1,
          "num_cycles": 3,
          "total_dosage": 3000,
          "drug": "Cyclophosphamide",
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskoppa": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "OPPA",
    "drugs": {
      "vincristine": [
        {
          "max_dose": 2,
          "total_dosage": 18,
          "drug": "Vincristine",
          "num_cycles": 4,
          "phase": "-",
          "doses_day_patient": 1.5,
          "units": "mg/m2",
          "num_days": 3
        }
      ],
      "procarbazine": [
        {
          "num_cycles": 4,
          "doses_day_patient": 100,
          "phase": "-",
          "units": "mg/m2",
          "num_days": 15,
          "total_dosage": 6000,
          "drug": "Procarbazine"
        }
      ],
      "prednisone": [
        {
          "num_cycles": 4,
          "phase": "-",
          "drug": "Prednisone",
          "total_dosage": 3600,
          "num_days": 15,
          "units": "mg/m2",
          "doses_day_patient": 60
        }
      ],
      "doxorubicin": [
        {
          "units": "mg/m2",
          "doses_day_patient": 40,
          "phase": "-",
          "drug": "Doxorubicin",
          "num_days": 2,
          "total_dosage": 320,
          "num_cycles": 4
        }
      ]
    }
  },
  "kaposisarcomakaposisarcomavincristinemonotherapy": {
    "cancer": "Kaposi Sarcoma",
    "risk_strat": "Kaposi Sarcoma",
    "regimen": "Vincristine Monotherapy",
    "drugs": {
      "vincristine": [
        {
          "num_cycles": 6,
          "total_dosage": 9,
          "phase": "-",
          "units": "mg/m2",
          "num_days": 1,
          "doses_day_patient": 1.5,
          "drug": "Vincristine",
          "max_dose": 2
        }
      ]
    }
  },
  "lymphoblasticlymphomaveryhighriskallregimen1": {
    "cancer": "Lymphoblastic Lymphoma",
    "risk_strat": "Very High Risk",
    "regimen": "ALL Regimen 1",
    "drugs": {
      "prednisone": [
        {
          "num_days": 1,
          "total_dosage": 420,
          "num_cycles": 7,
          "phase": "Induction",
          "drug": "Prednisone",
          "doses_day_patient": 60,
          "units": "mg/m2"
        }, {
          "phase": "Induction",
          "drug": "Prednisone",
          "num_days": 1,
          "total_dosage": 840,
          "units": "mg/m2",
          "doses_day_patient": 40,
          "num_cycles": 21
        }
      ],
      "vincristine": [
        {
          "total_dosage": 6,
          "phase": "Induction",
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "num_days": 1,
          "num_cycles": 4,
          "max_dose": 2,
          "units": "mg/m2"
        }, {
          "total_dosage": 1.5,
          "drug": "Vincristine",
          "doses_day_patient": 1.5,
          "num_cycles": 1,
          "max_dose": 2,
          "units": "mg/m2",
          "num_days": 1,
          "phase": "Consolidation"
        }, {
          "num_cycles": 10,
          "drug": "Vincristine",
          "max_dose": 2,
          "doses_day_patient": 1.5,
          "num_days": 3,
          "units": "mg/m2",
          "total_dosage": 45,
          "phase": "Maintenance"
        }
      ],
      "asparaginase": [
        {
          "phase": "Induction",
          "doses_day_patient": 6000,
          "drug": "Asparaginase",
          "num_days": 3,
          "num_cycles": 3,
          "total_dosage": 54000,
          "units": "mg/m2"
        }
      ],
      "methotrexateit": [
        {
          "drug": "Methotrexate IT",
          "units": "mg",
          "doses_day_patient": 15,
          "phase": "Induction",
          "num_days": 1,
          "total_dosage": 45,
          "num_cycles": 3
        }, {
          "units": "mg",
          "doses_day_patient": 15,
          "phase": "Consolidation",
          "num_cycles": 3,
          "drug": "Methotrexate IT",
          "num_days": 1,
          "total_dosage": 45
        }, {
          "units": "mg",
          "num_cycles": 4,
          "phase": "Maintenance",
          "drug": "Methotrexate IT",
          "total_dosage": 120,
          "num_days": 2,
          "doses_day_patient": 15
        }, {
          "units": "mg",
          "num_days": 1,
          "doses_day_patient": 15,
          "total_dosage": 90,
          "phase": "Maintenance",
          "drug": "Methotrexate IT",
          "num_cycles": 6
        }
      ],
      "6mp": [
        {
          "num_days": 1,
          "drug": "6MP",
          "total_dosage": 2100,
          "num_cycles": 28,
          "phase": "Consolidation",
          "units": "mg/m2",
          "doses_day_patient": 75
        }, {
          "total_dosage": 63000,
          "units": "mg/m2",
          "drug": "6MP",
          "num_days": 84,
          "phase": "Maintenance",
          "num_cycles": 10,
          "doses_day_patient": 75
        }
      ],
      "dexamethasone": [
        {
          "doses_day_patient": 6,
          "units": "mg/m2",
          "drug": "Dexamethasone",
          "num_cycles": 10,
          "phase": "Maintenance",
          "num_days": 15,
          "total_dosage": 900
        }
      ],
      "methotrexate": [
        {
          "num_cycles": 4,
          "phase": "Maintenance",
          "doses_day_patient": 20,
          "units": "mg/m2",
          "num_days": 10,
          "total_dosage": 800,
          "drug": "Methotrexate"
        }, {
          "drug": "Methotrexate",
          "total_dosage": 1320,
          "num_cycles": 6,
          "phase": "Maintenance",
          "num_days": 11,
          "doses_day_patient": 20,
          "units": "mg/m2"
        }
      ]
    }
  },
  "hodgkinslymphomahighriskabvd6cycles": {
    "cancer": "Hodgkin's Lymphoma",
    "risk_strat": "High Risk",
    "regimen": "ABVD (6 Cycles)",
    "drugs": {
      "doxorubicin": [
        {
          "phase": "-",
          "units": "mg/m2",
          "num_days": 2,
          "drug": "Doxorubicin",
          "total_dosage": 300,
          "doses_day_patient": 25,
          "num_cycles": 6
        }
      ],
      "bleomycin": [
        {
          "num_days": 2,
          "phase": "-",
          "doses_day_patient": 10,
          "max_dose": 30000,
          "units": "mg/m2",
          "drug": "Bleomycin",
          "total_dosage": 120,
          "num_cycles": 6
        }
      ],
      "vinblastine": [
        {
          "phase": "-",
          "doses_day_patient": 6,
          "num_cycles": 6,
          "num_days": 2,
          "units": "mg/m2",
          "drug": "Vinblastine",
          "total_dosage": 72
        }
      ],
      "dacarbazine": [
        {
          "phase": "-",
          "num_cycles": 6,
          "doses_day_patient": 375,
          "units": "mg/m2",
          "total_dosage": 4500,
          "drug": "Dacarbazine",
          "num_days": 2
        }
      ]
    }
  },
  "hepatoblastomametastaticcisplatinmonotherapy": {
    "cancer": "Hepatoblastoma",
    "risk_strat": "Metastatic",
    "regimen": "Cisplatin Monotherapy",
    "drugs": {
      "cisplatin": [
        {
          "drug": "Cisplatin",
          "num_cycles": 6,
          "num_days": 1,
          "phase": "-",
          "total_dosage": 480,
          "units": "mg/m2",
          "doses_day_patient": 80
        }
      ]
    }
  }
};

export default regimens;
