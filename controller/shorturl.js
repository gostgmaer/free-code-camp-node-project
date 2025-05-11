const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require("http-status-codes");
const { isValidDateStrict } = require("./helper/service");
// const urlShort = require("../models/urlShort");
const Url = require('../models/urlShort');
// Url
const shortid = require("shortid");
// const { isValidDateStrict } = require("./helper/service");

const shortenFunction = async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = shortid.generate();

  try {
    const existing = await Url.findOne({ originalUrl });
    if (existing) return res.json(existing);

    const newUrl = await Url.create({ originalUrl, shortCode });
    res.status(201).json({
      short_url: shortCode,
      original_url: newUrl.originalUrl,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUrlRedirect = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shorturl });
    if (url) return res.redirect(url.originalUrl);
    res.status(404).json({ error: "URL not found" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  shortenFunction,getUrlRedirect
};
