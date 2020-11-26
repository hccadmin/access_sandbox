const fs = require('fs');
let regimens = [];

const getJson = () => {
  fs.readFile('./all_cancer.json', 'utf8', (err, cancersJson) => {
    if (err) {
      console.log("File read failed");
      return;
    }
    try {
      const cancers = JSON.parse(cancersJson);
    }
    catch(err) {
      console.log("JSON conversion error: ", err);
    }
  });
}

