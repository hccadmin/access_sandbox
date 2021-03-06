// Revealing module design pattern

import { dbInstance } from '../helpers/dbinstance';

const DBQueryer = ( () => {
  const db = dbInstance.getDB();

  const getBsa = async(setting) => {
    const querySnapshot = await db.collection('bsa_ht_wt')
      .where('name', '==', setting).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  const getSetting = async(setting, year, diagType) => {
    year = parseInt(year);
    const querySnapshot = await db.collection(diagType)
      .where('setting', '==', setting)
      .where('year', '==', year).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  const getAllFromDB = async (name) => {
    const querySnapshot = await db.collection(name).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  return {
    getAll: getAllFromDB,
    getBsa: getBsa,
    getSetting: getSetting
  }

})();

export { DBQueryer };
