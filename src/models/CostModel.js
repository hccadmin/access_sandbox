import { 
  makeHashKey, 
  to4decimals, 
  toSingular, 
  sortObjects, 
  setNumber, 
  copyObjProps, 
  arrayFrom 
} from '../helpers/utilities';

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
    "Observation only",
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
    //console.log("Filtered input: ", filteredInput);
    if (!filteredInput) {
      return filteredInput;
    }
    this.#bodyStats = bodyStats;
    this.#prices = this.mergePrices(prices.filtered, prices.overrides);
    //console.log("Prices after merge: ", this.#prices);
    this.#userCancers = Object.keys(filteredInput);
    //console.log("User cancers: ", this.#userCancers);

  /* Marker B */
    this.#drugDosages = this.setupCostObj(filteredInput, regimens);
    //console.log("Drug dosages", this.#drugDosages);

    this.#ageRanges = Object.keys(bodyStats.bsa);

  /* Marker C */
    this.#ageRangeGenderDrugs = this.assembleAgeRangeGenderDrugs();
    //console.log("Age range gender drugs", this.#ageRangeGenderDrugs);

  /* Marker D */
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(filteredInput, incidences);
    //console.log("Age range incidences", this.#ageRangeIncidences);

  /* Marker E */
    const ageRangeGenderIncidence = this.getAgeRangeGenderIncidence();
    //console.log("Age rage gender incidences", ageRangeGenderIncidence);

  /* Marker F */
    const totalDosageByType = this.calcTotalDosageByType(ageRangeGenderIncidence);
    //console.log("Total dosage by type", totalDosageByType);
  
  /* Marker G */
    this.#totalCostPerCancer = this.calcTotalCostPerCancer(totalDosageByType, filteredInput, hasLevels);
    //console.log("Total cost per cancer", this.#totalCostPerCancer);

  /* Marker H */
    this.#totalCostPerDrug = this.calcTotalCostPerDrug(filteredInput);

  /* Marker 1 */
    //console.log(this.#userCancers);
    //console.log("Drug dosages", this.#drugDosages);
    //console.log("Age range gender drugs", this.#ageRangeGenderDrugs);
    //console.log("Age range incidences", this.#ageRangeIncidences);
    //console.log("Age range gender incidence", ageRangeGenderIncidence);
    //console.log("Total dosage by type", totalDosageByType);
    //console.log("Total cost per cancer", this.#totalCostPerCancer);
    //console.log("Total cost per drug", this.#totalCostPerDrug);
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
 * Outputs array of objects specifically for react-csv component.
 * Objects have cancer, drug, volume, low/med/high cost props and
 * use the totalCostPerCancer obj to populate
 * @returns {Array} Array of objects
 */
  getCSVCostsByType(type) { 
    //console.log("Type: ", type);
    const costObj = this.getCostsByType(type);
    if (this.#hasLevels) {
      const csvCostArr = [];
      costObj.forEach( (obj) => {
        const levelCost = this.assembleCSVCosts(obj, type);
        csvCostArr.push(levelCost);
      });
      return csvCostArr;
    }
    return this.assembleCSVCosts(costObj, type);
  }

  assembleCSVCosts(costObj, type) {
    const output = [];
    Object.keys(costObj.individual).forEach( (costHash) => {
      const curr = costObj.individual[costHash];
      //console.log("Current: ", curr);
      const itemType = toSingular( Object.keys(curr).filter(key => key !== "totals" && key !== "name").pop() );
      //console.log("Item type: ", itemType);
      const { name, totals, ...itemized } = curr;
      //console.log("Name: ", name);
      const { dosage, low, high, med, ...rest } = totals;
      //console.log("Itemized: ", itemized);
      const itemVals = Object.values(itemized).pop();
      //console.log("Item values: ", itemVals);
      itemVals.forEach( (item) => {
        const { name: itemName, total_dosage: volume, costs } = item;
        //console.log("Item: ", item);
        //console.log(itemName, volume, costs);
        const csvObj = { volume, ...costs };
        csvObj[type] = name;
        csvObj[itemType] = itemName;
        //console.log(csvObj);
        output.push(csvObj);
      });
  // Add cancer totals and blank line as the last objs in array
      const itemTotals = { volume: dosage, low, med, high, override: rest.override };
      itemTotals[type] = "Totals";
      itemTotals[itemType] = "";
      const spacer = copyObjProps(itemTotals, false);
      output.push(itemTotals, spacer);
      //console.log("Output: ", output);
    });
    //console.log(output);
    return output;
  }

