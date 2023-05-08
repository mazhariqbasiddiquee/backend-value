const mongoose=require("mongoose")

let schema=mongoose.Schema({
    image:{type:String},
    description:{type:String},
    price:{type:String},
    category:{type:String},
    color:{type:String}

})

let productjewelary=mongoose.model("product-jewelary",schema)

module.exports={productjewelary}