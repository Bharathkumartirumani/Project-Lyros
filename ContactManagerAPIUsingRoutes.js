const express=require("express")
let data=require("./data/user")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const contactRoutes=require("./routes/ContactManagerRoutes")
app.use(contactRoutes)
app.listen(3001,()=>console.log("server is started"))