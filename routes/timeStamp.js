const express = require("express");
const timeStampRoute = express.Router();

const { timeStampCalculation } = require("../controller/timeController");

timeStampRoute.route("/time-conversion/:time").get(timeStampCalculation);

module.exports = timeStampRoute;