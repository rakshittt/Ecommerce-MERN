const  { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

 const registerController = async (req, res) => {
  try {
    const { name, email, password, phoneNo, address, role } = req.body;

    // validation
    if (!name) return res.send({ err: "Name is Required" });
    if (!email) return res.send({ err: "Email is Required" });
    if (!password) return res.send({ err: "Password is Required" });
    if (!phoneNo) return res.send({ err: "Phone Number is Required" });
    if (!address) return res.send({ err: "Address is Required" });
    if (!role) return res.send({ err: "Role is Required" });

    // existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register, Please Login",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phoneNo,
      address,
      role,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Successfully Registered",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      err,
    });
  }
};

// LOGIN

 const loginController= async(req ,res)=>{
  try{
    const {email,password}= req.body;

    // validation
    if(!email || !password){
      return res.status(404).send({
        success :false,
        message: "Invalid email or password"  
      })
    }
    // check user
    const user= await userModel.findOne({email});
    if(!user){
      return res.status(404).send({
        success :false,
        message :'User not Found'
      })
    }

    const match = await comparePassword(password, user.password);

    if(!match){
      return res.status(200).send({
        success :false,
        message :'Invalid Password'
      })
    }

    // token
    const token= await jwt.sign({_id:user._id},process.env.JWT_SECRET ,{expiresIn :'3d'})
    res.status(200).send({
      success:true,
      message:"Login Successfully",
      user:{
        name:user.name,
        email : user.email 
      },token
    })

  }catch(err){
    console.log(err);
    res.status(501).send({
      success:false,
      message :'Error in Login',
      err
    })

  }
}

const testController= async(req,res)=>{
  try{
      res.send("Protected Route")
  }catch(err){
    console.log(err);
    res.send({err})
  }
  
}

module.exports= {registerController ,loginController, testController};