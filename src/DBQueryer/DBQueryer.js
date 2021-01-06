// Revealing module design pattern

import { dbInstance } from '../helpers/dbinstance';

const DBQueryer = ( () => {
  const db = dbInstance.getDB();
  const collections = {};

  const getAllFromDB = async (name) => {
    const querySnapshot = await db.collection(name).get();
    return querySnapshot.docs.map( (doc) => doc.data() );
  }

  const getAllInCollection = async (name) => {
    if (!collections.hasOwnProperty(name)) {
      const result = await getAllFromDB(name);
      collections[name] = result;
    }
    return collections[name];
  }

  return {
    getAll: getAllInCollection
  }

})();

export { DBQueryer };
