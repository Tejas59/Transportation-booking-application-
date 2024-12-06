const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("success baby");
});

app.get("/home", (req, res) => {
  return res.status(200).send("Tejas in the house");
});

module.exports = app;
