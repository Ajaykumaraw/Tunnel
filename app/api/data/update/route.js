import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";
import { Socket } from "socket.io";


export async function GET(req){
    // let io = Socket();
    const user = await req.json();
    Socket.on('connection', (socket)=>{
        console.log('New user connected');
      });
      Socket.on('connect', function(){
        console.log('Connected to Server')
       
      });
      Socket.on('createMessage', (newMessage)=>{
        console.log('newMessage', newMessage);
      })
}