const express=require("express")
const {userProfile}=require("../models/models.user")
const app=express()
let userRouter=express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')


userRouter.get("",async(req,res)=>{
    let data=await userProfile.find()
    res.send(data)
})


userRouter.post("/signin",async(req,res)=>{
    let {firstname,email,password,lastname}=req.body

    let data=await userProfile.findOne({email})
    console.log(password)

      console.log(data)
    if(data==null)
    {

    
        bcrypt.hash(password, 5, async(err, hash)=> {
            // Store hash in your password DB.
            if(hash)
            {
                let data=await userProfile({firstname,lastname,email,password:hash})
                data.save()
                res.send([{"process":"registration successful"}])
               
            }
            else{
                res.send(err)
            }
           
            

        });
        
    }
    else{
        res.send([{"process":"user already regiter"}])
    }


   
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    let data=await userProfile.findOne({email})
  
    console.log(email)
    if(data)
    {
    bcrypt.compare(password, data.password, function(err, result) {
 
        if(result)
        {
            let token=jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 360),
                userId: data._id,
                name:data.firstname
              }, 'secret');
           
            res.status(200).send([{"process":"login succesfull"},{token}])
        }
        else{
            res.status(300).send([{"process":"enter correct password"}]) 
        }
        // result == true
    });
 }
 else{
    res.status(300).send([{"process":"no user found"}])
 }
 
 
 })

module.exports={userRouter}