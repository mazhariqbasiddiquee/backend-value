const express=require("express")
const app=express()
const {productjewelary}=require("../models/models.product.jewelary")

let productjewelaryRoute=express.Router()


productjewelaryRoute.get("",async(req,res)=>{
    try{
       let data=await productjewelary.find()

       res.send(data)

    }
    catch(err)
    {
       res.send(err)
    }
})

productjewelaryRoute.get("/sort",async(req,res)=>{
      
        let {price}=req.query
        console.log(price)
    try{
        if(price=="asc")
        {
            let data=await productjewelary.find({}).sort({price:1})
            console.log("mazhar")
  
            res.send(data)
        }
        else{
            let data=await productjewelary.find({}).sort({price:-1})
            console.log("iqbal")
  
            res.send(data)

        }
       

    }
    catch(err)
    {
       res.send(err)
    }
})

productjewelaryRoute.get("/filter",async(req,res)=>{
      
    let {color}=req.query
   
try{
  
        let data=await productjewelary.find({color})

        res.send(data)


}
catch(err)
{
   res.send(err)
}
})

productjewelaryRoute.get("/pagination",async(req,res)=>{
      
    let {page,limit}=req.query
    
    let total=await productjewelary.count() 


try{
  
        let data=await productjewelary.find({}).skip(limit*(page-1)).limit(limit)
        res.set('Access-Control-Expose-Headers', 'X-Total-Count')
      res.set('X-Total-Count', total)

        res.send(data)


}
catch(err)
{
   res.send(err)
}
})

productjewelaryRoute.get("/category",async(req,res)=>{
      
    let {category}=req.query

try{
  
        let data=await productjewelary.find({category})

        res.send(data)


}
catch(err)
{
   res.send(err)
}
})



productjewelaryRoute.post("/add",async(req,res)=>{
  try{
     let data=await new productjewelary(req.body)
     data.save()
     console.log(data,"ma")
     res.send(data)

  }
  catch(err)
  {
     res.send(err)
  }
})

module.exports={productjewelaryRoute}