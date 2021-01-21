import { makeHashKey, to4decimals } from '../helpers/utilities';

class CostModel {
  // Cost per drug
  #drugs = {};
  #bodyStats;
  
  /**
   * Step 1) Total dosages per drug per drug unit type
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
   * Step 2) Drug costs per m/f age ranges
   *
   * cancer {
   *  drugs
   *    drug
   *      male
   *        under_one
   *        one_to_four
   *        five_to_nine
   *        ten_to_fourteen
   *      female
   *        under_one
   *        one_to_four
   *        five_to_nine
   *        ten_to_fourteen
   */
  #genderAgeRanges = {};

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
    this.#drugDosages = this.setupCostObj(user, regimens);
    this.#genderAgeRanges = JSON.parse( JSON.stringify(this.#drugDosages) );
    //console.log(this.#genderAgeRanges);
    this.assembleGenderAgeRanges();
    //assembleCosts(setting, user, regimens);
  }

  assembleGenderAgeRanges() {
    //console.log(this.#genderAgeRanges);
    /*
    */
    const ageRanges = Object.keys(this.#bodyStats['bsa']);
    let genderAgeRangeObj = {};
    const cancerKeys = Object.keys(this.#genderAgeRanges);
    cancerKeys.forEach( (cancer) => {
      const currCancer = this.#genderAgeRanges[cancer];
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
              /*
              */
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
   console.log(this.#genderAgeRanges); 
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

  assembleCosts(setting, user, regimens) {
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
