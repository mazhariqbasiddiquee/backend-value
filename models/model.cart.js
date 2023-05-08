const mongoose=require("mongoose")

let schema=mongoose.Schema({
    image:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
    category:{type:String,require:true},
    color:{type:String,require:true},
    userid:{type:String,require:true},
    name:{type:String,require:true},
    count:{type:Number,require:true}

})

let cart=mongoose.model("cart",schema)

module.exports={cart}