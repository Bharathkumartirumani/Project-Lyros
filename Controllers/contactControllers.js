const data=require("../data/user")
const paramsuser=(req,res)=>{
    console.log("b root")
    console.log(req.params)
    const params=req.params
    if(req.params){
        const result=data.filter((item)=>item.username===params.username)
        res.status(200).send(JSON.stringify(result))
    }
    else{
       res.status(404).send("user not found")
    }
  
 }
 const queryuser=(req,res)=>{
    console.log("a root")
    console.log(req.query)
    const query=req.query
    if(query.username){
     const result=data.filter((item)=>item.username===query.username)
     res.status(200).send(JSON.stringify(result))
    }
    else{
     res.status(200).send(JSON.stringify(data))
    }
 }
 const contactDetails=(req,res)=>{
    console.log("hiii")
    res.status(200).json({
        status:"sucess",
        data:{
            contacts:data,
            length:data.length
        }
    })
}
const user=(req,res)=>{
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
}
const postuser=(req,res)=>{
    res.send(req.body)
}
const putuser=(req,res)=>{
    const newdata=req.body
    data[newdata.id-1]=newdata
    console.log(data)
}
const deleteuser=(req,res)=>{
    const params=req.params
    let result=data.filter((item)=>item.id!=params.id)
    data=result
    console.log(data)
}
 module.exports={
    paramsuser,queryuser,contactDetails,user,user,postuser,putuser,deleteuser
 }