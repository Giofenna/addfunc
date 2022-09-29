const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");
let db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log(`Auth connected to the SQlite database "webshop".`);
  }
});
router.get("/quote", function (req, res) {
  const quote_id = Math.round(Math.random() * 1547);
  db.all(
    `SELECT quote, author FROM "wellnessquotes" WHERE quote_id = ?`,
    quote_id,
    function (err, rows) {
      console.log(rows);
      if (err) {
        console.log(err);
      }
      console.log(rows);
      res.status(200).send(rows);
    }
  );
});
router.get("/", function (req, res) {
  console.log(req.body);
  res.send({ message: "send" });
});

router.post("/signup", function (req, res) {
  console.log(req);
});

router.post("/login", function (req, res) {
  console.log(req.body);
  const qry = "SELECT * FROM gebruikers WHERE email =?";
  db.all(qry, req.body.email, function (err, rows) {
    if (err) {
      console.log(err.message);
      res.status(400).json({ message: err.message });
    } else if (rows.length == 0) {
      res.status(404).json({ message: "gebruiker niet gevonden" });
    } else if (rows[0].password != req.body.password) {
      res.send({ message: "onjuist wachtwoord" });
    } else {
      const token = jwt.sign(
        { gebruiker_id: rows[0].gebruiker_id, email: rows[0].email },
        process.env.SECRET
      );
      console.log(token);
      console.log(rows[0].name);
      res.status(200).send({ token: token, name: rows[0].name });
    }
  });
});

module.exports = router;
