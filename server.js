const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB =require('./config/db')

const app =express();

dotenv.config();

// database config
connectDB();

// res api
app.get('/',(req,res)=>{

    // res.send({  message:"Welcome to my store" })
    res.send("<h1> Welcome to My Store </h1>")

})

// use middleware
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080;

app.listen(PORT , ()=>{
    console.log(`Server is running at Port No. ${PORT}`)
})