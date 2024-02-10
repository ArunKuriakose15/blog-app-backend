const mongoose=require("mongoose")
const signupSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        pincode:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("users",signupSchema)