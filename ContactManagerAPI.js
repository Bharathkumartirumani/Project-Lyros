const express=require("express")
let data=require("./data/user")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.get("/v1/contactdetails",(req,res)=>{
    console.log("hiii")
    res.status(200).json({
        status:"sucess",
        data:{
            contacts:data,
            length:data.length
        }
    })
})
app.get("/v1/user/:username/:city?",(req,res)=>{
    const params=req.params
    let result
    if(params.city){
        result=data.filter((item)=>item.username===params.username&&item.city===params.city)
    }
    else{
       result=data.filter((item)=>item.username===params.username)
    }
    if(result.length>0){
        res.status(200).json({
            status:"success",
            data:{
                contacts:result,
                length:result.length
            }
        })
    }
    else{
        res.status(404).send("user not found")
     }
})
//post
app.post("/v1/user",(req,res)=>{
        res.send(req.body)
})
//put
app.put("/v1/user",(req,res)=>{
    const newdata=req.body
    data[newdata.id-1]=newdata
    console.log(data)
})
//delete
app.delete("/v1/user/:id",(req,res)=>{
    const params=req.params
    let result=data.filter((item)=>item.id!=params.id)
    data=result
    console.log(data)
})
app.listen(3001,()=>console.log("server created"))