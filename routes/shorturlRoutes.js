const express = require("express")
const {
    handleGeturlFromId,
    createNewShorturl,
    handleGetAllUrls,
    handlegetanalysis,
} = require("../controllers/shorturlController")



const {handlegetlogin} = require("../controllers/loginController")

const router = express.Router();

router.route("/",)
    .get(handleGetAllUrls)
    .post(createNewShorturl)

router.route("/:shortid")
    .get(handleGeturlFromId)


router.route("/analytics/:shortid")
    .get(handlegetanalysis)

module.exports= router
