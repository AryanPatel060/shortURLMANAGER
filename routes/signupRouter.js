const express = require("express")
// const {handlegetlogin} = require("../controllers/loginController")
const {
    handlegetsignup,
    handlesignup,
} = require("../controllers/signupController")


const signupRouter = express.Router();

signupRouter.route("/")
    .get(handlegetsignup)
    .post(handlesignup)


module.exports= signupRouter
