const express = require('express');
const {getAllUsers} = require("../controllers/users");
const router = express.Router();


// Route to get all users
router.get("/", getAllUsers);

module.exports = router;