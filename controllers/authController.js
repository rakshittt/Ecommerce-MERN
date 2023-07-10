const { hashPassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phoneNo, address, role, secret_key } = req.body;

    // validation
    if (!name) return res.send({ message: "Name is Required" });
    if (!email) return res.send({ message: "Email is Required" });
    if (!password) return res.send({ message: "Password is Required" });
    if (!phoneNo) return res.send({ message: "Phone Number is Required" });
    if (!secret_key) return res.send({ message: "Secret Key is Required" });

    // if (!confirmPassword) return res.send({ message: "Confirm Password is Required" });
    // if (!role) return res.send({ message: "Role is Required" });

    // existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
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
      secret_key
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

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Found",
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phoneNo
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(501).send({
      success: false,
      message: "Error in Login",
      err,
    });
  }
};

const testController = async (req, res) => {
  try {
    res.send("Protected Route");
  } catch (err) {
    console.log(err);
    res.send({ err });
  }
};

const forgotPasswordController = async (req, res) => {
  try {
    const { email, secret_key, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    if (!secret_key) {
      res.status(400).send({ message: "Secret Key is required" });
    }
    // check
    const user= await userModel.findOne({email , secret_key})
    // validation
    if(!user){
      return res.status(400).send({
        success:false,
        message :"Wrong email or Secret key"
      })
    }
    const hashed =await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id ,{password :hashed})
    res.status(200).send({
      success:true,
      message:"Password Reset Successfully",
    })
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
};
