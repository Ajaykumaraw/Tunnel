"use client"
import {useState} from 'react';
import Link from "next/link"
function Login(){

    const[userData, setuserData] = useState({});

    const loginClick=()=>{
        <Link href={'./GenerateCode'}></Link>
    } 

    const changeHandler = (e) =>{
        e.preventDefault();
        setuserData({...userData,[e.target.name]:e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
      
        console.log(userData);
    }
    return(
        <div>
            <div className="app__login w-full h-screen flex items-center justify-center text-center">
                <div className="app-login-content h-1/4 w-60 -mt-32">
                    <form className='flex flex-col items-center justify-around' onSubmit={submitHandler}>
                        <div className="username bg-slate-200 h-8 w-full m-4 rounded-2xl">
                            <input onChange={changeHandler} name="username" className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200 font-Quicksand" type="text"  placeholder="Username" />
                        </div>
                        <div className="password bg-slate-200 h-8 w-full mb-4 rounded-2xl font-Quicksand">
                            <input onChange={changeHandler} name="password" className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200" type="password"  placeholder="password" />
                        </div>
                        <div className="login-btn bg-app-color w-full h-8 flex items-center text-slate-100 font-Quicksand rounded-2xl">
                            <button onClick={()=>loginClick} className="w-full h-full">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login