// automatonRoutes.js
const express = require("express");
const router = express.Router();
const automatonController = require("../controllers/playground.controller");

router.post("/", automatonController);

module.exports = router;
