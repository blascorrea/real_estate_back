const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country_controller");

router.get("/", countryController.getCountries);

module.exports = router;