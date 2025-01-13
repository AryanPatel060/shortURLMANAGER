const Users = require("../models/usersModel")
const {v4 : uuidv4} = require("uuid")
const {
setUser,
getUser,
} = require("../service/auth")

async function handleGetLogin(req,res){
    if(req.user) 
    {
        return res.redirect("/")
    }
    return res.render("login")
}


async function handleLogin(req, res) {
    const { email, password } = req.body;
    const user = await Users.findOne({ email,password });
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
        }

    // making session and making record of it
    // const sessionid = uuidv4();
    const token =setUser(user)
    // cookie creation of sessionid
    res.cookie('uid' , token)

    return res.redirect("/")
}

module.exports={
    handleGetLogin,
    handleLogin,
}