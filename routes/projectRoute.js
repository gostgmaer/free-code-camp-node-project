const express = require("express");
const projectRoute = express.Router();

const { timeStampCalculation } = require("../controller/timeController");
const { currentIpFinder } = require("../controller/ipfinder");

projectRoute.route("/time-conversion/:time").get(timeStampCalculation);
projectRoute.route("/whoami").get(currentIpFinder);


module.exports = projectRoute;