//importing node.js package of express
const express = require("express");
//importing node.js package of colors
const colors = require("colors");
//importing node.js package of morgan
const morgan = require("morgan");
//importing node.js package of mongoose
const mongoose = require("mongoose")
//importing node.js package of dotenv
const dotenv = require("dotenv")
//importing node.js package of mongoose
const connectToDB= require("./config/db")

//creating an instance of express
const app = express();

//.config() helps to load env variables
dotenv.config({
    path:'./config/config.env'
});

//connecting to Database
connectToDB();

//using morgan->it is a logger and middleware
//it is used during the time of development so dev
app.use(morgan("dev"))

//these are used to parse data
app.use(express.json({}));
app.use(express.json({
    extended :true
}))

//creating a variable that stores port number
const port = 3000;

//starting server
app.listen(port,()=>
{
    console.log(`server is running on port : ${port}`.white.underline.bold)
});

//here we use route /api/todo/auth + /register from route to post register request
app.use("/api/todo/auth",require("./routes/user.js"));


