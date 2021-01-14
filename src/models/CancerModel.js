import { makeHashKey } from '../helpers/utilities';

class CancerModel {
  #cancers = [];
  #regimens = {};

  loadCancers(dbCancers, dbRegimens) {
    this.#cancers = this.restructure(dbCancers);
    this.#regimens = this.buildRegimens(dbRegimens);
  }

  getCancerNames() {
    return this.#cancers.map( (cancer) => {
      return cancer.name;
    });
  }

  getCancersFull() {
    return this.#cancers;
  }

  getRegimens() {
    return this.#regimens;
  }

  buildRegimens(results) {
    let regimens = {};
    results.forEach( (result) => {
      const { cancer, risk_strat, name, drugs } = result
      const regkey = makeHashKey(cancer, risk_strat, name);
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
        return {
          name: rs.strat_name,
          percent_total: rs.percent_total/100,
          regimens: rs.regimens
        }
      });
      return {
        name: result.cancer,
        risk_strats: riskStrats
      }
    });
    return this.sortCancers(cancers);
  }

  sortCancers(cancers) {
    cancers.sort( (cancer1, cancer2) => {
      if (cancer1.name < cancer2.name) {
        return -1;
      }
      if (cancer1.name > cancer2.name) {
        return 1;
      }
      return 0;
    });
    return cancers;
  }
}

export default CancerModel;
