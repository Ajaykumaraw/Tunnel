import {dbConnect} from "@/app/Modals/db";
import UserModal from "../../../Modals/user/user";

//user login endpoint
export async function POST(req){
    const user = await req.json();
    console.log(user);
    try {
         dbConnect();
         const userLogin = await UserModal.findOne({username:[user.username]});
         console.log("user found",user);
         if(!userLogin){
             return new Response('user not found');
         }else if(user.password == userLogin.password){
                return new Response('login successful');
         }else{
            return new Response('incorrect password');
         }
    } catch (error) {
        return new Response(error);
    }
}
