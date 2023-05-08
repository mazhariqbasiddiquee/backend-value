const mongoose=require("mongoose")

const schema=mongoose.Schema({
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    password:{type:String,require:true},
    email:{type:String,require:true}
    
})

let userProfile=mongoose.model("user",schema)

module.exports={userProfile}