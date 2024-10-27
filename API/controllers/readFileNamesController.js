const testFolder = "../src/assets/marriagePhotos/";
const fs = require("fs");
//readFileNamesRoutes
const allFiles = [
  "haldi ceremony selected",
  "mehndi ceremony selected",
  "mundap",
  "Other",
];
const get = (req, res) => {
  try {
    const data = {
      [allFiles[0]]: [],
      [allFiles[1]]: [],
      [allFiles[2]]: [],
      [allFiles[3]]: [],
    };
    fs.readdirSync(`${testFolder}haldi ceremony selected/`).forEach((file) => {
      //console.log(file);
      data[allFiles[0]].push(file);
    });
    fs.readdirSync(`${testFolder}mehndi ceremony selected/`).forEach((file) => {
      //console.log(file);
      data[allFiles[1]].push(file);
    });
    fs.readdirSync(`${testFolder}mundap/`).forEach((file) => {
      //console.log(file);
      data[allFiles[2]].push(file);
    });
    fs.readdirSync(`${testFolder}mundap/`).forEach((file) => {
      //console.log(file);
      data[allFiles[3]].push(file);
    });
    res.send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  get,
};
