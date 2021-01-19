import { makeHashKey } from '../helpers/utilities';

class CostModel {
  #drugs = {};
  #costs = {};
  #drugUnit = {
    "mg/m2": "bsa",
    "mg/kg": "wt",
    "mg" : "generic"
  }

  /**
   * costs {
   *   cancer: {
   *    drug: 
   *    
   */
  loadDrugPrices(type, prices) {
    this.price_type = type;
    this.#drugs = prices;
    //console.log(prices);
  }

  loadAllCostData(setting, user, regimens) {
    const { incidences, bodyStats } = setting;
    this.#costs = this.setupCostObj(user, bodyStats, regimens);
    //assembleCosts(setting, user, regimens);
  }

  setupCostObj(user, bodyStats, regimens) {
    let costObj = {};
    for( const cancer in user ) {
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
        const drugArr = this.loadDrugArray(regHashes, regimens);
      }
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
              drugsArr[drug][drugHash] = [];
            }
            drugsArr[drug][drugHash].push(dr.total_dosage);
          }); // drug dosage forEach
        }); // Drug name keys from reg obj lit
    });// cancer-reg hashes forEach from selected cancers
    console.log(drugsArr);
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
