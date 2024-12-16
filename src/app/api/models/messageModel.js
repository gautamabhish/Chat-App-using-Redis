import mongoose, { model, Schema } from "mongoose";


const messageSchema = new Schema({
    message : {
        type : String , 
        required : true , 

    }
})
const sendPacket = model('Msg',messageSchema)
export {sendPacket};