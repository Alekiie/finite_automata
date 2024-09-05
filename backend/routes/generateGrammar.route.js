const express = require("express");
const router = express.Router();
const generateGrammarController = require("../controllers/generateGrammar.controller");
router.get("/", generateGrammarController);
module.exports = router;
