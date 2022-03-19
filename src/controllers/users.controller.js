const express = require("express")
const User = require("../models/user.model");
const route = express.Router()


route.post("", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      res.send(user)
  } 
    catch (e) {
      return res.status(500).json({ message: e.message, status: "failed" });
    }
  
  });

route.get("", async (req, res) => {
    try {
      const user = await User.find().lean().exec();
      res.status(200).send(user)
  } 
    catch (e) {
      return res.status(500).json({ message: e.message, status: "failed" });
    }

});


route.get("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();

        res.status(200).send(user)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


route.patch("/:id", async(req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        .lean()
        .exec();
        res.status(201).send(user)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


route.delete("/:id", async(req, res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        .lean()
        .exec();

        res.status(200).send(user)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }

})


module.exports = route;