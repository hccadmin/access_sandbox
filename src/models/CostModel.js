class CostModel {
  #drugs = {};
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
    //console.log(prices);
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
