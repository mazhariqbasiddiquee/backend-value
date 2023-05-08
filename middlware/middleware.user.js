var jwt = require('jsonwebtoken')

const varify=(req,res,next)=>{
    let token=req.headers.authorization

    jwt.verify(token, 'secret', function(err, decoded) {


        // bar
       if(decoded)
       {
        req.body.userid=decoded.userId
        req.body.name=decoded.name
        console.log(decoded)

        next()
       }
       else{
        res.send([{"process":"please login to proceed"}])
       }
    
      })

}


module.exports={varify}