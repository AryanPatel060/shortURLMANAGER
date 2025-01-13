const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    redirectionurl:{
        type : String,
        required : true
    },
    shortid:{
        type :String,
        required : true
    },
    visitHistory:[
        {
            timestamp:{type:Number}
        }
    ],
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    }
},    { timestamps: true }
)

const Shorturl = mongoose.model("Shorturls",urlSchema)

module.exports= Shorturl