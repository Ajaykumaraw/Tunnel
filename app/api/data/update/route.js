import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";
import { json } from "express";


export async function POST(req){
  const postData = await req.json();
  console.log('from request',postData);

  try {
      /*  first connect with database and 
          then get user with username.      */
       dbConnect();
       const saveData = await CodeModal.findOneAndUpdate({code: postData.tc }, {$set: {notes: postData.data_}},{new: true})
       //const userLogin = await UserModal.findOne({username:[user.username]});
       console.log("User found",saveData.notes);
       return new Response(saveData.notes);
  } catch (error) {
      return new Response(error);
  }
}



















// export async function GET(req,res){
//   console.log(req,res);
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io
//   }
//   res.end()
// }