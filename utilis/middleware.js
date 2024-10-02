const simplemw=(req,res,next)=>{
        console.log("middleware is hit")
        next()
    }
    const logger=(req,res,next)=>{
           console.log(`${req.url} and ${req.method}`)
           next()
        }
        module.exports={
            simplemw,logger
        }