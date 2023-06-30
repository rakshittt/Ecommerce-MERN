const mongoose =require('mongoose');

const connectDB= async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${conn.connection.host}`)
    } catch(err){
        console.log(`Error in MongoDB ${err}`)
    }
}

// export default connectDB;
module.exports = connectDB;