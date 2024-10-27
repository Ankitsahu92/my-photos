const express = require("express");
// *** ADD ***
const app = express();
const bodyParser = require("body-parser");
const readFileNamesRoutes = require("./routes/readFileNamesRoutes");
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use("/api/readFileNamesRoutes", readFileNamesRoutes);
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
