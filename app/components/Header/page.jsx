"use client"

import {CiMenuFries} from 'react-icons/ci';
import {useContext,useState,useEffect} from 'react'
import menuContext from '@/app/app_context/appContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useRef } from 'react';


function Header() {
  const router = useRouter();
  const [tc,settc] = useState('');
  const {menu,data} = useContext(menuContext);
  const [submenu,setsubMenu] = menu; 
  const [appData,setAppData] = data;
  const tCodeFromLocalStorage =  localStorage.getItem("TC");
  const tCode = useRef(tc);
      
 
  useEffect(()=>{
    tCode.current.value = tCodeFromLocalStorage;
  },[])
  
  

  const getPostUrl = "/api/data";

  const handleChange = (e) =>{
    settc(e.target.value);
  }
  
  const handalKeydown = (event)=>{
    if(event.key==='Enter'){
      const tcData = {code:tc};
      axios.post(getPostUrl,tcData).then((response)=>{
        setAppData(prev => prev = response.data)
          if(response.data.status === 401){
            alert("code not exist! retry..");
          }else{
            localStorage.setItem("TC",tc);
            router.push("./HomeScreen");
          }
      })
    }
  }

  return (
    <div className="app__header z-10 flex flex-row h-20 items-center justify-between p-8 text-app-color bg-slate-50 shadow-lg shadow-slate-200">
        <div className="app__header-code rounded-xl border-app-color text-slate-400">
            <input type="text" ref={tCode} onChange={handleChange} onKeyDown={handalKeydown}  name='Tcode' placeholder='Enter code...' 
            className='w-36 h-8 pl-8 pr-8 border rounded-xl border-amber-500 outline-0 text-current text-xs' />
        </div>
        <div className="app__header-logo w-1/4"> 
          <h1 className='font-Pacifico text-app-color text-4xl font-medium mr-8 font-light'>Tunn<span className='text-3xl font-medium text-black'>el</span> </h1>
        </div>
        <div className="app__header-menu text-2xl font-medium cursor-pointer text-app-color">
            <CiMenuFries onClick={()=> {setsubMenu(!submenu)}} className='text-2xl font-semibold'/>
        </div>
    </div>
  )
}

export default Header