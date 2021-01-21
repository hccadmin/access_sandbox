import { makeHashKey, to4decimals } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  #userCancers = [];
  
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
   * cancer { name, drugs }
   *  drugs { drug } 
   *    drug { name, drugType }
   *      drugType{ units, dosages }
   *        dosages[]
   *          under_one {}
   *            male
   *            female
   *          one_to_four {}
   *            male
   *            female
   *          five_to_nine {}
   *            male
   *            female
   *          ten_to_fourteen {}
   *            male
   *            female
   */
  #genderAgeRanges = {};

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
   *   age_ranges {
   *     under_one
   *     one_to_four
   *     five_to_nine
   *     ten_to_fourteen
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
    this.#drugDosages = this.setupCostObj(user, regimens);
    const drugDosageCopy = JSON.parse( JSON.stringify(this.#drugDosages) );
    this.#genderAgeRanges = this.assembleGenderAgeRanges(drugDosageCopy);
    this.#ageRangeIncidences = this.calcAgeRangeIncidences(user, incidences);
    console.log(this.#genderAgeRanges);
    //assembleCosts(setting, user, regimens);
  }

  calcAgeRangeIncidences(user, incidences) {
    let ageRangeIncObj = {};
    this.#userCancers.forEach( (cancer) => {
      const { age_ranges, ...incidence } = incidences[cancer];
      ageRangeIncObj[cancer] = incidence;
      ageRangeIncObj[cancer].age_ranges = {};
      const currCancer = ageRangeIncObj[cancer];
      Object.keys(age_ranges).forEach( (range) => {
        currCancer.age_ranges[range] = age_ranges[range] * parseFloat(user[cancer].incidence);
      });
    });
    return ageRangeIncObj;
  }

  assembleGenderAgeRanges(drugDosages) {
    const ageRanges = Object.keys(this.#bodyStats['bsa']);
    const cancerKeys = Object.keys(drugDosages);
    cancerKeys.forEach( (cancer) => {
      const currCancer = drugDosages[cancer];
      const drugs = Object.keys(currCancer.drugs);
      drugs.forEach( (drug) => {
        const currDrug = currCancer.drugs[drug];
        const drugTypeKeys = Object.keys(currDrug);
        const [name, ...drugTypes] = drugTypeKeys;
        drugTypes.forEach( (type) => {
          let genderAgeDosageArr = [];
          currDrug[type].dosages.forEach( (dosage) => {
            let genderAgeDosageObj = {};
            ageRanges.forEach( (ar) => {
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
    });// cancers forEach
    return drugDosages;
  }



  setupCostObj(user, regimens) {
    let costObj = {};
    for( const cancer in user ) {
      let drugArr = {};
      if (!costObj.hasOwnProperty(cancer)) {
        costObj[cancer] = { name: user[cancer].name, drugs: {} };
      }
      const currCancer = user[cancer];
      const risks = Object.keys(currCancer.risks);
      if (risks.length >= 1) {
        const regHashes = risks.map( (risk) => {
          const reg = makeHashKey(currCancer.risks[risk].regimen);
          return risk + reg;
        });
        //console.log(regHashes);
        drugArr = this.loadDrugArray(regHashes, regimens);
      }
      costObj[cancer].drugs = drugArr;
    }
    return costObj;
  }

  loadDrugArray(regHashes, regimens) {
    let drugsArr= {};
    // iterate through user selected cancer regs
    regHashes.forEach( (rh) => {
      const reg = regimens[rh];
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
    });// cancer-reg hashes forEach from selected cancers
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
