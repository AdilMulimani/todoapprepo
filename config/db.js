//importing node.js package of mongoose
const mongoose = require("mongoose");

//connect to Database
const  connectDb = async ()=>{
    //waiting for database to be connected
    const conn = await mongoose.connect(process.env.MONGO_URI,{

    });

    //logging to check if the database was connected
    console.log(`MongoDB connected :${conn.connection.host}`.cyan.bold)
}

module.exports = connectDb;