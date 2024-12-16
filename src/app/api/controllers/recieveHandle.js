import { sendPacket } from "../models/messageModel.js";

export default async function sendHandle(req,res){
    console.log(req.body.message);
    const message = req.body.message ;
    const newMess = new sendPacket({
        message
    })
    await newMess.save();

}
