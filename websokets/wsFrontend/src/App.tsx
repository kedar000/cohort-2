import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [socket , setSocket] = useState<null | WebSocket>(null)
  const [latestmessage , SetLatestmessage] = useState("");
  const [message , setMessage] = useState("");

  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8080")

    socket.onopen = ()=>{
      console.log("Connected")
      setSocket(socket)
    }

    socket.onmessage = (message)=>{
      console.log("recieved message" + message)
      SetLatestmessage(message.data);
    }
  } , [])


  if(!socket){
    return <div>
      Connecting to the socket server...
    </div>
  }



  return (
    <>
    <input  onChange={(e)=>{setMessage(e.target.value)}}/>
    
    <button onClick={()=>{
      socket.send(message)
    }}>send</button>
     {latestmessage}
    </>
  )
}

export default App
