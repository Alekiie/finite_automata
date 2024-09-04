// routes/questionsRoutes.js
const express = require("express");
const router = express.Router();
const { getGroupedQuestions } = require("../controllers/questionsData.controller");

router.get("/", getGroupedQuestions);

module.exports = router;
