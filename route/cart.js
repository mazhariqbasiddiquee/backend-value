const express=require("express")
const app=express()
const {cart}=require("../models/model.cart")
const { userRouter } = require("./user")


let cartRouter=express.Router()


cartRouter.get("",async(req,res)=>{
    let data=await cart.find()
    res.send(data)
})


cartRouter.post("/addproduct",async(req,res)=>{
    const {description}=req.body

   
        let data=await cart.findOne({description})
       
        if(data==null)
        {
            console.log("iqbal")
            let data1=await new cart(req.body)
            data1.save()
            res.send([{"process":"Product added to cart"}])
        }
        else{
            res.send([{"process":"product already in cart"}])
        }


    
   

})

cartRouter.patch("/update/:description",async (req,res)=>{
    const description=req.params.description

    const payload=req.body
    try{
    const query=await cart.findByIdAndUpdate({_id:description},payload)
    console.log(query)
    let data=await cart.find()
    res.send({"process":"successful"})


    }
    catch(err){
    console.log(err)
    res.send({"err":"something went wrong"})
    }
    })
    

    cartRouter.delete("/delete/:description",async (req,res)=>{
        const description=req.params.description
        console.log(description)
       console.log({description:description})

        try{
        const query=await cart.findByIdAndDelete({_id:description})
        console.log(query)
        res.send({"process":"successful"})
    
        }
        catch(err){
        console.log(err)
        res.send({"err":"something went wrong"})
        }
        })
        

module.exports={cartRouter}