import { makeHashKey, to4decimals } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  #userCancers = [];
  #ageRanges = [];
  
  /**
   * Step 1: Total dosages per drug per drug unit type
   *
   * cancer {
   *   name:
   *   drugs {
   *     drug {
   *       name:
   *       druga {
   *         units:
   *         dosages: []
   */
  #drugDosages = {};

  // 
  /**
   * Step 2: Drug costs per m/f age ranges
   *
   * cancer { name, risk_strats }
   *  risk_strats {
   *    risk_strat { percentage, drugs }
   *      drugs { drug } 
   *        drug { name, drugType }
   *          drugType{ units, dosages }
   *            dosages[]
   *              under_one {}
   *                male
   *                female
   */
  #ageRangeGenderDrugs = {};

  /**
   * Step 3: Age segmented incidences
   *
   * Multiply age segmented incidence percentages in Setting
   * by user input incidence
   *
   * cancer { name, age_ranges }
   *   %male
   *   %female
   *   total
   *   risk_strats {
   *     risk_strat {
   *       age_ranges {
   *         under_one
   */
  #ageRangeIncidences = {};

  // Helper for drug hashing
  #drugUnit = {
    "mg/m2": "bsa",
    "mg/kg": "wt",
    "mg" : "generic"
  }

  // Final obj
  #costs = {};

  /**
   * costs {
   *   cancer: {
   *    drug: 
   *    
   */
  loadDrugPrices(type, prices) {
    this.price_type = type;
    this.#drugs = prices;
  }

  loadAllCostData(setting, user, regimens) {
    const { incidences, bodyStats } = setting;
    this.#bodyStats = bodyStats;
    this.#userCancers = Object.keys(user);
    this.#ageRanges = Object.keys(bodyStats.bsa);
    this.#drugDosages = this.setupCostObj(user, regimens);
    const drugDosageCopy = JSON.parse( JSON.stringify(this.#drugDosages) );
    this.#ageRangeGenderDrugs = this.assembleAgeRangeGenderDrugs(drugDosageCopy);
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(user, incidences);
    const ageRangeGenderIncidence = this.getAgeRangeGenderIncidence();
    //console.log(this.#ageRangeGenderDrugs);
    //console.log(this.#ageRangeIncidences);
  }

  calcAgeRangeIncidences(user, incidences) {
    let ageRangeIncObj = {};
    this.#userCancers.forEach( (cancer) => {
      const { age_ranges, ...incidence } = incidences[cancer];
      const risks = user[cancer].risks;
      ageRangeIncObj[cancer] = incidence;
      ageRangeIncObj[cancer].risk_strats = {}
      Object.keys(risks).forEach( (risk) => {
        ageRangeIncObj[cancer].risk_strats[risk] = {};
        const currRisk = ageRangeIncObj[cancer].risk_strats[risk];
        currRisk.age_ranges = {};
        this.#ageRanges.forEach( (ar) => {
          currRisk.age_ranges[ar] = age_ranges[ar] * parseFloat(user[cancer].incidence) * user[cancer].risks[risk].percentage;
        });
      });
    });
    return ageRangeIncObj;
  }

  getAgeRangeGenderIncidence() {
    let ageRangeGenderIncObj = JSON.parse( JSON.stringify(this.#ageRangeIncidences) );
  // Get male/female percentages from ageRangeIncidences
  // Multiply by age range figures in ageRangeIncidences
  // Overwrite results into ageRangeGenderDrugs
    this.#userCancers.forEach( (cancer) => {
      const currCancer = ageRangeGenderIncObj[cancer];
      Object.keys(currCancer.risk_strats).forEach( (rs) => {
        const currRiskCopy = currCancer.risk_strats[rs];
        const currRiskSource = this.#ageRangeIncidences[cancer].risk_strats[rs];
        this.#ageRanges.forEach( (ar) => {
        // Overwrite original data with new obj
          currRiskCopy.age_ranges[ar] = { male: "", female: "" };
          currRiskCopy.age_ranges[ar].male = currCancer.male_percentage * currRiskSource.age_ranges[ar];
          currRiskCopy.age_ranges[ar].female = currCancer.female_percentage * currRiskSource.age_ranges[ar];
        });// ageRanges forEach
      });// current cancer risk strats forEach
    });// user cancer forEach
    console.log(ageRangeGenderIncObj);
    return ageRangeGenderIncObj;
  }

  assembleAgeRangeGenderDrugs(drugDosages) {
    const cancerKeys = Object.keys(drugDosages);
    cancerKeys.forEach( (cancer) => {
      const currCancer = drugDosages[cancer];
      const risk_strats = Object.keys(currCancer.risk_strats);
      risk_strats.forEach( (rs) => {
        const drugs = Object.keys(currCancer.risk_strats[rs].drugs);
        drugs.forEach( (drug) => {
          const currDrug = currCancer.risk_strats[rs].drugs[drug];
          const drugTypeKeys = Object.keys(currDrug);
          const [name, ...drugTypes] = drugTypeKeys;
          drugTypes.forEach( (type) => {
            let genderAgeDosageArr = [];
            currDrug[type].dosages.forEach( (dosage) => {
              let genderAgeDosageObj = {};
              this.#ageRanges.forEach( (ar) => {
                let unit = currDrug[type].units;
                genderAgeDosageObj[ar] = { male: "", female: "" };
                unit = (unit === "wt" ? "weight" : unit);
                if (unit === "generic") {
                  genderAgeDosageObj[ar].male = dosage; 
                  genderAgeDosageObj[ar].female = dosage; 
                }
                else {
                  const male = parseFloat(this.#bodyStats[unit][ar]['male']);
                  const female = parseFloat(this.#bodyStats[unit][ar]['female']);
                  genderAgeDosageObj[ar].male = to4decimals(male * dosage); 
                  genderAgeDosageObj[ar].female = to4decimals(female * dosage); 
                }
              }); // age ranges forEach
              genderAgeDosageArr.push(genderAgeDosageObj)
            }); // dosages forEach
            currDrug[type].dosages = genderAgeDosageArr;
          });// drugTypes forEach
        });// currCancer drugs forEach
      });// risk_strats forEach
    });// cancers forEach
    return drugDosages;
  }



  setupCostObj(user, regimens) {
    let costObj = {};
    for( const cancer in user ) {
      let drugArr = {};
      if (!costObj.hasOwnProperty(cancer)) {
        costObj[cancer] = { name: user[cancer].name, risk_strats: {} };
        //costObj[cancer] = { name: user[cancer].name, drugs: {} };
      }
      const currCancer = user[cancer];
      const risks = Object.keys(currCancer.risks);
      if (risks.length >= 1) {
        risks.forEach( (risk) => {
          const regHash = makeHashKey(risk, currCancer.risks[risk].regimen);
          costObj[cancer].risk_strats[risk] = {
            percentage: currCancer.risks[risk].percentage,
            drugs: this.loadDrugArray(regHash, regimens)
          };
        });
      }
    }
    return costObj;
  }

  loadDrugArray(regHash, regimens) {
    let drugsArr= {};
    // iterate through user selected cancer regs
    const reg = regimens[regHash];
  // Drug names as keys from regimen obj lit
      Object.keys(reg.drugs).forEach( (drug) => {
        if (!drugsArr.hasOwnProperty(drug)) {
          drugsArr[drug] = {};
        }
  // Array of drug dosages within a drug
        reg.drugs[drug].forEach( (dr) => {
          const unit = this.#drugUnit[dr.units];
          const drugHash = makeHashKey(drug, unit);
          if (!drugsArr[drug].hasOwnProperty(drugHash)) {
            drugsArr[drug].name = dr.drug;
            drugsArr[drug][drugHash] = {};
            drugsArr[drug][drugHash].units = unit;
            drugsArr[drug][drugHash].dosages = [];
          }
          drugsArr[drug][drugHash].dosages.push(dr.total_dosage);
        }); // drug dosage forEach
      }); // Drug name keys from reg obj lit
    //console.log(drugsArr);
    return drugsArr;
  }

  getDrugPrices() {
    const prices = this.#drugs.map( (drug) => {
      const filtered = Object.keys(drug.pricing).filter( (type) => {
        if (type === this.price_type) {
          return true;
        }
        return false;
      });
      return { name: drug.name, ...drug.pricing[filtered.pop()] };
    });
  }

  loadParams(cancer, regimens) {
    /*
    if (!this.#costs.hasOwnProperty(cancer)) {
      this.#costs[cancer] 
    */
  }
}

export default CostModel;
