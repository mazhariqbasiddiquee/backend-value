const mongoose=require("mongoose")

let schema=mongoose.Schema({
    image:{type:String},
    actualprice:{type:String},
    offprice:{type:String},
    offpercent:{type:String}

})

let sliderproduct=mongoose.model("sliderproduct",schema)

module.exports={sliderproduct}