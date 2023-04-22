import { makeHashKey, sortObjects, arrayFrom } from '../helpers/utilities';

const WILMS_TUMOR = "Wilms Tumor";

class CancerModel {
  #cancers = [];
  /**
   * {
   *   cancer-riskstrat-reg hash: {
   *     cancer,
   *     risk_strat,
   *     regimen,
   *     levels,
   *     drug hash: [
   *       {
   *         drug,
   *         units,
   *         total_dosage
   *       }
   *     ]
   *   }
   * }
   */
  #regimenContent = {};
  #regimens = {};

  loadCancers(dbCancers, dbRegimens) {
    this.#cancers = this.restructure(dbCancers);
    this.#regimens = this.buildRegimens(dbRegimens);
    this.#regimenContent = this.buildRegimenContent(dbCancers, dbRegimens);
  }

  getCancerNames() {
    return this.#cancers.map( (cancer) => {
      return cancer.name;
    });
  }

  getCancersFull() {
    return this.#cancers;
  }

  getRegimenContent() {
    return this.#regimenContent;
  }

  getRegimens() {
    return this.#regimens;
  }

/**
 *
 * cancers: {
     cancerHash: [
       {
         name: regimen name,
         drugs: [
           {
             ...drug
  *
*/
  buildRegimenContent(dbCancers, dbRegimens) {
    const regimenContent = {};
    dbCancers.forEach( (cancer) => {
      const cancerHash = makeHashKey(cancer.cancer);
      const currCancerRegs = dbRegimens.filter(reg => reg.cancer === cancer.cancer);
      const sorted = this.sortRegimenContent(currCancerRegs, cancer.risk_strats);
      //console.log(currCancerRegs);
      regimenContent[cancerHash] = sorted;
    });
    return regimenContent;
  }

  sortRegimenContent(mixedRegs, sortedRisks) {
    const regs = sortedRisks.map(risk => risk.regimens).flat();
    // eliminate duplicate regimens
    const regSet = new Set(regs);
    const sortedRegNames = [...regSet];
    const sortedRegs = arrayFrom(sortedRegNames.length);
    //console.log(sortedRegs);
    sortedRegNames.forEach( (regName, i) => {
      for (let j = 0; j < mixedRegs.length; j++) {
        if (mixedRegs[j].name === regName) {
          sortedRegs[i] = mixedRegs[j];
          break;
        }
      }
    });
    //console.log(sortedRegs);
    return sortedRegs;
  }


  buildRegimens(results) {
    const regimens = {};
    results.forEach( (result) => {
      const { cancer, risk_strat, name, drugs } = result
      const regkey = (cancer === WILMS_TUMOR ? 
          makeHashKey(cancer, drugs[0].phase, risk_strat, name) : 
          makeHashKey(cancer, risk_strat, name));
      if (!regimens.hasOwnProperty(regkey)) {
        regimens[regkey] = { cancer, risk_strat, regimen: name, drugs: {} };
      }
      drugs.forEach( (drug) => {
        const drugkey = makeHashKey(drug.drug);
        if( !regimens[regkey].drugs.hasOwnProperty(drugkey) ) {
          regimens[regkey].drugs[drugkey] = [];
        }
        regimens[regkey].drugs[drugkey].push({...drug });
      });
    });
    return regimens;
  }

  restructure(results) {
    const cancers =  results.map( (result) => {
      const riskStrats = result.risk_strats.map( (rs) => {
        const regimens = rs.hasOwnProperty("phases") ? rs.phases : rs.regimens;
        const riskStrat = {
          name: rs.strat_name,
          percent_total: rs.percent_total,
          inst_levels: rs.inst_levels,
          hasMultipleRegimens: regimens.length > 1
        }
        if (rs.hasOwnProperty("phases")) {
          riskStrat.phases = rs.phases;
        }
        else {
          riskStrat.regimens = rs.regimens;
        }
        return riskStrat;
      });
      return {
        name: result.cancer,
        reg_ref: result.reg_ref,
        risk_strats: riskStrats
      }
    });
    return sortObjects(cancers);
  }
}

export default CancerModel;
