require("dotenv").config();
const express = require("express");
const cors = require("cors");

// ================================================ CREATION ===========
const app = express();
app.use(cors());
// ================================================ SERVE FRONTEND =====
app.use(express.static("../public"));

// ================================================ MIDDLEWARE =========
app.use(express.json()); // adds the json body to the request object

// ================================================ ROUTES =============
app.use("/", require("./routes/routes.js"));
app.use("login", require("./routes/routes.js"));

// ================================================ START ==============

const server = app.listen(process.env.PORT || 8080, () => {
  let name = process.env.APP_NAME;
  let port = server.address().port;
  console.log(`${name} listening on port ${port}`);
});
