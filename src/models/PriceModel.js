import { makeHashKey, to4decimals, sortObjects } from '../helpers/utilities';

class PriceModel {
  #sources = [
    "buyer",
    "supplier",
    "consolidated"
  ];

  /**
   * priceSource (hash): {
   *   drugName (hash): {
   *     name: "Drug name"
   *     prices: {
   *       low:
   *       med:
   *       high:
   */
  #prices = {};

  loadDrugPrices(dbPrices) {
    const sortedDrugs = sortObjects(dbPrices);
    this.#prices = this.restructure(sortedDrugs);
  }

  getPriceStructure() {
    return this.#prices;
  }

  restructure(sortedDrugs) {
    let newPrices = {} 
    this.#sources.forEach( (source) => {
      newPrices[source] = {};
      sortedDrugs.forEach( (drug) => {
        const drugHash = makeHashKey(drug.name);
        const { low, med, high } = drug.pricing[source];
        newPrices[source][drugHash] = {
          name: drug.name,
          prices: { low, med, high }
        }
      });
    });
    return newPrices;
  }
}

export default PriceModel;
