
const mongoose = require("mongoose")

const {Schema} = mongoose

const postSchema =new  Schema({
    title: {type:String ,required: true},
    body :{type:String ,required: true},
    user_id:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    tag_ids:[
        {
            type:Schema.Types.ObjectId,
            required:true,
            ref:"tag"
        }
    ]
},
{
    versionKey: false,
    timestamps:true
}
)

module.exports = mongoose.model("post", postSchema)