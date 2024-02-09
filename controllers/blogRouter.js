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

    hashedPasswordGenerator(password).then(
        (hashedPassword) => {
            data.password = hashedPassword
            let signupObj = new signupModel(data)
            let result = signupObj.save()
            res.json({ status: "success" })
        })
}
)








module.exports = router