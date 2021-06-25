import { makeHashKey, to4decimals, sortObjects, copyObjProps } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  #hasLevels;
  #prices = {};
  #userCancers = [];
  #ageRanges = [];
 
  // Helper for drug hashing
  #drugUnit = {
    "mg/m2": "bsa",
    "mg/kg": "wt",
    "mg" : "generic"
  }

  // Regimens that have no associated drugs, hence
  // need to be omitted from cost calculation
  #noCostRegimens = [
    "Surgery only",
    "Antiretrovirals, only"
  ];
 
  /**
   * Drug dosages
   * Step 1: Total dosages per drug per drug unit type
   *
   * cancer {
   *   name:
   *   levels: [] (arr of regHashes)
   *   risk_strats: {
   *     risk: {
   *       percentage:
   *       drugs {
   *         drug {
   *           name:
   *           drugType {
   *             units:
   *             dosages: []
   */
  #drugDosages = {};

  // 
  /**
   * Age range incidences
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
   * Final step 2: Total dosages/costs per drug
   *
   * Calculate total dosage/costs per drug 
   *
   * costs {
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

  /* Marker A */
  loadAllCostData(setting, cancers, regimens, prices) {
    const { type, incidences, bodyStats, hasLevels } = setting;
    this.#hasLevels = hasLevels ? true : false;
    const filteredInput = this.#hasLevels ? cancers : this.removeEmptyInputs(cancers);
    //console.log(filteredInput);
    if (!filteredInput) {
      return filteredInput;
    }
    this.#bodyStats = bodyStats;
    this.#prices = this.mergePrices(prices.filtered, prices.overrides);
    this.#userCancers = Object.keys(filteredInput);

  /* Marker B */
    this.#drugDosages = this.setupCostObj(filteredInput, regimens);
    this.#ageRanges = Object.keys(bodyStats.bsa);

  /* Marker C */
    this.#ageRangeGenderDrugs = this.assembleAgeRangeGenderDrugs();

  /* Marker D */
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(filteredInput, incidences);

  /* Marker E */
    const ageRangeGenderIncidence = this.getAgeRangeGenderIncidence();

  /* Marker F */
    const totalDosageByType = this.calcTotalDosageByType(ageRangeGenderIncidence);
  
  /* Marker G */
    this.#totalCostPerCancer = this.calcTotalCostPerCancer(totalDosageByType, filteredInput);
    /*
    this.#totalCostPerDrug = this.calcTotalCostPerDrug();
    */
    //console.log(this.#userCancers);
    //console.log("Drug dosages", this.#drugDosages);
    //console.log("Age range gender drugs", this.#ageRangeGenderDrugs);
    //console.log("Age range incidences", this.#ageRangeIncidences);
    //console.log("Age range gender incidence", ageRangeGenderIncidence);
    //console.log("Total dosage by type", totalDosageByType);
    //console.log("Total cost per drug", this.#totalCostPerDrug);
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

/**
 * This is will need to be modified to account for Health system
 * may not have custom incidence. We do not want this inadvertently
 * removed
 */
  removeEmptyInputs(source) {
    let inputs = JSON.parse( JSON.stringify(source));
    Object.keys(inputs).forEach( (input) => {
      if (inputs[input].incidence.custom.length === 0) {
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
  calcAgeRangeIncidences(cancerSelections, incidences) {
    const ageRangeIncObj = {};
    this.#userCancers.forEach( (cancer) => {
      const { cancer: name, age_ranges, ...incidence } = incidences[cancer];
      const risks = cancerSelections[cancer].risks;
      ageRangeIncObj[cancer] = incidence;
      ageRangeIncObj[cancer].name = name;
      ageRangeIncObj[cancer].risk_strats = {}
      Object.keys(risks).forEach( (risk) => {
        ageRangeIncObj[cancer].risk_strats[risk] = {};
        const currRisk = ageRangeIncObj[cancer].risk_strats[risk];
        const percentage = cancerSelections[cancer].risks[risk].percentage;

    // Check whether the modeled prop has a value (for Health sys only) and return
    // that. Otherwise return custom prop. If both are empty, return false
        const selectedIncidence = this.getSelectedIncidence(cancerSelections[cancer].incidence);
        currRisk.age_ranges = {};
        this.#ageRanges.forEach( (ar) => {
          if (selectedIncidence) {
            currRisk.age_ranges[ar] = age_ranges[ar] * 
              parseFloat(selectedIncidence) * 
              ( parseFloat(percentage).toFixed(1) / 100 );
          }
        });
      });
    });
    //console.log(ageRangeIncObj);
    return ageRangeIncObj;
  }

  /**
   * Helper method to examine custom and modeled props
   * of incidence object. If in health sys mode, check for
   * value in custom prop and return it. Otherwise, return modeled
   * which will always be there in health sys mode. If in single
   * inst mode, there is no modeled prop and custom must be present
   * wich should be returned. Catch all is return false if both empty.
   */
  getSelectedIncidence(incidence) {
  // First make sure there are custom/modeled props
    if ( Object.keys(incidence).length === 0) {
      return false;
    }
  // Check if we're in Health sys mode
    if (this.#hasLevels) {
      if ( !incidence.hasOwnProperty('custom') || incidence.custom.length === 0 ) {
        return incidence.modeled;
      }
    }
    return incidence.custom;
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

// Need to add selectedCancers to get regimens per level
// for Health sys mode
  calcTotalCostPerCancer(totalDosageByType, selectedCancers) {
    const totalCostPerCancer = {};
    this.#userCancers.forEach( (cancer) => {
      totalCostPerCancer[cancer] = { 
        name: totalDosageByType[cancer].name,
      };
      const tcpc = totalCostPerCancer[cancer];
      if (this.#hasLevels) {
        tcpc.levels = [];
        // Iterate through levels, calling executeCostCalculation to load levels arr
      }
      else {
        const costObj = this.executeCostCalculation(cancer, totalDosageByType);
        Object.assign(tcpc, JSON.parse( JSON.stringify(costObj) ) );
      }
      console.log(tcpc);
    });
    return totalCostPerCancer;
  }

  executeCostCalculation(cancer, totalDosageByType) {
    const costOutput = { 
      totals: { 
        dosage: 0 
      }, 
      drugs: {} 
    };

    /**
     * Initialize a special medAndUser hybrid total to keep track
     * of costs that include drugs with user overridden prices. This
     * total will be used specifically for viewing costs by cancer.
     */
      costOutput.totals.medAndUser = 0;

  // Risk strats loop
      Object.keys(totalDosageByType[cancer].risk_strats).forEach( (rs) => {
        const sourceDrugDosage = totalDosageByType[cancer].risk_strats[rs].drugs;


  // Drugs loop
        Object.keys(sourceDrugDosage).forEach( (drug) => {

        /**
         * Initialize a currHybridCost variable that will store the current
         * drug's cost total using the median and overriden drug prices 
         * (if there is a user overridden drug price). Eventually this variable's
         * total will be added to the medAndUser total once the price tier loop ends
         */
          let currHybridCost = 0;
          if (!costOutput.drugs.hasOwnProperty(drug)) {
            costOutput.drugs[drug] = { 
              name: sourceDrugDosage[drug].name,
              total_dosage: 0, 
              costs: {} 
            };
          }
          const dosageTotal = this.getDrugTotals(sourceDrugDosage[drug]);
          const currCancerDrugPrices = this.#prices[drug].prices;
          const hasOverride = Object.keys(currCancerDrugPrices).includes("override");
          costOutput.drugs[drug].total_dosage += dosageTotal;
          
  // Price tiers loop where costs are computed
          Object.keys(currCancerDrugPrices).forEach( (tier, num) => {
            if (!costOutput.drugs[drug].costs.hasOwnProperty(tier)) {
              costOutput.drugs[drug].costs[tier] = 0;
            }
            if (!costOutput.totals.hasOwnProperty(tier)) {
              costOutput.totals[tier] = 0;
            }
            const price = this.#prices[drug].prices[tier];
            if (!isNaN(price)) {
              const dosagePrice = dosageTotal * price;
              costOutput.drugs[drug].costs[tier] += dosagePrice;

        /**
         * To get the right hybrid median/user override cost, the default
         * will be to add the median tier cost to the currHybridCost var.
         * However, if the current drug /does/ have a user override drug price,
         * we want to add the overridden drug price cost to the currHybridCost var
         * instead of the median cost. 
         *
         * Thus the hybrid total cost will be the sum of
         * any overriden drug price cost plus the median of all other drug price costs, 
         * minus the median price cost of the drug price that is overriden
         */
              if (tier === "med") {
                if (hasOverride) {
                  currHybridCost += 0;
                }
                else {
                  currHybridCost += dosagePrice;
                }
              }
              if (tier === "override") {
                currHybridCost += dosagePrice;
              }
              costOutput.totals[tier] += dosagePrice;
            } // if price is a number (!isNaN)
          }); 
  // End price tiers loop

        /**
         * Update the special medAndUser total with hybrid user/med current drug total,
         * then reset for next drug loop iteration.
         */
          costOutput.totals.medAndUser += currHybridCost;
          currHybridCost = 0;

      // Make sure to update the generic drug dosage totals before leaving loop
          costOutput.totals.dosage += dosageTotal;
        }); 
  // End drugs loop

      }); // Risk strats forEach
    const costArr = this.objToArray(costOutput.drugs);
    costOutput.drugs = sortObjects(costArr);
    return costOutput;
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

/**
 * MIGHT NEED TO REWORK THIS, ADDING REGIMENS OBJ
 * WITH REG HASHES FOR EACH DRUG OBJ IN PREP
 * FOR HEALTH SYS COST CALC
 */
  calcTotalDosageByType(ageRangeGenderInc) {
    //console.log(ageRangeGenderInc);
    const totalDosage = {};
    this.#userCancers.forEach( (cancer) => {
      totalDosage[cancer] = { 
        name: ageRangeGenderInc[cancer].name,
        risk_strats: {} 
      };
      Object.keys(ageRangeGenderInc[cancer].risk_strats).forEach( (rs) => {
        // Gives us age_ranges obj
        const incsByAgeRange = ageRangeGenderInc[cancer].risk_strats[rs];
        const regimens = this.#ageRangeGenderDrugs[cancer].risk_strats[rs].regimens;
        Object.keys(regimens).forEach( (reg) => {
        // Gives us drugs obj
          totalDosage[cancer].risk_strats[rs] = { regimens: {} };
          const drugsByGender = regimens[reg].drugs;
          //console.log(drugsByGender);
          totalDosage[cancer].risk_strats[rs].regimens[reg] = { drugs: {} };
          //totalDosage[cancer].risk_strats[rs].regimens = {};
          totalDosage[cancer].risk_strats[rs].regimens[reg] = { drugs: {} };
          const totalRegDrugDosage = totalDosage[cancer].risk_strats[rs].regimens[reg];
          //console.log(totalRegDrugDosage);
          Object.keys(drugsByGender).forEach( (drug) => {
            totalRegDrugDosage.drugs[drug] = {};
            const { name, ...drugTypes } = drugsByGender[drug];
            Object.keys(drugTypes).forEach( (type) => {
              totalRegDrugDosage.drugs[drug].name = name;
              totalRegDrugDosage.drugs[drug][type] = { dosages: [] };
              const totalTypeDosages = totalRegDrugDosage.drugs[drug][type].dosages;
              const drugTypesByGender = drugsByGender[drug][type];
              drugTypesByGender.dosages.forEach( (dosage) => {
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
        }); // forEach regimen
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
        const regs = Object.keys(currCancer.risk_strats[rs].regimens);
        regs.forEach( (reg) => {
          const drugs = Object.keys(currCancer.risk_strats[rs].regimens[reg].drugs);
          drugs.forEach( (drug) => {
            const currDrug = currCancer.risk_strats[rs].regimens[reg].drugs[drug];
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
        });// currCancer regs forEach
      });// risk_strats forEach
    });// cancers forEach
    return drugDosagesCopy
  }

/**
 * Takes in a user obj with user-selected cancer data along with regimen obj.
 * Combines the two into an obj with cancer hash props. Each cancer has name
 * and risk strat props. Risk strats is obj with regimen objects that have all
 * drugs in each regimen.
 *
 * Final structure is 
 * cancers: {
     cancerHash: {
       name:
       risk_strats: {
         risk: {
           percentage:
           drugs: {
            drug: {
              name:
              dosages: []
            }
          }
        }
      }
    }
  }
 */
  setupCostObj(cancerSelections, regimens) {
    const costObj = {};
    // for( const cancer in user ) {
    Object.keys(cancerSelections).forEach( (cancer, i) => {
      let drugArr = {};
      if (!costObj.hasOwnProperty(cancer)) {
        costObj[cancer] = { name: cancerSelections[cancer].name, risk_strats: {} };
        //costObj[cancer] = { name: user[cancer].name, drugs: {} };
      }
      const currCancer = cancerSelections[cancer];
      const risks = Object.keys(currCancer.risks);
      if (risks.length >= 1) {
        risks.forEach( (risk) => {
          //console.log(currCancer.name, risk);
          costObj[cancer].risk_strats[risk] = this.setupRiskCostObj(risk, currCancer, regimens);
        });
    /*
          const regHash = makeHashKey(risk, currCancer.risks[risk].regimen);
          costObj[cancer].risk_strats[risk] = {
            percentage: currCancer.risks[risk].percentage,
            drugs: this.loadDrugArray(regHash, regimens)
          };
        });
    */
      }
    });
    return costObj;
  }

  setupRiskCostObj(risk, currCancer, regimens) {
    const currRisk = currCancer.risks[risk];
    let riskCostObj = { regimens: {} };
    riskCostObj.percentage = currRisk.percentage;

    if (!this.#hasLevels) {
      if ( this.#noCostRegimens.includes(currRisk.regimen) ) {
        riskCostObj = false;
      }
      const regHash = makeHashKey(risk, currRisk.regimen);
      riskCostObj.regimens[regHash] = { 
        drugs: this.loadDrugArray(regHash, regimens) 
      };
    }
    else {
      riskCostObj.regimens = {}
      currRisk.levels.forEach( (level) => {
        if ( !this.#noCostRegimens.includes(level) ) {
          const regHash = makeHashKey(risk, level);
          riskCostObj.regimens[regHash] = { 
            drugs: this.loadDrugArray(regHash, regimens)
          }
        }
      });
    }
    return riskCostObj;
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
