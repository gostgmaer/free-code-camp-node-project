const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require("http-status-codes");
const { isValidDateStrict } = require("./helper/service");
// const { isValidDateStrict } = require("./helper/service");

const timeStampCalculation = async (req, res) => {
  try {
    const time = isValidDateStrict(req.params.time);
    if (!time.isValid()) {
      res.status(400).json({ error: "Invalid Date" });
    } else {
      res
        .status(200)
        .json({ unix: time.valueOf(), utc: time.toDate().toUTCString() });
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid Date" });
  }
};

module.exports = {
  timeStampCalculation,
};
