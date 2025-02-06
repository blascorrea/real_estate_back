const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property_controller");

router.get("/", propertyController.getProperties);
router.post("/", propertyController.createProperty);
router.put("/:id", propertyController.updateProperty);
router.delete("/:id", propertyController.deleteProperty);

module.exports = router;