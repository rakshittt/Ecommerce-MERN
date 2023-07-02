const express =require('express');
const {loginController ,registerController} =require('../controllers/authController')

// Router Object
const router =express.Router();
  
//routing 
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);

module.exports =router;

