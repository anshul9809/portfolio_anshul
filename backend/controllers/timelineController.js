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
const updateTimeline = expressAsyncHandler(async (req,res)=>{});
const deleteTimeline = expressAsyncHandler(async (req,res)=>{});
const getAllTimeline = expressAsyncHandler(async (req,res)=>{});

module.exports = {
    createTimeline,
    updateTimeline,
    deleteTimeline,
    getAllTimeline
};
