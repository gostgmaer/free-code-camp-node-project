const express = require("express");
const projectRoute = express.Router();

const { timeStampCalculation } = require("../controller/timeController");
const { currentIpFinder } = require("../controller/ipfinder");
const { shortenFunction,getUrlRedirect } = require("../controller/shorturl");
const { register, getusers } = require("../controller/userController");
const { createExcercise, getExcercise } = require("../controller/exercises");

projectRoute.route("/time-conversion/:time").get(timeStampCalculation);
projectRoute.route("/whoami").get(currentIpFinder);
projectRoute.route("/shorturl").post(shortenFunction);
projectRoute.route("/shorturl/:shorturl").get(getUrlRedirect);
projectRoute.route("/users").post(register);
projectRoute.route("/users").get(getusers);
projectRoute.route("/users/:_id/exercises").post(createExcercise);
projectRoute.route("/users/:_id/logs").get(getExcercise);







module.exports = projectRoute;