/**
 * Removes object properties that are empty or
  }

/**
 * Removes object properties that are empty or
 * have no value
 * @param {Object} Object with cancerHash props
 * @returns {Object} Object with cancerHash props, all filled
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

/**
 * Merges any overriden drug prices with default price list
 * @param {Object} Object with low/med/high drug prices filtered by user
 * @param {Object} Object with user-overridden drug prices
 * @returns {Object} Object with merged filtered, overridden drug prices
 */
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

/**
 * Stores raw setting incidence * user input incidence * risk strat percentage
 */
// Marker D
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

// Marker E
  getAgeRangeGenderIncidence() {
    const ageRangeGenderIncObj = JSON.parse( JSON.stringify(this.#ageRangeIncidences) );
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

  addToLevelsTotal(levelCost, levelsTotal, level) {
  // if this is the first level iteration, just copy the
  // first level's data into levelsTotal
    if ( Object.keys(levelsTotal).length === 0 ) {
      levelsTotal = JSON.parse( JSON.stringify(levelCost) );
      return levelsTotal;
    }
    levelsTotal.grandTotal += levelCost.grandTotal;
  // Start iterating through each cancer
    this.#userCancers.forEach( (cancer) => {
      const currCancer= levelCost.individual[cancer];
      const levelsTotalCancer = levelsTotal.individual[cancer];
      const drugsCopy = JSON.parse( JSON.stringify(levelsTotalCancer.drugs) );
      const levelsDrugArr = drugsCopy.map(drug => drug.name);
      //console.log("Cancer: ", currCancer.name, "Levels drug arr: ", levelsDrugArr);

  // Cancer totals
      Object.keys(currCancer.totals).forEach( (totalType) => {
  // Make sure the value for each totals property is a number. If not,
  // just make it 0.
        if (isNaN(levelsTotalCancer.totals[totalType])) {
          levelsTotalCancer.totals[totalType] = 0;
        }
        levelsTotalCancer.totals[totalType] += currCancer.totals[totalType];
      });
  // Individual drugs
      if (currCancer.drugs.length > 0) {
        currCancer.drugs.forEach( (drug, i) => {

  // First check if levelsTotal drugs array is empty (happens if a treatment regimen does NOT
  // include drugs)
          //if (levelsTotalCancer.drugs.length > 0) {

            const drugIndex = levelsDrugArr.indexOf(currCancer.drugs[i].name);
            if (drugIndex !== -1) {
              this.addToLevelIteration(levelsTotalCancer.drugs[drugIndex], currCancer.drugs[i]);
            }
            else {
              levelsTotalCancer.drugs.push( JSON.parse( JSON.stringify(currCancer.drugs[i]) ) );
            }
          //} // if more than 0 drugs in levelsTotalCancer obj
        }); // drugs loop
        levelsTotalCancer.drugs = sortObjects(levelsTotalCancer.drugs);
      } // if more than 0 drugs in currCancer obj
    }); // cancers loop
    return levelsTotal;
  }

  addToLevelIteration(levelsTotalDrugs, currCancerDrugs) {
    levelsTotalDrugs.total_dosage += currCancerDrugs.total_dosage;
    Object.keys(currCancerDrugs.costs).forEach( (costType) => {
      levelsTotalDrugs.costs[costType] += currCancerDrugs.costs[costType];
    }); // drug costs loop
  }

// Need to add selectedCancers to get regimens per level
// for Health sys mode
// Marker G
  calcTotalCostPerCancer(totalDosageByType, selectedCancers, hasLevels) {
    let totalCostPerCancer = { individual: {}, grandTotal: 0 };
    let levelsTotal = {};
    const costsPerLevel = [];
    if (this.#hasLevels) {

  // Check if user overrode default (modeled) level percentages, assign either the user 
  // or default percentages array to levels
      const levels = hasLevels.custom.length === 3 ? hasLevels.custom.map( num => setNumber(num) ) : hasLevels.modeled;

  // Begin levels loop
      arrayFrom("3").forEach( (level, i) => {

  // Re-initialize totalCostPerCancer obj to accept new cost calcs in
  // next inst level iteration
        totalCostPerCancer = { individual: {}, grandTotal: 0 };
        this.#userCancers.forEach( (cancer) => {
          const incidence = selectedCancers[cancer].incidence.custom || selectedCancers[cancer].incidence.modeled; 
          totalCostPerCancer.individual[cancer] = { 
            name: totalDosageByType[cancer].name
          };
          const totalCurrCancerCost = totalCostPerCancer.individual[cancer];
          const levelsObj = { 
            iteration: i,
            extractLevels: selectedCancers[cancer],
            percentage: levels[i]
          };
          const levelByRiskCost = this.executeCostCalculation(totalDosageByType[cancer], incidence, levelsObj);
          Object.assign(totalCurrCancerCost, JSON.parse( JSON.stringify(levelByRiskCost) ) );
          /*
          if(totalDosageByType[cancer].name === "Osteosarcoma") {
            console.log({costPerLevel});
          }
          */
          totalCostPerCancer.grandTotal += levelByRiskCost.totals.medAndUser;
        });// cancers forEach
        costsPerLevel.push(totalCostPerCancer);
        levelsTotal = this.addToLevelsTotal(totalCostPerCancer, JSON.parse( JSON.stringify(levelsTotal) ), i );
      });// levels forEach
      costsPerLevel.unshift(levelsTotal);
      //console.log(costsPerLevel);
    }
    else {
      this.#userCancers.forEach( (cancer) => {
        const incidence = selectedCancers[cancer].incidence.custom || selectedCancers[cancer].incidence.modeled; 
        totalCostPerCancer.individual[cancer] = { 
          name: totalDosageByType[cancer].name,
        };
        const totalCurrCancerCost = totalCostPerCancer.individual[cancer];
        const costObj = this.executeCostCalculation(totalDosageByType[cancer], incidence);
        Object.assign(totalCurrCancerCost, JSON.parse( JSON.stringify(costObj) ) );
        totalCostPerCancer.grandTotal += costObj.totals.medAndUser;
      }); // cancers forEach
    }
    //console.log(totalCostPerCancer);
    return this.#hasLevels ? costsPerLevel : totalCostPerCancer;
  }

  executeCostCalculation(totalDosageByCancer, incidence, levelsObj = false) {
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
      Object.keys(totalDosageByCancer.risk_strats).forEach( (rs) => {
        let sourceDrugDosage;
        let levelPercentage;
        const tdbcRegimens = totalDosageByCancer.risk_strats[rs].regimens;

// First check to make sure there are regimens associated with the
// current risk strat
        if (Object.keys(tdbcRegimens).length > 0) {

// Check if we're in single institution or health sys mode
          if (levelsObj) {
            const { iteration, extractLevels } = levelsObj;
            levelPercentage = levelsObj.percentage / 100;
            const levels = extractLevels.risks[rs].levels;
            const levelReg = levels[iteration];
            if (this.#noCostRegimens.includes(levelReg) ) {
              return false;
            }
            const levelRegHash = makeHashKey(rs, levelReg);
            //console.log(rs, levelRegHash);
            sourceDrugDosage = tdbcRegimens[levelRegHash].drugs;
          }
          else {
            const vals = Object.values(tdbcRegimens);
            sourceDrugDosage = vals[0].drugs;
          }

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
            let dosageTotal = this.getDrugTotals(sourceDrugDosage[drug]);
            if (this.#hasLevels) {
              dosageTotal *= levelPercentage;
            }

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

  /*
            if(totalDosageByCancer.name === "Osteosarcoma") {
              console.log(costOutput.drugs);
            }
  */

          });// Drugs forEach
        }// If current risk strat has regimens
      }); // Risk strats forEach
    const costArr = this.objToArray(costOutput.drugs);
    costOutput.drugs = sortObjects(costArr);
    const medTotal = Number.isNaN(costOutput.totals.medAndUser) ? costOutput.totals.med : costOutput.totals.medAndUser;
    costOutput.totals.perChild = medTotal / incidence;
    return costOutput;
  }

