const Regimen = () => {
  return {
    id: "",
    cancer: "",
    risk_strat: "",
    regimen: "",
    drug: "",
    phase: "",
    dosage: {
      doses_day_patient : 75,
      doses_patient : 2100,
      max_dose : 0,
      num_days : 1,
      num_cycles : 28,
      units : "mg/m2",
    }
  };
}

module.exports = Regimen;


