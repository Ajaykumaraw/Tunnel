import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";
/*api url http://localhost:3000/api/data */

export async function POST(req){
    const user = await req.json();
    console.log(user.code);
    try {
        dbConnect();
        const tPost = await CodeModal.findOne({code:user.code});
        if(tPost){
          return new Response(tPost.notes);   
        }else{
          return new Response({status:401,data:"code not found"})
        }
    } catch (error) {
      return new Response(error);         
    }
  //  if(!user.tc) return new Response("Please login");   
  
}
