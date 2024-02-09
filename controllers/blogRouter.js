const express=require("express")
const router=express.Router()
const signupModel=require("../model/signupModel")

router.post("/signup",async(req,res)=>{
    let data=req.body
    let signupObj=new signupModel(data)
    let result=await signupObj.save()
    res.json({status:"success"})
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let data=await signupModel.find()
    res.json(data)
})

module.exports=router