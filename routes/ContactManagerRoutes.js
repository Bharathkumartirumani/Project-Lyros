const express=require("express")
const router=express.Router()
const {contactDetails,user,postuser,putuser,deleteuser}=require("../Controllers/contactControllers")
router.get("/v1/contactdetails",contactDetails)
router.get("/v1/user/:username/:city?",user)
//post
router.post("/v1/user",postuser)
//put
router.put("/v1/user",putuser)
//delete
router.delete("/v1/user/:id",deleteuser)
module.exports=router