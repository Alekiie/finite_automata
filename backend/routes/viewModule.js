const express=require('express');
const router=express.Router();
const moduleController =require('../controllers/viewModule'); 


router.get('/:id',moduleController.viewModule);


module.exports=router;