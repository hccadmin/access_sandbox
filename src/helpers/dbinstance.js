import firebase from 'firebase';
import firebaseConfig from '../firebase.config';

const dbInstance = ( () => {
  let db;

  const connect = () => {
    firebase.initializeApp(firebaseConfig);
    return firebase.firestore();
  }

  return {
    getDB: () => {
      if (!db) {
        db = connect();
      }
      return db;
    }
  }
})();

export { dbInstance };
