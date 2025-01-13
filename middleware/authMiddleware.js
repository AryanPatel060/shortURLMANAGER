const {getUser} = require("../service/auth")
const jwt = require("jsonwebtoken")


async function restrictTologedinUser(req,res,next){

    const token = req.cookies?.uid;
    if (!token) {
        return res.redirect("/login");
    }
    const user = getUser(token);
    if(!user) return res.redirect("/login");
    req.user = user;
    next();
}

async function checkAuth(req,res,next){

    const token = req.cookies?.uid;
    const user = getUser(token);
    req.user = user;
    // console.log(user)
    next();
}


module.exports={
    restrictTologedinUser,
    checkAuth,
}