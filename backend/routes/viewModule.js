const express=require('express');
const router=express.Router();
const moduleController =require('../controllers/viewModule'); 


router.get('/',moduleController.viewModule);


module.exports=router;