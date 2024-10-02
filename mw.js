const express=require("express")
const data=require("./data/todo")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const {simplemw,logger}=require("./utilis/middleware")
// app.use((req,res,next)=>{
//     console.log("middleware is hit")
//     next()
// })
// app.use((req,res,next)=>{
//    console.log(`${req.url} and ${req.method}`)
//    next()
// })
// app.use(simplemw)
// app.use(logger)
app.get("/todo",simplemw,logger,(req,res)=>{
    console.log("todo")
    res.status(202).send({
        status:"success",
        data:{
            todo:data
        }
    })
})

// app.get("/todo",(req,res)=>{
//     console.log("todo")
//     res.status(202).send({
//         status:"success",
//         data:{
//             todo:data
//         }
//     })
// })
app.listen(3001,()=>console.log("server is started"))