// Marker H
  calcTotalCostPerDrug(selectedCancers) {
    let totalCostPerDrug = { individual: {}, grandTotal: 0 };
    const tcpcCopy = JSON.parse( JSON.stringify(this.#totalCostPerCancer) );
    const costsPerLevel = [];
    if (this.#hasLevels) {
      tcpcCopy.forEach( (cancerCostLevel) => {
        totalCostPerDrug = { individual: {}, grandTotal: cancerCostLevel.grandTotal };
        Object.keys(cancerCostLevel.individual).forEach( (cancer) => {
          const incidence = selectedCancers[cancer].incidence.custom || selectedCancers[cancer].incidence.modeled; 
          this.executeTotalCostPerDrug(cancerCostLevel.individual[cancer], incidence, totalCostPerDrug);
          //console.log(levelByDrugCost);
          //Object.assign(totalCostPerDrug, JSON.parse( JSON.stringify(levelByDrugCost) ) );
        }); // cancers forEach
        costsPerLevel.push(totalCostPerDrug);
      }); // cost levels forEach
    }
    else {
      totalCostPerDrug.grandTotal = tcpcCopy.grandTotal;
      Object.keys(tcpcCopy.individual).forEach( (cancer) => {
        const incidence = selectedCancers[cancer].incidence.custom || selectedCancers[cancer].incidence.modeled; 
        const currCancer = tcpcCopy.individual[cancer];
       this.executeTotalCostPerDrug(currCancer, incidence, totalCostPerDrug);
      });// cancers forEach
      //console.log(totalCostPerDrug);
    }
    return this.#hasLevels ? costsPerLevel : totalCostPerDrug;
  }

  executeTotalCostPerDrug(currCancer, incidence, totalCostPerDrug) {
    const { totals } = currCancer;
    currCancer.drugs.forEach( (cancerDrug) => {
      const drugHash = makeHashKey(cancerDrug.name);
      const { total_dosage, costs } = cancerDrug;

  // All totals props with qty set to 0
      const totalProps = copyObjProps(totals);

      // Get drug ready for population
      if (!totalCostPerDrug.individual.hasOwnProperty(drugHash)) {
        totalCostPerDrug.individual[drugHash] = { 
          name: cancerDrug.name,
          totals: { ...totalProps },
          cancers: []
        };
      }
      const tcpd = totalCostPerDrug.individual[drugHash];
      const totalsCopy = { ...tcpd.totals };

      // Add to drug price/dosage totals from already populated
      // totalCostPerCancer obj
      tcpd.totals = this.getPerDrugTotals(totalsCopy, incidence, cancerDrug);

      // Add cancer obj to cancer array in drug obj, populate
      // with data already available from totalCostPerCancer obj
      tcpd.cancers.push({
        name: currCancer.name,
        total_dosage,
        costs
      });
    }); // Drugs forEach
    //return totalCostPerDrug;
  }


// Used in executeTotalCostPerDrug
  getPerDrugTotals(currDrugTotals, incidence, currCancerDrugTotals) {
    const costs = { ...currCancerDrugTotals.costs };
    const { total_dosage: dosage } = currCancerDrugTotals;
    const medCost = costs.override || costs.med;
    const perChild = medCost / incidence;
    const source = { dosage, perChild, ...costs };
    Object.keys(currDrugTotals).forEach( (prop) => {
      currDrugTotals[prop] += source[prop];
    });
    /*
    */
    return { ...currDrugTotals };
  }

// Used in executeCostCalculation
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

 // Uses ageRangeGenderInc and ageRangeGenderDrugs
 // Outputs totalDosageByType
// Marker F
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
        totalDosage[cancer].risk_strats[rs] = { regimens: {} };
        Object.keys(regimens).forEach( (reg) => {
        // Gives us drugs obj
          const drugsByGender = regimens[reg].drugs;
          //console.log(drugsByGender);
          totalDosage[cancer].risk_strats[rs].regimens[reg] = { drugs: {} };
          //totalDosage[cancer].risk_strats[rs].regimens = {};
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

// Marker C
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
// Marker B
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
          const riskCostObj = this.setupRiskCostObj(risk, currCancer, regimens);

// Check if the risk strat has corresponding regimens, delete the property if it does not
          if (!riskCostObj) {
            delete costObj[cancer].risk_strats[risk];
          }
          else {
            costObj[cancer].risk_strats[risk] = riskCostObj;
          }
        });
      }
    });
    //console.log("Cost obj: ", costObj);
    return costObj;
  }

  setupRiskCostObj(risk, currCancer, regimens) {
    const currRisk = currCancer.risks[risk];
    let riskCostObj = { regimens: {} };
    riskCostObj.percentage = currRisk.percentage;

    if (!this.#hasLevels) {
      // console.log("No levels: ", currCancer.name);
      if ( !this.#noCostRegimens.includes(currRisk.regimen) ) {
        const regHash = makeHashKey(risk, currRisk.regimen);
        riskCostObj.regimens[regHash] = { 
          drugs: this.loadDrugArray(regHash, regimens) 
        };
      }
    }
    else {
      //console.log("Has levels: ", currCancer.name);
      //console.log("cancer", currCancer);
      riskCostObj.regimens = {}
      currRisk.levels.forEach( (level) => {
        if ( !this.#noCostRegimens.includes(level) ) {
          const regHash = makeHashKey(risk, level);
          riskCostObj.regimens[regHash] = { 
            drugs: this.loadDrugArray(regHash, regimens)
          }
        }
      });
      //console.log("riskCostObj", riskCostObj);
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
