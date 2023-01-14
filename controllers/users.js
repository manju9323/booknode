const Usermans =require("../models/users");
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");
//require('dotenv').config();
 

//register post
register=async(req,res,next)=>{  
    try{
        var salt=bcrypt.genSaltSync(10);
        var hash=bcrypt.hashSync(req.body.password,salt)

const newuser=await new Usermans({...req.body,password:hash})
await newuser.save()
res.status(200).json({newuser})
    }
    catch(err){  
       res.send("some error occur")
    }
};

//login
login=async(req,res,next)=>{
    try{
        let payload=req.body;
        var user=await Usermans.findOne({email:payload.email})
        if(!user)
        {
            return res.send("nouuser in that mail")
        }
       
            return res.status(200).json({user})
    
    }
    catch(err){
        res.send("error")

    }
}



module.exports={register,login}