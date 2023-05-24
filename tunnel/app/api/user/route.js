// path for this api -> http:localhost:3000/api/code
import {dbConnect} from "@/app/Modals/db";
import UserModal from "@/app/Modals/user/user";


export async function GET(request){
    return new Response('Hello, Next js code');
}
                                                                                   

export async function POST(request){
    console.log('request in post')
    try {   
       await dbConnect();
        const dbuserModal = UserModal(request.body);
        const user = dbuserModal.save().then(()=>{
            console.log('data saved',request.body);
            new Response(user);
        })
        
    } catch (error) {
        new Response(error);
    }
}