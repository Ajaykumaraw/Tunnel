"use client"
import {useState} from 'react';

function GenerateCode(){

    const [code,setCode] = useState();
    const dummycode = 'Code';

    const clickHandler = (e) =>{
        e.preventDefault();
        setCode(code=> code = Math.floor(100000 + Math.random() * 900000) );
        console.log(code);
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
                                <input value={code} defaultValue={dummycode} className="font-Quicksand w-full h-full text-slate-500 pl-8 rounded-3xl"/>
                            </div>
                         </div>
                    </div>
            </div>      
        </div>
    )
}

export default GenerateCode