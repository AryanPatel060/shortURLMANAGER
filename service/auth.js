const sessionidtousermap = new Map()
const jwt = require("jsonwebtoken")
const key = "Shorturl#pvt@key"

function setUser(user)
{
    const payload = {
        _id : user._id,
        emial : user.email
    }
    return jwt.sign(payload,key)

    // sessionidtousermap.set(id,user)
}

function getUser(token)
{
    if(!token) return null;
    // console.log("getuser" , token)
    return jwt.verify(token,key);
    // return sessionidtousermap.get(id);
}

function removeUser(id)
{
    return sessionidtousermap.delete(id);
}

module.exports={
    setUser,
    getUser,
    removeUser,
}