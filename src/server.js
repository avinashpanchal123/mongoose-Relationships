
const connect = require("./configs/db");
const app = require("./app.js");


app.listen(2345, async()=>{
    await connect();
  
    console.log("listening on port 2345")
  })