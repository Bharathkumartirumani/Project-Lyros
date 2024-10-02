const express=require("express")
const app=express()
const data=require("./data/user")
const morgan =require("morgan")
app.use(morgan('dev'))
app.use(express.json())
app.use((req,res,next)=>{
    const data=req.body
    if(!data.username||!data.name){
        res.status(400).send("bad request")
    }
    else{
        next()
    }
})
app.get("/user",(req,res)=>{
    res.status(200).send({
        status:"success",
        data:{
            user:data
        }
    })
})
app.listen(3001,()=>console.log("server is started"))