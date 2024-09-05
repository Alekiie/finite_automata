const express = require("express");
const router = express.Router();
const { grabAndSaveResults } = require("../controllers/results.controller");

router.post("/", grabAndSaveResults);

module.exports = router;
