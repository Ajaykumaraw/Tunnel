// path for this api -> http:localhost:3000/api/code

import { dbConnect } from "@/app/Modals/db";
import CodeModal from "@/app/Modals/code/code";


export async function GET(req){
   
    return new Response(code);
}
                                                                                   

export async function POST(req){
    const user = await req.json();
    console.log(user);
    if(!user.username) return new Response("Please login");      
    try {
        const Tcode=  Math.floor(100000 + Math.random() * 900000)
        dbConnect();
        const codeData = {
            username:user.username,
            code:Tcode,
            notes:"",
        }
        
        console.log("code data",codeData);
        const CodeModaldata = await CodeModal.create(codeData);  
        return new Response(CodeModaldata.code);     
    } catch (error) {
        return new Response(error);     
    }
   
}