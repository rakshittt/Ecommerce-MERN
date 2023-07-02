const jwt= require('jsonwebtoken');
const userModel = require('../models/userModel');

// Protected Routes token base
const requireSignIn= async (req,res ,next)=>{
    try{
        const decode= jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user= decode;
        next();

    }catch(err){
        console.log(err);
    }
 }

 // admin access

 const isAdmin = async(req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id)
        if(user.role !== 1){
        return res.status(401).send({
            success:false,
            message:"UnAuthorized Access"
          
        })
        } else{
            next();
        }
        }
    catch(err){
        console.log(err);
        res.status(401).send({
           
            success:false,
            message:"Error in Admin middleware",
            err
        })
        }
 }

 module.exports= {requireSignIn, isAdmin};