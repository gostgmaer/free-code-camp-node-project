const express = require("express");
const projectRoute = express.Router();

const { timeStampCalculation } = require("../controller/timeController");
const { currentIpFinder } = require("../controller/ipfinder");
const { shortenFunction,getUrlRedirect } = require("../controller/shorturl");

projectRoute.route("/time-conversion/:time").get(timeStampCalculation);
projectRoute.route("/whoami").get(currentIpFinder);
projectRoute.route("/shorturl").post(shortenFunction);
projectRoute.route("/shorturl/:shorturl").get(getUrlRedirect);




module.exports = projectRoute;