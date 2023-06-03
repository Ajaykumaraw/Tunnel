"use client"

import axios from "axios"
import {useState,useEffect} from 'react';
// import { Socket } from "socket.io";
import io from 'socket.io-client';

function HomeScreen() {
  
  const [post,setpost] = useState('');
  const [updatedPost,setupdatedPost] = useState('');
  const getPostUrl = "/api/data";
  const postUpdateUrl = "/api/data/update";
  
  const tc = {Tc:""};
  const sendCode = {code:tc}
  let newValu = '';

  
  //fetch post data on page load
  const updatePostRegular = () =>{
    axios.post(getPostUrl,sendCode).then((response)=>{
     // console.log(response);
      const postd = response.data;
      setpost(postd);
    })
  }

  // setInterval(() => {
  //   updatePostRegular()
  // }, 40000);   //40sec

  useEffect(()=>{
    socketInitializer();
    tc.Tc = localStorage.getItem("TC");
    // Socket.on('connect', function(){
    //   console.log('Connected to Server')
     
    // });
    console.log(tc);
  //   axios.post(getPostUrl,sendCode).then((response)=>{
  //     console.log(response);
  //     const postd = response.data;
  //     setpost(postd);
   clearInterval();
  // })
},[])



  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");
   // fetch api to conntet with socket
    socket = io();

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    });
  };












  const onkeyup = (ev) =>{
    console.log(ev.target.value);
    setpost(post=>post=ev.target.value)
    console.log(post);
  }

  // const handlechange = (e)=>{
  //     newValu = e.target.value;
  //     setupdatedPost(e.target.value);
  //     console.log("in handle change",newValu);
  //     //console.log("in handle change",updatedPost);
  //     checkPostUpdate.bind(post);
  //     checkPostUpdate.bind(updatedPost);
  //     checkPostUpdate();
  // }

  // //auto save data if data changed
  // const checkPostUpdate = () =>{
  //     /*check if post is updated */
  //     if(updatedPost.length>post.length || updatedPost.length<post.length){
  //       console.log("in check post update",newValu);
  //       setpost(newValu);
  //       clearTimeout();
  //       console.log("after update",post);
  //       updatePost.bind(post)
  //       updatePost(post); 
  //       // setTimeout(() => {
  //       //   updatePost(post); 
  //       // }, 3000);
  //     }
  // }

  // const updatePost =(post)=>{
  //   // clearInterval()
  //   console.log('updating post...')
  //   const updatedPostData = {
  //     code:tc,
  //     notes:post,
  //   }
  //   console.log("updating post",updatedPostData);
  //   axios.post(postUpdateUrl,updatedPostData).then((response)=>{
  //     console.log(response.data);
  //   })  
  //   // setInterval(() => {
  //   //   console.log('post updated in timeout');
    
  //   // }, 30000);
    
  // }
  


  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-">Create Post </button>
        </div>
        <div className="app__contentArea w-full h-full">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea type="text" defaultValue={post}  onKeyUp={onkeyup} className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
            {post}
        </div>
    </div>    
  )
}


export default HomeScreen