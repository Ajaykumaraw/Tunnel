// path for this api -> http:localhost:3000/api/code
// import dbConnect from "@/app/Modals/db";
// import UserModal from "@/app/Modals/user/user";


export async function GET(request){
    return new Response('Hello, Next js code');
}
                                                                                   

export async function POST(request){
    // try {
    //  await dbConnect();
    //     const user = new UserModal(request.body);
    //    await user.save().then(()=>{
    //         new Response(user);
    //     })
        
    // } catch (error) {
    //     new Response(error);
    // }
    
   return new Response(request.body);
}