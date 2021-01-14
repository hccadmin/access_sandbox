import { makeHashKey } from '../helpers/utilities';

class SettingModel {
  #setting = {};

  loadSetting(dbSetting) {
    this.#setting = this.restructure(dbSetting);
  }

  restructure(results) {
  }
}

export default SettingModel;
