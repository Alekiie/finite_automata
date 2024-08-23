const express = require("express");
const cors = require("cors");
const Users = require("../models/UserModel");
const router = express.Router();

//get register controller
const { registerController } = require('../controllers/auth.register');

router.use(express.json());
router.use(cors());

// check if user already exists
const checkIfUserExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    await Users.findOne({ email }).then((user) => {
      user ? res.status(409).json({ message: "User already exists" }) : next();
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// ROUTES
// register
router.post("/", checkIfUserExists, registerController);


module.exports = router;
