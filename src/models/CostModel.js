import { makeHashKey, to4decimals } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  #userCancers = [];
  #ageRanges = [];
 
  // Helper for drug hashing
  #drugUnit = {
    "mg/m2": "bsa",
    "mg/kg": "wt",
    "mg" : "generic"
  }
 
  /**
   * Step 1: Total dosages per drug per drug unit type
   *
   * cancer {
   *   name:
   *   drugs {
   *     drug {
   *       name:
   *       drugType {
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

  // Final cost obj
  #totalDosageAndCost = {};

  /**
   * costs {
   *   cancer: { 
   *     drugs {
   *       drug { total_dosage, costs } 
   *         total_dosage: 
   *         costs {
   *           low
   *           med
   *           high
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
    this.#ageRangeGenderDrugs = this.assembleAgeRangeGenderDrugs();
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(user, incidences);
    const ageRangeGenderIncidence = this.getAgeRangeGenderIncidence();
    const totalDosageByType = this.calcTotalDosageByType(ageRangeGenderIncidence);
    this.#totalDosageAndCost = this.calcTotalDosageAndCost(totalDosageByType);
    //console.log(this.#drugDosages);
    //console.log(this.#ageRangeGenderDrugs);
    //console.log(ageRangeGenderIncidence);
    //console.log(totalDosageByType);
  }

  getTotalDosageAndCost() {
    return this.#totalDosageAndCost;
  }

// Stores raw setting incidence * user input incidence * risk strat percentage
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
    //console.log(ageRangeGenderIncObj);
    return ageRangeGenderIncObj;
  }

  calcTotalDosageAndCost(totalDosageByType) {
    let totalDosageAndCost = {};
    const prices = this.getDrugPrices();
    this.#userCancers.forEach( (cancer) => {
      totalDosageAndCost[cancer] = { drugs: {} };
      const tdcd = totalDosageAndCost[cancer].drugs;
      Object.keys(totalDosageByType[cancer].risk_strats).forEach( (rs) => {
        const sourceDrugDosage = totalDosageByType[cancer].risk_strats[rs].drugs;
        Object.keys(sourceDrugDosage).forEach( (drug) => {
          if (!tdcd.hasOwnProperty(drug)) {
            tdcd[drug] = { total_dosage: 0, costs: {} };
          }
          const dosageTotal = this.getDrugTotals(sourceDrugDosage[drug]);
          tdcd[drug].total_dosage += dosageTotal;
          Object.keys(prices[drug]).forEach( (tier) => {
            if (!tdcd[drug].costs.hasOwnProperty(tier)) {
              tdcd[drug].costs[tier] = 0;
            }
            const price = prices[drug][tier];
            tdcd[drug].costs[tier] += dosageTotal * price;
          }); // Price tiers forEach
        }); // Drug keys in prices obj forEach
      }); // Risk strats forEach
    }); // Cancers forEach
    //console.log(totalDosageAndCost);
    return totalDosageAndCost;
  }

  getDrugTotals(totalDosageByType) {
    let total = 0;
    Object.keys(totalDosageByType).forEach( (type) => {
      const typeTotal = totalDosageByType[type].dosages.reduce( (subtotal, dosage) => {
        return subtotal + dosage;
      });
      total += typeTotal;
    });
    //console.log(totalDosageByType, total);
    return total;
    /*
    */
  }

  calcTotalDosageByType(ageRangeGenderInc) {
    //console.log(ageRangeGenderInc);
    let totalDosage = {};
    this.#userCancers.forEach( (cancer) => {
      totalDosage[cancer] = { risk_strats: {} };
      Object.keys(ageRangeGenderInc[cancer].risk_strats).forEach( (rs) => {
        // Gives us age_ranges obj
        const incsByAgeRange = ageRangeGenderInc[cancer].risk_strats[rs];
        // Gives us drugs obj
        const drugsByGender = this.#ageRangeGenderDrugs[cancer].risk_strats[rs];
        totalDosage[cancer].risk_strats[rs] = { drugs: {} };
        const totalDrugDosage = totalDosage[cancer].risk_strats[rs];
        //console.log(drugsByGender, incsByAgeRange);
        Object.keys(drugsByGender.drugs).forEach( (drug) => {
          totalDrugDosage.drugs[drug] = {};
          const { name, ...drugTypes } = drugsByGender.drugs[drug];
          Object.keys(drugTypes).forEach( (type) => {
            totalDrugDosage.drugs[drug][type] = { dosages: [] };
            let totalTypeDosages = totalDrugDosage.drugs[drug][type].dosages;
            const drugTypesByGender = drugsByGender.drugs[drug][type];
            drugTypesByGender.dosages.forEach( (dosage) => {
              //console.log(dosage);
              let dosageTotal = 0;
              this.#ageRanges.forEach( (ar) => {
                ['male', 'female'].forEach( (gender) => {
                  const ageGenderTotal = dosage[ar][gender] * incsByAgeRange.age_ranges[ar][gender];
                  dosage[ar][gender] = ageGenderTotal;
                  dosageTotal += ageGenderTotal;
                });// forEach gender
              });// forEach age ranges
              totalTypeDosages.push(dosageTotal);
              //console.log(type, totalTypeDosages);
            }); // forEach dosages
            //console.log(totalTypeDosages);
          }); // forEach drug types
        }); // forEach drug
      }); // forEach risk strat
      //console.log(totalDosage);
    }); // forEach cancer
    return totalDosage;
  }

  assembleAgeRangeGenderDrugs() {
    const drugDosagesCopy = JSON.parse( JSON.stringify(this.#drugDosages) );
    this.#userCancers.forEach( (cancer) => {
      const currCancer = drugDosagesCopy[cancer];
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
                ['male', 'female'].forEach( (gender) => {
                  if (unit === "generic") {
                    genderAgeDosageObj[ar][gender] = dosage; 
                  }
                  else {
                    const bodyStat = parseFloat(this.#bodyStats[unit][ar][gender]);
                    const ageGenderDosage = bodyStat * dosage; 
                    if ( currDrug[type].hasOwnProperty('max_dose') && ageGenderDosage > currDrug[type].max_dose ) {
                      genderAgeDosageObj[ar][gender] = currDrug[type].max_dose;
                    }
                    else {
                      genderAgeDosageObj[ar][gender] = ageGenderDosage;
                    }
                  }
                }); // gender forEach
              }); // age ranges forEach
              genderAgeDosageArr.push(genderAgeDosageObj)
            }); // dosages forEach
            currDrug[type].dosages = genderAgeDosageArr;
          });// drugTypes forEach
        });// currCancer drugs forEach
      });// risk_strats forEach
    });// cancers forEach
    return drugDosagesCopy
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
            if (dr.hasOwnProperty('max_dose')) {
              drugsArr[drug][drugHash].max_dose = dr.max_dose;
            }
          }
          drugsArr[drug][drugHash].dosages.push(dr.total_dosage);
        }); // drug dosage forEach
      }); // Drug name keys from reg obj lit
    //console.log(drugsArr);
    return drugsArr;
  }

  getDrugPrices() {
    let prices = {};
    this.#drugs.forEach( (drug) => {
      const drugName = makeHashKey(drug.name);
      const filtered = Object.keys(drug.pricing).filter( (type) => {
        if (type === this.price_type) {
          return true;
        }
        return false;
      });
      prices[drugName] = { ...drug.pricing[filtered.pop()] };
    });
    return prices;
  }
}

export default CostModel;
