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

function populateRiskStrats () {
  cancers.forEach( (cancer, i) => {
    try {
      cancer.risk_strats.forEach( async (risk_strat, j) => {
        await cancerCollection.doc(cancer.cancer)
                        .collection("risk_strats")
                        .doc()
                        .set(risk_strat)
      });
    }
    catch (e) {
      console.log("ERROR:", e);
    }
  });
}


populateRiskStrats();
/*
*/

/*
function abbreviate(str) {
  const pattern = /[!@#$%^&*()-+]/g;
  const newStr = str.replace(pattern, "");
  return newStr.split(" ").filter( el => el.length > 0).join("_").toLowerCase();
}


const id = abbreviate("Wilms Tumor High Risk All Stages Vincristine + Actinomycin D + Doxorubicin (5 Cycles)");

console.log(id);
*/

/*

data.forEach( (drug) => {
	let docName = drug.name.split(" ").map( frag => frag.toLowerCase()).join("_");
	drugs
		.doc(docName)
		.set(drug)
		.then( (docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch( (err) => {
			console.log("Error adding document: ", err);
		});
});
*/
