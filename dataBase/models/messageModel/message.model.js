import mongoose from "mongoose";

const messageSchema= new mongoose.Schema({
    message:String,
    messageReceiver:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
})

export const messageModel= mongoose.model("message",messageSchema)