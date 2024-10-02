const express=require("express")
// const data=require("./data/user")
const app=express()
const {paramsuser,queryuser}=require("./Controllers/contactControllers")
// app.get("/user/:username?",(req,res)=>{
//    console.log("b root")
//    console.log(req.params)
//    const params=req.params
//    if(req.params){
//        const result=data.filter((item)=>item.username===params.username)
//        res.status(200).send(JSON.stringify(result))
//    }
//    else{
//       res.status(404).send("user not found")
//    }
 
// })
// app.get("/user",(req,res)=>{
//    console.log("a root")
//    console.log(req.query)
//    const query=req.query
//    if(query.username){
//     const result=data.filter((item)=>item.username===query.username)
//     res.status(200).send(JSON.stringify(result))
//    }
//    else{
//     res.status(200).send(JSON.stringify(data))
//    }
// })
app.get("/user/:username?",paramsuser)
app.get("/user",queryuser)

app.listen(3001,()=>console.log("server ceated with localhost 3001"))