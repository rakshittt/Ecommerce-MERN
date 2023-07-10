const express =require('express');
const {loginController ,registerController, testController,forgotPasswordController} =require('../controllers/authController');
const {requireSignIn, isAdmin} = require('../middlewares/authMiddleware');

// Router Object
const router =express.Router();
  
//routing 
//REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);

// FORGET PASSWORD || POST
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test',requireSignIn, isAdmin,testController)

//protected  UserRoute Auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
}) 


// protected AdminRoute Auth
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
}) 
module.exports =router;

