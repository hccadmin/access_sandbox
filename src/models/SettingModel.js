import { makeHashKey, to4decimals } from '../helpers/utilities';

class SettingModel {
  #incidences = {};
  #bodyStats = {};

  loadSetting(dbSetting, dbBsa) {
    const { name, ...stats } = dbBsa;
    this.setting = dbSetting.setting;
    this.year = dbSetting.year;
    this.#bodyStats = stats;
    this.#incidences = this.restructure(dbSetting.incidences);
  }

  getSettingData() {
    return {
      setting: this.setting,
      year: this.year,
      incidences: this.#incidences,
      bodyStats: this.#bodyStats
    }
  }

  getIncidences() {
    return this.#incidences;
  }

  getBodyStats() {
    return this.#bodyStats;
  }

  restructure(cancers) {
    let incidences = {};
    cancers.forEach( (cancer) => {
      const { age_ranges, ...incInfo } = cancer;
      const cancerHash = makeHashKey(incInfo.cancer);
      const newRanges = this.calcIncidencePercentages(age_ranges);
      //incInfo.total = newRanges.total;
      //incInfo.age_ranges = newRanges.age_ranges;
      const merged = Object.assign({}, incInfo, newRanges);
      incidences[cancerHash] = merged;
    });
    return incidences;
  }

  calcIncidencePercentages(age_ranges) {
    let newRanges = {};
    let total = this.getIncidenceTotal(Object.values(age_ranges));
    for( const age in age_ranges ) {
      let value = 0;
  // Prevent division by 0 and NaN by first checking if both 
  // curr age range and total > 0, otherwise result = 0
      if (age_ranges[age] > 0 && total > 0) {
        value = age_ranges[age]/total;
      }
      newRanges[age] = value;
    }
    total = total;
    return { total, age_ranges: newRanges };
  }

  getIncidenceTotal(vals) {
    const total = vals.reduce( (acc, val) => {
      return acc + val;
    });
    return total;
  }

}

export default SettingModel;
