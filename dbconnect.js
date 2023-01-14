//ll
const mongoose=require("mongoose");
require('dotenv').config();


exports.connect=()=>{ 
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("throwerr")
    })
} 
