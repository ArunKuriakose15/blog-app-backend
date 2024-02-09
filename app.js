const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRoutes=require("./controllers/blogRouter")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/blog",blogRoutes)

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/blogDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.listen(3001,()=>{
    console.log("server running...")
})