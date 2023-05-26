import {dbConnect} from "@/app/Modals/db";
import UserModal from "../../../Modals/user/user";

//user login endpoint
export async function POST(req){
    const user = await req.json();
    console.log(user);
    try {
         dbConnect();
         const userLogin = UserModal.findById(user.username);
        // if(!userLogin) return new Response('user not found');
        // if(user.password === userLogin.password){
        //     return new Response("login successfull");    
        // }
         return new Response(userLogin);
    } catch (error) {
        return new Response(error);
    }
}
