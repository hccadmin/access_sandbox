class CancerObject {
  contents = [];

  constructor(name) {
    this.name = name;
  }

  setContents(contents) {
    this.contents = contents;
  }

  getContents() {
    return this.contents;
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

class CancerModel {
  cancers = [];
  costs = [];

  static load(dbCancers) {
    const cm = new CancerModel();
    cm.createCancerModel(dbCancers);
  }
  
  static getCancersOnly(){
    return CancerModel.cancers.map( (cancer) => {
      return cancer.name;
    });
  }

  static getCancersFull(){
    return CancerModel.cancers;
  }

  static getCosts(){
  }

  createCancerModel(results) {
    let cancers, riskStrats, regimens;
    cancers =  results.map( (result) => {
      riskStrats = result.risk_strats.map( (rs) => {
        regimens = rs.regimens.map( (regimen) => {
          return new Regimen(regimen);
        });
        const risk = new RiskStrat(rs.strat_name, rs.percent_total/100);
        risk.setContents(regimens);
        return risk;
      });
      const cancer = new Cancer(result.cancer);
      cancer.setContents(riskStrats);
      return cancer;
    });
    CancerModel.cancers = this.sortCancers(cancers);
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

export { CancerModel }
