const mongoose =require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

const db = async()=>{
    try {
        const con = await mongoose.connect(MONGODB_URL)
        console.log(`Connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = db
