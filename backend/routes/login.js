const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.login");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

router.post("/", controller.login);

module.exports = router;
