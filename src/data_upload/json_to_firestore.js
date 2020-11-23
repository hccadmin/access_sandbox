// Code to go here
const firebase = require('firebase');
require('firebase/firestore');
const firebaseConfig = require("./config.js");
const regimens = require("./regimens.json");

/*
const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json");
*/

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const regCollection = db.collection("regimens");

function populateRegimens () {
  try {
    regimens.forEach(async function(regimen, i) {
      await regCollection.doc().set(regimen);
      console.log(++i, "regimens uploaded");
    });
  }
  catch (e) {
    console.log("ERROR:", e);
  }
  process.exit(0);
}

populateRegimens();
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
