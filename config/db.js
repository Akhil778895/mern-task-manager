const mongoose = require('mongoose');
require('dotenv').config();

const URI = "mongodb://127.0.0.1:27017/w3villa";

const connectDB = async () => {
    try {
       await mongoose.connect(URI); 
       console.log("Successfully connected to database")
    } 
    catch (error) {
        console.log("Database connection failed!!");
        process.exit(0);    
    }
}

module.exports = connectDB;