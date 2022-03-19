const express = require("express");


const app = express();
app.use(express.json());



const usersController = require("./controllers/users.controller");
const postsController = require("./controllers/posts.controller");
const tagsController = require("./controllers/tags.controllers")

app.use("/users", usersController)
app.use("/posts", postsController)
app.use("/tags", tagsController)

module.exports = app;