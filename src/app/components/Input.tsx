'use client';
import React, { useState } from 'react'
import axios from 'axios';
const Input = () => {
    const [message ,setMessage] = useState<string>("");

    async function HandleSubmit(){
       
        
    await axios.post('http://localhost:3001/messages',{
            message
        }).then(()=>console.log('message send')).catch((err)=>console.log(err))
            
            
        

    }
  return (
    <div>
        <input type="text" onChange={(e)=>setMessage(e.target.value)} />
        <button onClick={HandleSubmit}>Send</button>
    </div>
  )
}

export default Input