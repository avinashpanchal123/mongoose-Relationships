const mongoose = require("mongoose")
const {Schema} = mongoose


const userSchema =new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
      versionKey:false,
      timestamps:true
  });
  
  module.exports = mongoose.model("user", userSchema);