const Shorturl = require('../models/shorturlModel')
var randomId = require('random-id');
var len = 8;
var pattern = 'aA0'
 
async function handleGeturlFromId(req,res)
{
    // console.log("controller reached")

    const shortid = req.params.shortid
    // console.log("shortid :",shortid)
    const result = await Shorturl.findOneAndUpdate({
        shortid
    },
    {
        $push:{
            visitHistory : {
                timestamp : Date.now()
            },
        },
    });

    // console.log("result from handle geturlfromid",result)
    res.redirect(result.redirectionurl)
    // return res.status(201).json({msg : "success" ,result:result })

}

 
async function handleGetAllUrls(req,res)
{
    if(!req.user) return res.redirect("/login")
    
    const result = await Shorturl.find({createdby:req.user._id})
    // console.log(result)
    return res.render("homepage",{
        urls : result,
    })
}

async function createNewShorturl(req,res) {
    const body = req.body
    var r_id = randomId(len, pattern)
    const newurl = await Shorturl.create({
        redirectionurl:body.url,
        shortid : r_id,
        createdby:req.user._id,
    })
    // console.log(newurl)
    if(!req.user) return res.redirect("/login")
    
    const result = await Shorturl.find({createdby:req.user._id})
    // console.log(result)
    return res.render("homepage",{
        urls : result,
        newurl: newurl
    })
    // return res.render('homepage',{newurl: newurl})
    // return res.status(201).json({msg:"success" , id : r_id})
}


async function handlegetanalysis(req,res)
{
    const shortid = req.params.shortid
    const result = await Shorturl.findOne({shortid})

    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    });
}


module.exports={
    handleGeturlFromId,
    createNewShorturl,
    handleGetAllUrls,
    handlegetanalysis,
}