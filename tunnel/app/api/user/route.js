// path for this api -> http:localhost:3000/api/code
import {dbConnect} from "@/app/Modals/db";
import UserModal from "../../Modals/user/user";


export async function GET(request){
    return new Response('Hello, Next js code');
}
                                                                                   

export async function POST(request){
        const username = request.json(); 
    console.log('request in post',username)

    try {   
       await dbConnect();
       console.log('saved data',request.body.username)
      
        
    } catch (error) {
        new Response(error);
    }
}
