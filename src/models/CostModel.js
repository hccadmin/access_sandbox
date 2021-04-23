import { makeHashKey, to4decimals, sortObjects, copyObjProps } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  #prices = {};
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

  /**
   * Final step 1: Total dosages/costs per cancer
   *
   * Calculate total dosage/costs per cancer 
   *
   * costs {
   *   cancer: { 
   *     name
   *     totals: { dosage, low, med, high }
   *     drugs: [
   *       drug: { name, total_dosage, costs } 
   *         name
   *         total_dosage: 
   *         costs {
   *           low
   *           med
   *           high
   *    
   */
  #totalCostPerCancer = {};

  /**
   * Final step 2: Total dosages/costs per cancer
   *
   * Calculate total dosage/costs per drug 
   *
   * drugs {
   *   drug: { 
   *     name
   *     totals: { dosage, low, med, high }
   *     cancers: [
   *       cancer: { name, total_dosage, costs } 
   *         name
   *         total_dosage: 
   *         costs {
   *           low
   *           med
   *           high
   *    
   */
  #totalCostPerDrug = {};

  loadAllCostData(setting, user, regimens, prices) {
    const filteredInput = this.removeEmptyInputs(user);
    if (!filteredInput) {
      return filteredInput;
    }
    const { incidences, bodyStats } = setting;
    this.#bodyStats = bodyStats;
    this.#prices = this.mergePrices(prices.filtered, prices.overrides);
    this.#userCancers = Object.keys(filteredInput);
    this.#ageRanges = Object.keys(bodyStats.bsa);
    this.#drugDosages = this.setupCostObj(filteredInput, regimens);
    this.#ageRangeGenderDrugs = this.assembleAgeRangeGenderDrugs();
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(filteredInput, incidences);
    const ageRangeGenderIncidence = this.getAgeRangeGenderIncidence();
    const totalDosageByType = this.calcTotalDosageByType(ageRangeGenderIncidence);
    this.#totalCostPerCancer = this.calcTotalCostPerCancer(totalDosageByType);
    this.#totalCostPerDrug = this.calcTotalCostPerDrug();
  /*
  */
    //console.log(this.#drugDosages);
    //console.log(this.#ageRangeGenderDrugs);
    //console.log(ageRangeGenderIncidence);
    //console.log(totalDosageByType);
    //console.log(this.#totalCostPerCancer);
    return true;
  }

  getTotalCostPerCancer() {
    return this.#totalCostPerCancer;
  }

  getTotalCostPerDrug() {
    return this.#totalCostPerDrug;
  }

  getCostsByType(type) {
    return type === "cancer" ? this.#totalCostPerCancer : this.#totalCostPerDrug;
  }

  removeEmptyInputs(source) {
    let inputs = JSON.parse( JSON.stringify(source));
    Object.keys(inputs).forEach( (input) => {
      if (!inputs[input].hasOwnProperty('incidence')) {
        delete inputs[input];
      }
    });
    return Object.keys(inputs).length >= 1 && inputs;
  }

// Merges any overriden drug prices with default price list
  mergePrices(filtered, overrides) {
    const list = JSON.parse( JSON.stringify(filtered) );
    if (Object.keys(overrides).length > 0) {
      Object.keys(list).forEach( (drug) => {
        if (overrides.hasOwnProperty(drug)) {
          list[drug].prices.override = overrides[drug];
        }
      });
    }
    return list;
  }

