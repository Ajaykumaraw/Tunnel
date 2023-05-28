"use client"

import axios from "axios"
import {useState,useEffect} from 'react';

function HomeScreen() {

  const [post,setpost] = useState('');
  const [updatedPost,setupdatedPost] = useState('');
  const getPostUrl = "/api/data";
  const postUpdateUrl = "/api/data/update"
  
  const tc = localStorage.getItem("TC");
  const sendCode = {code:tc}
  //fetch post data on page load
  useEffect(()=>{
    console.log(tc);
      axios.post(getPostUrl,sendCode).then((response)=>{
        console.log(response);
        const postd = response.data;
        setpost(postd);
      })
  },[])

  const handlechange = (e)=>{
      setupdatedPost(e.target.value);
      console.log(updatedPost.length);
      checkPostUpdate();
  }

  //auto save data if data changed
  const checkPostUpdate = () =>{
      /*check if post is updated */
      if(updatedPost.length>post.length || updatedPost.length<post.length){
        console.log("post updated");
        setpost(updatePost);
        clearTimeout();
        setTimeout(() => {
          updatePost(post); 
        }, 3000);
      }
  }

  const updatePost =(postval)=>{
    // clearInterval()
    console.log('updating post...')
    const updatedPostData = {
      code:tc,
      notes:postval,
    }
    axios.post(postUpdateUrl,updatedPostData).then((response)=>{
      console.log(response.data);
    })  
    // setInterval(() => {
    //   console.log('post updated in timeout');
    
    // }, 30000);
    
  }
  


  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-">Create Post </button>
        </div>
        <div className="app__contentArea w-full h-full">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea type="text" defaultValue={post} onChange={handlechange} className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
        </div>
    </div>    
  )
}


export default HomeScreen