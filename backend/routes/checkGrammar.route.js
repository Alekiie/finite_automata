const express = require("express");
const router = express.Router();
const {checkWordsController}=require('../controllers/checkGrammar.controller')
router.post("/", checkWordsController);
module.exports = router;