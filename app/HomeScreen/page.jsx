"use client"

import axios from "axios"
import {useState,useEffect} from 'react';
import { useRef } from 'react';
import { getData } from "./services";
import { useSelector, useDispatch } from 'react-redux'
import { storeData } from '@/slices/dataSlice';



function HomeScreen() {
  const [data_,setData] = useState()
  const appDataHome = useSelector((state)=> state.data.value)
  const isLoading = useSelector((state)=> state.data.isLoading)
  const dispatch = useDispatch()
  const [newValue,setNewValue] = useState()
  const upData = useRef(appDataHome.data);
  const [tc1,settc] = useState();
  const [isError,setIsError] = useState(false);
  let tc ;
  const tCode = useRef(tc1);
  const getPostUrl = "/api/data";
  let filterTimeout;

  

  
  const baseUrl = '/api/data/'
  const url = '/api/data/update'
  const onkeyup = (e)=>{
    console.log(e.target.value);
    setData(e.target.value)
  }

  useEffect(()=>{
     tc =  localStorage.getItem("TC");
     settc(tc)
    getData(baseUrl,{code:tc}).then((res)=>  {
      if(res.status == 400){setIsError(true)}
      upData.current.value = res.data
    } )
 
  },[]);


  const handleDataChange=(ev)=>{
    setNewValue(ev.target.value);
  }

  const handleChange = (e) =>{
    settc(e.target.value);
  }
  
  const handalKeydown = (event)=>{
    if(event.key==='Enter'){
      const tcData = {code:tc1};
      axios.post(getPostUrl,tcData).then((response)=>{
        dispatch(storeData(response.data))
        console.log(response);
        localStorage.setItem("TC",tc1);
          if(response.data.status === 401){
            alert("code not exist! retry..");
          }else{
            localStorage.setItem("TC",tc1);
          }
      })
    }
   }

  

    const doCityFilter = () => {
      clearTimeout(filterTimeout)
      filterTimeout = setTimeout(() => {
       axios.post(url,{tc1,data_}).then((res)=> { 
           dispatch(storeData(res.data))
       })
      }, 2000)
    }

   const refresHandler = () =>{
      getData(baseUrl,{code:tc1}).then((res)=>  {
        if(res.status == 400){setIsError(true)}
        setNewValue(res.data);
        upData.current.value = newValue;
      } )
   }

  const socketInitializer = async () =>{
   axios.post(url,{tc1,data_}).then((res)=> { 
   dispatch(storeData(res.data))
   })
  }
  
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        {/* {(tc)?"":"Please provide valid code"} */}
        {isLoading?<div>Loading...</div>:
        <>
          <div className="app__header-code rounded-xl border-app-color text-slate-400">
            <input type="text" ref={tCode} onChange={handleChange} onKeyDown={handalKeydown}  name='Tcode' placeholder='Enter code...' 
            className='w-36 h-8 pl-8 pr-8 border rounded-xl border-amber-500 outline-0 text-current text-xs' />
        </div>
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-" onClick={socketInitializer}>update </button>
        </div>
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-" onClick={refresHandler}>refresh </button>
        </div>
       
        <div className="app__contentArea w-full h-full flex">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea ref={upData} value={newValue}  type="text" onChange={doCityFilter}  onKeyUp={onkeyup} className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
            <div className=" w-1/4 m mx-auto h-1/3 outline outline-amber-500 bg-slate-200 rounded-xl">
              
            </div>
          
        </div>
        </>
        }
    </div>    
  )
}


export default HomeScreen