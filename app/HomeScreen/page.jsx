"use client"

import axios from "axios"
import {useState,useEffect} from 'react';
import { io } from "socket.io-client";

let socket;

function HomeScreen() {

  const url = 'http://localhost:3000/api/data/update'
  const onkeyup = (e)=>{
    console.log(e.target.value);
  }

  useEffect(()=>{
    socketInitializer();    
  },[]);

  const socketInitializer = async () =>{
    await fetch(url)
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })
  }
  
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-">Create Post </button>
        </div>
        <div className="app__contentArea w-full h-full">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea type="text"   onKeyUp={onkeyup} className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
          
        </div>
    </div>    
  )
}


export default HomeScreen