// Stores raw setting incidence * user input incidence * risk strat percentage
  calcAgeRangeIncidences(user, incidences) {
    let ageRangeIncObj = {};
    this.#userCancers.forEach( (cancer) => {
      const { cancer: name, age_ranges, ...incidence } = incidences[cancer];
      const risks = user[cancer].risks;
      ageRangeIncObj[cancer] = incidence;
      ageRangeIncObj[cancer].name = name;
      ageRangeIncObj[cancer].risk_strats = {}
      Object.keys(risks).forEach( (risk) => {
        ageRangeIncObj[cancer].risk_strats[risk] = {};
        const currRisk = ageRangeIncObj[cancer].risk_strats[risk];
        const percentage = user[cancer].risks[risk].percentage;
        currRisk.age_ranges = {};
        this.#ageRanges.forEach( (ar) => {
          currRisk.age_ranges[ar] = age_ranges[ar] * 
            parseFloat(user[cancer].incidence) * 
            ( parseFloat(percentage).toFixed(1) / 100 );
        });
      });
    });
    //console.log(ageRangeIncObj);
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

  calcTotalCostPerCancer(totalDosageByType) {
    let totalCostPerCancer = {};
    this.#userCancers.forEach( (cancer) => {
      totalCostPerCancer[cancer] = { 
        name: totalDosageByType[cancer].name,
        totals: { dosage: 0 }, 
        drugs: {} 
      };
      const tcpc = totalCostPerCancer[cancer];
      let currMedTotal = 0;
      Object.keys(totalDosageByType[cancer].risk_strats).forEach( (rs) => {
        const sourceDrugDosage = totalDosageByType[cancer].risk_strats[rs].drugs;
        Object.keys(sourceDrugDosage).forEach( (drug) => {
          if (!tcpc.drugs.hasOwnProperty(drug)) {
            tcpc.drugs[drug] = { 
              name: sourceDrugDosage[drug].name,
              total_dosage: 0, 
              costs: {} 
            };
          }
          const dosageTotal = this.getDrugTotals(sourceDrugDosage[drug]);
          const currCancerDrugPrices = this.#prices[drug].prices;
          tcpc.drugs[drug].total_dosage += dosageTotal;
          Object.keys(currCancerDrugPrices).forEach( (tier, num) => {
            if (!tcpc.drugs[drug].costs.hasOwnProperty(tier)) {
              tcpc.drugs[drug].costs[tier] = 0;
            }
            if (!tcpc.totals.hasOwnProperty(tier)) {
              tcpc.totals[tier] = 0;
            }
            const price = this.#prices[drug].prices[tier];
            if (!isNaN(price)) {
              const dosagePrice = dosageTotal * price;
              tcpc.drugs[drug].costs[tier] += dosagePrice;

      // Add the current median cost total to temp currMedTotal variable whenever
      // the price tier array for the current cancer does NOT include 'override'
              if ( !Object.keys(currCancerDrugPrices).includes("override") ) {
                if (tcpc.drugs[drug].costs.hasOwnProperty("med") ) {
                  currMedTotal += tcpc.drugs[drug].costs["med"];
                  console.log(`Iteration: ${ num + 1 }:`, currMedTotal);
                //console.log("total added to", currMedTotal);
                }
              }
              else {

      // If the price tier array for current cancer DOES include user price 
      // 'override' variable, first check if medAndUser cost prop, is initialized, 
      // set it to zero if uninitialized.
      // This is needed to compute total cost if the user overrode one of the drug 
      // prices but not all drug prices. If there is user override, this cost
      // is factored into the total. In not, median cost is factored in instead.
                if (!tcpc.totals.hasOwnProperty("medAndUser") ) {
                  tcpc.totals["medAndUser"] = 0;
                }

      // Next, add current median cost total to medAndUser totals property, 
      // then reset the temp variable for next drug iteration. This ensures
      // the medAndUser total will always take into account the running median
      // cost along with user input drug price override
                tcpc.totals["medAndUser"] += currMedTotal;
                console.log("Drug price overridden", tcpc.totals["medAndUser"]);

      // Add the current drug's dosage cost based on the user price override
                if (tier === "override") {
                  tcpc.totals["medAndUser"] += dosagePrice;
                  //console.log("Is this even getting fucking called???");
                  console.log("Drug price overridden", tcpc.totals["medAndUser"]);
                  //console.log("current total", tcpc.totals["medAndUser"]);
                }
              } // if array of current drug tiers has overrides in it
              tcpc.totals[tier] += dosagePrice;
            } // if price is a number (!isNaN)
          }); // Price tiers forEach
          tcpc.totals.dosage += dosageTotal;
          /*
          if ( Object.keys(currCancerDrugPrices).includes("override") ) {
            //console.log(tcpc.drugs[drug].name);
            tcpc.totals["medAndUser"] = ( tcpc.totals["med"] - tcpc.drugs[drug].costs["med"] ) + tcpc.totals["override"];
          }
          */
        }); // Drug keys in prices obj forEach
      }); // Risk strats forEach
      //console.log(totalDosageAndCost[cancer].drugs);
      const costArr = this.objToArray(totalCostPerCancer[cancer].drugs);
      totalCostPerCancer[cancer].drugs = sortObjects(costArr);
    }); // Cancers forEach
    return totalCostPerCancer;
  }

  calcTotalCostPerDrug() {
    let totalCostPerDrug = {};
    let totalCostPerCancer = JSON.parse( JSON.stringify(this.#totalCostPerCancer) );
    Object.keys(totalCostPerCancer).forEach( (cancer) => {
      const currCancer = totalCostPerCancer[cancer];
      const { name, totals } = currCancer;
      currCancer.drugs.forEach( (cancerDrug) => {
        const drugHash = makeHashKey(cancerDrug.name);
        const { total_dosage, costs } = cancerDrug;
        const totalProps = copyObjProps(totals);

        // Get drug ready for population
        if (!totalCostPerDrug.hasOwnProperty(drugHash)) {
          totalCostPerDrug[drugHash] = { 
            name: cancerDrug.name,
            totals: { ...totalProps },
            cancers: []
          };
        }
        const tcpd = totalCostPerDrug[drugHash];
        const totalsCopy = { ...tcpd.totals };

        // Add to drug price/dosage totals from already populated
        // totalCostPerCancer obj
        tcpd.totals = this.getPerDrugTotals(totalsCopy, cancerDrug);

        // Add cancer obj to cancer array in drug obj, populate
        // with data already available from totalCostPerCancer obj
        tcpd.cancers.push({
          name: currCancer.name,
          total_dosage,
          costs
        });
      }); // Drugs forEach
    }); // Cancers forEach
    return totalCostPerDrug;
  }

  getPerDrugTotals(currDrugTotals, currCancerDrugTotals) {
    const costs = { ...currCancerDrugTotals.costs };
    const { total_dosage: dosage } = currCancerDrugTotals;
    const source = { dosage, ...costs };
    Object.keys(currDrugTotals).forEach( (prop) => {
      currDrugTotals[prop] += source[prop];
    });
    /*
    */
    return { ...currDrugTotals };
  }

  getDrugTotals(totalDosageByType) {
    const { name, ...drugTypes } = totalDosageByType;
    let total = 0;
    Object.keys(drugTypes).forEach( (type) => {
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

  objToArray(drugs) {
    const arr = [];
    Object.keys(drugs).forEach( (drug) => {
      arr.push(drugs[drug]);
    });
    return arr;
  }

  calcTotalDosageByType(ageRangeGenderInc) {
    //console.log(ageRangeGenderInc);
    let totalDosage = {};
    this.#userCancers.forEach( (cancer) => {
      totalDosage[cancer] = { 
        name: ageRangeGenderInc[cancer].name,
        risk_strats: {} 
      };
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
            totalDrugDosage.drugs[drug].name = name;
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
