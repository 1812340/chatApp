import { asynceHandle } from "../utilities/asynceHandle.utility.js";
import { errorHandle } from "../utilities/errorHandle.utillity.js";
import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const userMessage = asynceHandle(async(req, res, next)=>{
const senderId = req.user._id;
const receiverId = req.params.receiverId;
const message = req.body.message

if (!senderId || !receiverId || !message){
    return next(new errorHandle("missing value", 400))
}

let conversation = await Conversation.findOne({
    participant :{$all :[senderId, receiverId]}
})

if(!conversation){
    conversation = await Conversation.create({
        participant : [senderId, receiverId]
    })
}

const newMessage = await Message.create({
senderId,
receiverId,
message
})

if(newMessage){
    conversation.message.push(newMessage._id)
    await conversation.save()
}

res.status(200).json({success: true, response:newMessage})
}) 

export const getMessage = asynceHandle(async(req, res, next)=>{

    const myId = req.user._id;
    const getOtherParticipantId = req.params.getOtherParticipantId

    if(!myId || !getOtherParticipantId){
        return next(new errorHandle("invalid data missing", 400))
    }
    let conversation = await Conversation.findOne({
        participant: {$all :[myId, getOtherParticipantId]}
    }).populate("message")

    res.status(200).json({
        success:true,
        response: conversation
    })
})