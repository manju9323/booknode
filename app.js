const express=require("express");
//const cookieParser = require('cookie-parser');
const user=require("./routes/users");
const {connect}=require("./dbconnect");
const cors=require("cors")
    
require('dotenv').config();

const app=express()
app.use(cors())
//app.use(cookieParser());
app.use(express.json());  
app.use(express.urlencoded({extended:true})); 

app.use("/api/users",user)

//app.get('/api',(req,res)=>{res.send("welcome")})
   
   
  
app.listen(8000,()=>{ 
    connect()  
  console.log("local server connected")
})  