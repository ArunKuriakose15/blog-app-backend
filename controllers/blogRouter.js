const express = require("express")
const router = express.Router()
const signupModel = require("../model/signupModel")
const bcrypt = require("bcryptjs")

hashedPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup", async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.password

    // hashedPasswordGenerator(password).then(
    //     (hashedPassword) => {
    //         data.password = hashedPassword
    //         let signupObj = new signupModel(data)
    //         let result = signupObj.save()
    //         res.json({ status: "success" })
    //     })

    const hashedPassword = await hashedPasswordGenerator(password)
    data.password = hashedPassword
    let user =new signupModel(data)
    let result = user.save()
    res.json({
        status: "success"
    })
}
)

router.post("/signin", async (req, res) => {
    let input = req.body
    let data = await signupModel.find()
    res.json(data)
})








module.exports = router