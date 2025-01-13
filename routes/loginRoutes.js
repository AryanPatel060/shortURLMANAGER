const express = require("express")
const {
    handleGetLogin,
    handleLogin,
} = require("../controllers/loginController")


const loginRouter = express.Router();

loginRouter.route("/")
    .get(handleGetLogin)
    .post(handleLogin)

module.exports= loginRouter
