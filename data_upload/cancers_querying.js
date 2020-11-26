// Code to go here
const firebase = require('firebase');
require('firebase/firestore');
const firebaseConfig = require("./config.js");

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const cancerRef = db.collection("cancers");
const regimenRef = db.collection("regimens");

async function queryCancer(name) {
  try {
    const records = await cancerRef.where("name", "==", name).get();
    /*
    const risk_strats = records.docs[0].data().risk_strats;
    console.log(risk_strats);
    */
    process.exit(0);
  }
  catch (e) {
    console.log("ERROR:", e);
  }
}

async function queryRegimen(cancer, risk, phase) {
  try {
    const records = await regimenRef.where("cancer", "==", cancer)
                                    .where("risk_strat", "==", risk)
                                    .where("phase", "==", phase)
                                    .get();
    records.forEach( (record) => {
      console.log(record.data());
    });
    /*
    const risk_strats = records.docs[0].data().risk_strats;
    console.log(risk_strats);
    */
    process.exit(0);
  }
  catch (e) {
    console.log("ERROR:", e);
  }
}
//queryCancer("ALL");
queryRegimen("ALL", "Low Risk", "Maintenance");
