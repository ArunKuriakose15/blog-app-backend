const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRoutes=require("./controllers/blogRouter")
const postRoutes=require("./controllers/postRouter")
const ownRoutes=require("./controllers/ownPostRouter")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/blog",blogRoutes)
app.use("/api/post",postRoutes)
app.use("/api/ownpost",ownRoutes)

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/blogDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.listen(3001,()=>{
    console.log("server running...")
})