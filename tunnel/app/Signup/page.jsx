"use client"
import {useState} from 'react'


function Signup(){

    const[userRegData,setUserRegData] = useState({});

    const Handlerchange =(e)=>{
        console.log(e.target.value)
        e.preventDefault();
        setUserRegData({...userRegData,[e.target.name]:e.target.value});
    }

    const signupFormSubmit = (e) =>{
        e.preventDefault();
        console.log(userRegData); 
    }
    return(
        <div>
        <div className="app__login w-full h-screen flex items-center justify-center text-center">
            <div className="app-login-content h-1/3 w-60 -mt-32">
                <form className="flex flex-col items-center justify-around"  onSubmit={signupFormSubmit}>
                    <div className="username bg-slate-200 h-8 w-full m-2 rounded-2xl">
                        <input onChange={Handlerchange} name="username" className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200 font-Quicksand" type="text"  placeholder="Username" />
                    </div>
                    <div className="email bg-slate-200 h-8 w-full m-2 rounded-2xl font-Quicksand">
                        <input onChange={Handlerchange}  name="email" className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200" type="email"  placeholder="Email" />
                    </div>
                    <div className="password bg-slate-200 h-8 w-full m-2 rounded-2xl font-Quicksand">
                        <input onChange={Handlerchange}  name="password" className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200" type="password"  placeholder="Password" />
                    </div>
                    <div className="login-btn bg-app-color w-full h-8 mt-8 flex items-center text-slate-100 font-Quicksand rounded-2xl">
                        <button className="w-full">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signup