const Message = require("../models/Message");
const {validateMongoDbId} = require("../utils/validateMongoDbId");

const sendMessage = async (req,res)=>{
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
}

const getAllMessages = async (req,res)=>{
    try{
        const messages = await Message.find({});
        res.status(200).json({
            success:true,
            messages
        });
    }catch(err){
        throw new Error(err?err.message:"Something went wrong");
    }
}

const deleteMessage = async (req,res)=>{
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
}

const getSingleMessage = async (req,res)=>{
    
}

module.exports = {
    sendMessage,
    getAllMessages,
    deleteMessage
}