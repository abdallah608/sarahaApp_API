import { messageModel } from "../../../dataBase/models/messageModel/message.model.js";
import catchAsyncError from "../../../utilities/error/catchAsyncError.js";

export const sendMessage= catchAsyncError(
   async (req,res,next) => {
        let{message}=req.body
        let{id}=req.params
        let added= await messageModel.insertMany({message,messageReceiver:id})
        res.status(201).json({message:"done",added})
    }
)

export const getUserMessages = catchAsyncError(
    async (req,res,next) => {
    let id=req.userId
    if(id== undefined){return next(new appError("you should login first",404))}
    let getMessages= await messageModel.find({messageReceiver:id})
    res.status(200).json({messages:"done",getMessages})
 }   
)