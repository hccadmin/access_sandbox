/*
class CancerObject {
  contents = [];

  constructor(name) {
    this.name = name;
  }

  setContents(contents) {
    this.contents = contents;
  }

  getContents() {
    return { name: this.name, contents: this.contents };
  }
}

class Regimen extends CancerObject {

}

class RiskStrat extends CancerObject {
  constructor(name, percentage) {
    super(name);
    this.percentage = percentage;
  }
}

class Cancer extends CancerObject {
}
*/

class CancerModel {
  #cancers = [];

  loadCancers(dbCancers) {
    this.#cancers = this.restructure(dbCancers);
  }

  getCancerNames() {
    return this.#cancers.map( (cancer) => {
      return cancer.name;
    });
  }

  getCancersFull() {
    return this.#cancers;
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
