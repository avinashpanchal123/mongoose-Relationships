const express  = require("express");
const Post = require("../models/post.model")
const route = express.Router();



route.post("", async(req, res)=>{
    try{
        const post = await Post.create(req.body)
        
        res.status(201).send(post)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})



route.get("", async(req, res)=>{
    try{
        const post = await Post.find().populate("user_id").populate("tag_ids").lean().exec();
        res.status(201).send(post)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})

route.patch("/:id", async(req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,
            req.body, {
                new:true
            })
            .lean()
            .exec();

        return res.status(201).send(post)

    }
    catch(e){
        return res.status(500).json({message:e.message, status : "failed"})
    }
})



route.delete("/:id", async(req, res)=>{
    try{
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(post)
    }
    catch(e){
        return res.status(500).json({message:e.message, status: "failed"})
    }
})




route.get("/:id", async( req, res)=>{
    try{
        const post = await Post.findById(req.params.id).populate("user_id").lean().exec();
        res.status(201).send(post)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})




module.exports = route
  