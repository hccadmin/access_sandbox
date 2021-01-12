// Revealing module design pattern

import { dbInstance } from '../helpers/dbinstance';

const DBQueryer = ( () => {
  const db = dbInstance.getDB();
  const collections = {};

  const getRegimens = async(cancer) => {
    const querySnapshot = await db.collection('regimens').where('cancer', '==', cancer).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  const getAllFromDB = async (name) => {
    const querySnapshot = await db.collection(name).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  return {
    getAll: getAllFromDB,
    getRegimens: getRegimens
  }

})();

export { DBQueryer };
