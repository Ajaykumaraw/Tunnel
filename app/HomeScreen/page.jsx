"use client"

import axios from "axios"
import {useState,useEffect} from 'react';
import { useRef } from 'react';
import {useContext} from 'react'
import menuContext from '@/app/app_context/appContext';
import { getData } from "./services";





function HomeScreen() {
  const [data_,setData] = useState()
  const {menu,data} = useContext(menuContext);
  const [submenu,setsubMenu] = menu; 
  const [appData,setAppData] = data; 
  const upData = useRef(appData);
  const [isError,setIsError] = useState(false);
  let tc ;

  
  const baseUrl = 'http://localhost:3000/api/data/'
  const url = 'http://localhost:3000/api/data/update'
  const onkeyup = (e)=>{
    setData(e.target.value)
  }

  useEffect(()=>{
     tc =  localStorage.getItem("TC");
    getData(baseUrl,{code:tc}).then((res)=>  {
      if(res.status == 400){setIsError(true)}
      upData.current.value = res.data
    } )
    
    //upData.current.value = appData;
  
  },[]);


  // socket.on('connect', () => {
  //   console.log('connected')
  // })

  const socketInitializer = async () =>{
   axios.post(url,{tc,data_}).then((res)=> { 
    setAppData(res.data)
   // upData.current.value = res.data;
   })
  }
  
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        {(tc)?"":"Please provide valid code"}
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-" onClick={socketInitializer}>Create Posts </button>
        </div>
        
        <div className="app__contentArea w-full h-full flex">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea ref={upData} type="text"  onKeyUp={onkeyup} className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
            <div className=" w-1/4 m mx-auto h-1/3 outline outline-amber-500 bg-slate-200 rounded-xl">

            </div>
          
        </div>
    </div>    
  )
}


export default HomeScreen