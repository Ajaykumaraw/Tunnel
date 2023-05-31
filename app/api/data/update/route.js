import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";

export async function POST(req){
    const post = await req.json();
    console.log(post.notes);
    try {
        dbConnect();
        const updatedPost = await CodeModal.findOneAndUpdate({code:post.code},{$set:{notes:post.notes}})
        return new Response(updatedPost.notes);   
    } catch (error) {
        return new Response(error);   
    }
  //  if(!user.tc) return new Response("Please login");   
  }