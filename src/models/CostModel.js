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
    //console.log(this.#totalCostPerDrug);
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

/**
 * This is will need to be modified to account for Health system
 * may not have custom incidence. We do not want this inadvertently
 * removed
 */
  removeEmptyInputs(source) {
    let inputs = JSON.parse( JSON.stringify(source));
    Object.keys(inputs).forEach( (input) => {
      if (inputs[input].hasOwnProperty('incidence') ) {
        if (!inputs[input].incidence.hasOwnProperty('custom')) {
          delete inputs[input];
        }
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
  /**
   * START HERE TO INCORPORATE LEVEL PERCENTAGES INTO COST
   * FOR HEALTH SYSTEMS
   */
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
            parseFloat(user[cancer].incidence.custom) * 
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

    /**
     * Initialize a special medAndUser hybrid total to keep track
     * of costs that include drugs with user overridden prices. This
     * total will be used specifically for viewing costs by cancer.
     */
      tcpc.totals.medAndUser = 0;

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
          if (!tcpc.drugs.hasOwnProperty(drug)) {
            tcpc.drugs[drug] = { 
              name: sourceDrugDosage[drug].name,
              total_dosage: 0, 
              costs: {} 
            };
          }
          const dosageTotal = this.getDrugTotals(sourceDrugDosage[drug]);
          const currCancerDrugPrices = this.#prices[drug].prices;
          const hasOverride = Object.keys(currCancerDrugPrices).includes("override");
          tcpc.drugs[drug].total_dosage += dosageTotal;
          
  // Price tiers loop where costs are computed
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
              tcpc.totals[tier] += dosagePrice;
            } // if price is a number (!isNaN)
          }); 
  // End price tiers loop

        /**
         * Update the special medAndUser total with hybrid user/med current drug total,
         * then reset for next drug loop iteration.
         */
          tcpc.totals.medAndUser += currHybridCost;
          currHybridCost = 0;

      // Make sure to update the generic drug dosage totals before leaving loop
          tcpc.totals.dosage += dosageTotal;
        }); 
  // End drugs loop

      }); // Risk strats forEach
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
  setupCostObj(user, regimens) {
    let costObj = {};
    // for( const cancer in user ) {
    Object.keys(user).forEach( (cancer, i) => {
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
    });
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
