// Code to go here
const firebase = require('firebase');
require('firebase/firestore');
const firebaseConfig = require("./config.js");
const cancers = require("./cancers_template.json");

/*
const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json");
*/

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const cancerCollection = db.collection("cancers");

function populateCancers () {
  try {
    cancers.forEach(async function(cancer, i) {
      await cancerCollection.doc().set({ 
        name: cancer.cancer,
        risk_strats: cancer.risk_strats
      });
      console.log(++i, "cancers uploaded");
    });
  }
  catch (e) {
    console.log("ERROR:", e);
  }
}

populateCancers();
