const express =require('express');
const {loginController ,registerController, testController} =require('../controllers/authController');
const {requireSignIn, isAdmin} = require('../middlewares/authMiddleware');

// Router Object
const router =express.Router();
  
//routing 
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);

//test routes
router.get('/test',requireSignIn, isAdmin,testController)

//protected Route Auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
}) 

module.exports =router;

