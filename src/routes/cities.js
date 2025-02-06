const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city_controller");

router.get("/", cityController.getCities);

module.exports = router;