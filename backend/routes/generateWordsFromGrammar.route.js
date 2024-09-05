const express = require("express");
const router = express.Router();
const {
  generatedWords,
} = require("../controllers/generateWordsFromGrammar.controller");

router.post("/", generatedWords);


module.exports = router;