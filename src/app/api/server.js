import express from 'express';
import { Socket } from 'socket.io';
import dotenv from 'dotenv';
import  Connection from './config/db.js';
import cors from 'cors'
import {sendRoute} from './routes/sendToserveRoute.js';
dotenv.config();
Connection();

const expressServer = express();
expressServer.use(express.json())
expressServer.use(cors());
expressServer.use('/messages',sendRoute)
// const io = new Socket();

expressServer.listen(3001,()=>{
    console.log(`server listening`)
})
expressServer.get('/',(re,res)=>{
    res.json({msg : "hello"})
})
