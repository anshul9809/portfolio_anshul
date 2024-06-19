const expressAsyncHandler = require("express-async-handler");
const Message = require("../models/Message");
const {validateMongoDbId} = require("../utils/validateMongoDbId");

const sendMessage = expressAsyncHandler(async (req,res)=>{
    const {senderName, subject, message} = req.body;
    if(!senderName || !subject || !message){
        throw new Error("Please fill all the required fields");
    }
    try{
        const data = await Message.create({senderName, subject, message});
        res.json({
            success:true,
            message:"Message Sent",
            data
        });

    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});

const getAllMessages = expressAsyncHandler(async (req,res)=>{
    try{
        const messages = await Message.find({});
        res.status(200).json({
            success:true,
            messages
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});

const deleteMessage = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const deletedMessage = await Message.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Message Deleted",
            deletedMessage
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});

const getSingleMessage = expressAsyncHandler(async (req,res)=>{
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const message = await Message.findById(id);
        res.status(200).json({
            success:true,
            message
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
});

module.exports = {
    sendMessage,
    getAllMessages,
    deleteMessage,
    getSingleMessage
}