const mongoose = require("mongoose");
const {Schema} = mongoose

const tagSchema =new Schema({
    name : { type : String, required:true}

},{
    versionKey:false,
    timestamps:true
}
)

module.exports = mongoose.model("tag", tagSchema);
