const { response } = require("express")
const Users = require("../models/usersModel")
const {
setUser,
getUser,
removeUser,
} = require("../service/auth")

async function handleLogout(req,res)
{
    const userid = req.cookies?.uid;
    removeUser(userid)
    res.clearCookie('uid')
    return res.redirect("/login")
}

module.exports={
    handleLogout,
}