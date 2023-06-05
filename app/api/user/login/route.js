import {dbConnect} from "@/app/Modals/db";
import UserModal from "../../../Modals/user/user";
//user login endpoint
export async function POST(req){
    const user = await req.json();
    console.log(user);

    try {
        /*  first connect with database and 
            then get user with username.      */
         dbConnect();
         const userLogin = await UserModal.findOne({username:[user.username]});
         console.log("User found",user);
         if(!userLogin){
             return new Response('User not found');
         }else if(user.password == userLogin.password){
                return new Response(user.username);
            
         }else{
            return new Response("Incorrect Password");
         }
    } catch (error) {
        return new Response(error);
    }
}
