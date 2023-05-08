const express=require("express")
const app=express()
const {sliderproduct}=require("../models/models.slider")

let sliderRoute=express.Router()


sliderRoute.get("",async(req,res)=>{
     try{
        let data=await sliderproduct.find()
        console.log(data,"ma")
        res.send(data)

     }
     catch(err)
     {
        res.send(err)
     }
})

sliderRoute.post("/add",async(req,res)=>{
   try{
      let data=await new sliderproduct(req.body)
      data.save()
      console.log(data,"ma")
      res.send(data)

   }
   catch(err)
   {
      res.send(err)
   }
})







module.exports={sliderRoute}