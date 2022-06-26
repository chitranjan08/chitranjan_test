const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors({ origin: true }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require('../routes/router'));

module.exports = app;