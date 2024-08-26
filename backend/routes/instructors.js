const express =require('express')
const router = express.Router()
const {getInstructors} = require('../controllers/instructors')

router.get('/',getInstructors)

module.exports = router