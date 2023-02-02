require('dotenv').config()
const mongoose = require('mongoose')

// Database connection
function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(()=> console.log('connection established...'))
    .catch((err)=> console.log("connection failed" + " " + err.message))

}

module.exports = connectDB