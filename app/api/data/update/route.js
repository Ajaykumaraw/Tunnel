import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";
import { Server } from "socket.io";

export async function GET(req,res){
  console.log(req,res);
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
  }
  res.end()
}