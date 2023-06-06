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
            /* if user not found in DB return 
                user not found.
            */
             return new Response('User not found');

            /* if user found in DB,then verify 
                user password and return login successfull 
                if password matchs.
            */
         }else if(user.password == userLogin.password){
                return new Response(user.username);
            
         }else{
             /*
             if user in DB password is not matched 
             with the user provided in request body.
            */
            return new Response("Incorrect Password");
         }
    } catch (error) {
        return new Response(error);
    }
}
