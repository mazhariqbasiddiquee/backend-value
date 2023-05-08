const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv = require('dotenv')
require('dotenv').config()
const {slider}=require("./models/models.slider")
const {sliderRoute}=require("./route/slider")
const{productjewelaryRoute}=require("./route/route.product.jewelary")
const {userRouter}=require("./route/user")
const{cartRouter}=require("./route/cart")
const{varify}=require("../backend/middlware/middleware.user")
app.use(express.json())
const cors=require("cors")
app.use(cors())

app.get("",(req,res)=>{
    res.send("hi everyone")
})

app.use("/product",sliderRoute)
app.use("/jewelary",productjewelaryRoute)
app.use("/user",userRouter)
app.use(varify)
app.use("/cart",cartRouter)














app.listen(4500,async(err)=>{
    try{
        await mongoose.connect("mongodb+srv://mazhariqbal:iqbal@cluster0.hrvyke3.mongodb.net/Project?retryWrites=true&w=majority")
        console.log("connected to db")
    }
    catch(err)
    {
        console.log(err)
    }
})




