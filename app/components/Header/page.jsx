"use client"

import {CiMenuFries} from 'react-icons/ci';
import {useContext,useState,useEffect} from 'react'
import menuContext from '@/app/app_context/appContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useRef } from 'react';
import changeState from '../statechange';
import { useSelector, useDispatch } from 'react-redux'
import { updateData,storeData } from '@/slices/dataSlice';



function Header() {
  const router = useRouter();
  const [tc,settc] = useState();
  const dispatch = useDispatch()
  const appData = useSelector((state)=> state.data.value)
  // const {menu,data} = useContext(menuContext);
  // const [submenu,setsubMenu] = menu; 
  // const [appData,setAppData] = data;
  let ttc ;
  let tCodeFromLocalStorage;
  const tCode = useRef(ttc);
      
 
  useEffect(()=>{
    tCodeFromLocalStorage =  localStorage.getItem("TC");
    // settc(tCodeFromLocalStorage)
    ttc=()=>{
      tCode.current.value = tCodeFromLocalStorage;
    }
  },[])
  
  

  const getPostUrl = "/api/data";


  return (
    <div className="app__header z-10 flex flex-row h-20 items-center justify-between p-8 text-app-color bg-slate-50 shadow-lg shadow-slate-200">
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