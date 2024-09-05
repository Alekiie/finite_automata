const express = require("express");
const router = express.Router();
const {
  generatedWords,
} = require("../controllers/generateWordsFromGrammar.controller");

router.get("/", generatedWords);


module.exports = router;