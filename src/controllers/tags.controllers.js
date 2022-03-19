const expresss = require("express");
const app = require("../app");

const route = expresss.Router()

const Tag = require("../models/tag.model");
const Post = require("../models/post.model")



route.post("", async(req, res)=>{
    try{
        const tag = await Tag.create(req.body)
        
        res.status(201).send(tag)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


route.get("", async(req, res)=>{
    try{
        const tag = await Tag.find().lean().exec();

        res.status(201).send(tag)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})



route.patch("/:id", async(req, res)=>{
    try{
        const tag = await Tag.findByIdAndUpdate(req.params.id,
            req.body,{
                new:true
            })
            .lean()
            .exec();
            res.status(201).send(tag)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
    
})


route.delete("/:id",async (req, res)=>{
    try{
        const tag = Tag.findByIdAndDelete(req.params.id,{
            new : true
        })
        .lean()
        .exec();

        res.status(201).send(tag)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})


route.get("/:id/posts", async(req, res)=>{
    try{
        const tag = await Tag.findById(req.params.id).lean().exec()
      const post = await Post.find({tag_ids : tag._id}).populate("tag_ids")
      .lean()
      .exec()
      res.status(201).send(post);
    }  
    catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" });
      }
})

module.exports = route;