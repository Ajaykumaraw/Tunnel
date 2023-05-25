// path for this api -> http:localhost:3000/api/code
import {dbConnect} from "@/app/Modals/db";
import UserModal from "../../Modals/user/user";

export async function GET(request){
    try {
        dbConnect();
        const user = await UserModal.find();
        return new Response(user);    
    } catch (error) {
        return new Response(error);
    }    
    
}
                                                                                   
//user register endpoint
export async function POST(req){
    const user = await req.json();
    console.log(user); 
    try {
       dbConnect();
       const savedUser = UserModal.create(user);
        return new Response(savedUser);
     } catch (error) {
        return new Response("in catch");
     }
}

// //user login endpoint
// export async function POST(req){
//     const user = await req.json();
//     console.log(user);
//     try {
//         dbConnect();
//         const userLogin = UserModal.findById(user.username);
//         if(!userLogin) return new Response('user not found');
//         if(user.password === userLogin.password){
//             return new Response("login successfull");    
//         }
//         return new Response("login successfull");
//     } catch (error) {
        
//     }
// }

