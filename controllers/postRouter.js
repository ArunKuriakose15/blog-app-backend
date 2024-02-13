const express = require("express")
const router = express.Router()
const postModel = require("../model/postModel")

router.post("/add", async (req, res) => {
    let data = req.body
    let post = new postModel(data)
    let result = await post.save()
    res.json({
        status: "success"
    })
})

router.get("/viewall", async (req, res) => {
    let data = await postModel.find().populate("userId","name age phone address pincode email -_id").exec()
    res.json(data)
})

router.post("/viewown", async (req, res) => {
    let data= req.body
    console.log(data)
    let result = await postModel.find(data)
    res.json(result)
})


module.exports = router