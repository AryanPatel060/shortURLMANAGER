const Users = require("../models/usersModel")

async function handlegetsignup(req,res){
    // console.log("signup reached")
    res.render("signup")
}

async function handlesignup(req,res){
    const body = req.body
    // console.log("signup reached" , body)
    const user =await Users.create({
        username: body.username,
        email: body.email,
        password: body.password
    })

    return res.redirect("/login")
}


module.exports={
    handlegetsignup,
    handlesignup,
}