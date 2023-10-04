"use client"
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

function GenerateCode(){
    const router = useRouter();
    const [code,setCode] = useState();
    const dummycode = 'Code';
    const getCodeUrl = "/api/code";
    let userName;

    useEffect(()=>{
      userName = localStorage.getItem("username");
      },[]);

    const clickHandler = (e) =>{
        e.preventDefault();
        const data = {username:userName};
        
        axios.post(getCodeUrl,data).then((response)=>{
            if(response.data==="Please login"){
                router.push("./Login");
            }else{
                setCode(response.data);
            }
        })
    }

    return(
        <div>
            <div className="app__generate-code h-screen w-full flex items-center justify-center">
                    <div className="app__generate-code w-2/4 h-1/2 flex justify-center ">
                         <div className="flex flex-col items-center justify-center -mt-32  " >
                             <div className="app__generate-code-btn w-64 h-12 bg-app-color rounded-3xl text-center">
                                <button onClick={clickHandler} className="font-Quicksand w-full h-full text-slate-100">Generate Code</button>
                            </div>
                            <div className="app__generate-code-btn w-40 h-8 mt-8 bg-app-color rounded-3xl text-center">
                                <input value={code} defaultValue={dummycode} className="font-Quicksand w-full h-full text-slate-500 text-center rounded-3xl"/>
                            </div>
                            {code?<div className="app__code-description w-full h-12 mt-8 mx-auto 
                            text-center text-sx">
                                <p className='app__code-description-text text-sm italic font-Quicksand text-slate-500'>Code generated successfully,
                                use this code to access data on multiple screens.
                                </p>
                            </div> : ''}
                         </div>
                    </div>
            </div>      
        </div>
    )
}

export default GenerateCode