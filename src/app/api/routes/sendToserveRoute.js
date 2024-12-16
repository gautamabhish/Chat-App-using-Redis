import express from "express";
import sendHandle from "../controllers/recieveHandle.js";
const sendRoute = express.Router(); 
sendRoute.post('/',sendHandle)
export  {sendRoute} ;


