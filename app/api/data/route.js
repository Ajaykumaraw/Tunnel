import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";
import { NextResponse } from "next/server";
/*api url http://localhost:3000/api/data */

export async function POST(req,res){
    const user = await req.json();
    console.log('tcode ',user.code);
    if(!user.code){
      return NextResponse.json({status:400,data:'code not provided'})
    }else{
    try {
        dbConnect();
        const tPost = await CodeModal.findOne({code:user.code});
        if(tPost){
          console.log(tPost);
          return NextResponse.json({status:400,data:tPost.notes}) 
        }else{
          return new Response({status:401,data:"code not found"})
        }
    } catch (error) {
      return new Response(error);         
    }
  }
  //  if(!user.tc) return new Response("Please login");   
  
}
