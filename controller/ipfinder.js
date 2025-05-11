const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require("http-status-codes");
const { isValidDateStrict } = require("./helper/service");
// const { isValidDateStrict } = require("./helper/service");

const currentIpFinder = async (req, res) => {
  try {
    // const time = isValidDateStrict(req.params.time);
 const   header = req.ip 
    res
      .status(200)
      .json({ ipaddress : req.ip, language : req.headers["accept-language"],software:req.headers["user-agent"] });
  } catch (error) {
    res.status(500).json({ error: "Invalid" });
  }
};

module.exports = {
  currentIpFinder,
};
