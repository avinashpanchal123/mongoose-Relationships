const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(
      `mongodb+srv://avinash123:avinash123@cluster0.xjpjz.mongodb.net/test`
    );
  };