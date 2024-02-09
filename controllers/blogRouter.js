const express=require("express")
const router=express.Router()
const signupModel=require("../model/signupModel")

router.post("/signup",async(req,res)=>{
    let data=req.body
    let signupObj=new signupModel(data)
    let result=await signupObj.save()
    res.json({status:"success"})
})

module.exports=router