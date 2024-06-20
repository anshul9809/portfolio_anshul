const expressAsyncHandler = require("express-async-handler");
const Timeline = require("../models/Timeline");

const createTimeline = expressAsyncHandler(async (req,res)=>{
    const {title, description, from, to} = req.body;
    if(!title || !description || !from || !to){
        throw new Error("Please fill all the required fields");
    }
    try{
        const newTimeline = await Timeline.create({title, description, timeline:{from, to}});
        res.status(200).json({
            success:true,
            message: "Timeline created successfully",
            newTimeline
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});
const updateTimeline = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;
    const {title, description, from, to} = req.body;
    if(!title || !description || !from || !to){
        throw new Error("Please fill all the required fields");
    }
    try{
        const timeline = await Timeline.findByIdAndUpdate(id, {title, description, timeline:{from, to}},
            {new: true, runValidators: true});
        if(!timeline){
            throw new Error("Timeline not found");
        }
        res.status(200).json({
            success:true,
            message: "Timeline updated successfully",
            timeline
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});
const deleteTimeline = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;
    try{
        const timeline = await Timeline.findByIdAndDelete(id);
        if(!timeline){
            throw new Error("Timeline not found");
        }
        res.status(200).json({
            success:true,
            message: "Timeline deleted successfully"
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});
const getAllTimeline = expressAsyncHandler(async (req,res)=>{
    try{
        const timelines = await Timeline.find().sort({createdAt: -1});
        res.status(200).json({
            success:true,
            timelines
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong")
    }
});

module.exports = {
    createTimeline,
    updateTimeline,
    deleteTimeline,
    getAllTimeline
};
