const express=require("express")
const data=require("./data/todo")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.get("/todo",(req,res)=>{
    const query=req.query
    console.log(query)
    if(query.status){
        const result=data.filter((item)=>item.status===query.status)
        console.log(data)
        res.status(202).send(JSON.stringify(result))
    }
    else{
        res.status(202).send(JSON.stringify(data))
    }
})
app.get("/todo/:title",(req,res)=>{
    console.log("todo")
    res.status(202).send({
        status:"success",
        data:{
            todo:data.filter((item)=>item.title===req.params.title)
        }
    })
})
//post
app.post("/todo",(req,res)=>{
      res.send(req.body)

})
//put
app.put("/todo",(req,res)=>{
     const newdata=req.body
     data[newdata.id-1]=newdata
     console.log(data)
     res.send(data)
})
app.listen(3001,()=>console.log("server is created"))