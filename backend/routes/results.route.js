const express = require("express");
const router = express.Router();
const { getResults } = require("../controllers/getUserResults.controller");
router.get("/", getResults);
module.exports = router;
