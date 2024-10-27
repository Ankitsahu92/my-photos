const testFolder = "../src/assets/marriagePhotos/haldi ceremony selected/";
const fs = require("fs");
//readFileNamesRoutes
const get = (req, res) => {
  try {
    const data = [];
    fs.readdirSync(testFolder).forEach((file) => {
      //console.log(file);
      data.push(file);
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
