const mongoose=require("mongoose")
const signupSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:String,
        phone:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("users",signupSchema)