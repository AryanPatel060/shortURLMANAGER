require("dotenv").config()
const express = require("express");

const dbconnect = require("./dbconnects");
const path = require("path");
const urlroute = require("./routes/shorturlRoutes");
const loginRouter = require("./routes/loginRoutes");
const signupRouter = require("./routes/signupRouter");
const logoutRouter = require("./routes/logoutRoutes");
const cookieParser = require("cookie-parser");
const {restrictTologedinUser , checkAuth} = require("./middleware/authMiddleware")


const app = express();
const port = process.env.PORT || 8001;
dbconnect(process.env.Mongodb_URL);
// dbconnect("mongodb://127.0.0.1:27017/shortUrl");

app.set("view engine" , "ejs");  
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/signup",checkAuth ,signupRouter);
app.use("/login",checkAuth ,loginRouter);
app.use("/logout",logoutRouter)
app.use("/" ,restrictTologedinUser, urlroute);

app.listen(port ,()=>console.log("Server started at port :",port));