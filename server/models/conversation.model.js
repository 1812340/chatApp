import mongoose from "mongoose"

const convasationSchema = new mongoose.Schema({
   participant:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
   }],
   message:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Message"
   }] 
   
}, {timestamps:true})

export default  mongoose.model("Conversation", convasationSchema)