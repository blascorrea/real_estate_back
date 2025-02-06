const express = require("express");
const router = express.Router();

const citiesRouter = require("./cities");
const countriesRouter = require("./countries");
const propertiesRouter = require("./properties");

router.use("/cities", citiesRouter);
router.use("/countries", countriesRouter);
router.use("/properties", propertiesRouter);

module.exports = router;
