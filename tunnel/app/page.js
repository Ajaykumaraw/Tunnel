"use client"

import Image from 'next/image'
import Header from './components/Header/page'
import HomeScreen from './HomeScreen/page'
import Menu from './components/Menu/page';
import {useContext} from 'react';
import menuContext from './app_context/appContext';

export default function Home() {
    
    const menu = useContext(menuContext);
    const {submenu,setsubMenu} = menu; 
  
  return (
      <div className="app__home w-full h-screen flex text-center font-Quicksand relative">
        {submenu?<Menu/>:''}
        <div className="app__home-content h-4/5 mx-auto pt-12 text-center flex flex-col justify-around items-center">
            <div className="app__home_content-title text-center">
                <h1 className="text-8xl font-extrabold text-app-color">Eassy Ac<span className="text-black">cess</span> </h1>
            </div>
            <div className="app__home_content-desc flex text-center -mt-8">
                <h2 className="text-4xl">Seemless Data Movement <br/>accross <span className="text-app-color">multiple screen</span></h2>
            </div>
            <div className="app__home_content-searchBar">
                <div className="app__home-content-searchdiv bg-slate-200 p-2 pl-8 pr-8 w-fit rounded-3xl">
                    <h3 className="">How to use, visit the link below</h3>
                </div>
            </div>
            <div className="app__home_content-howItwork">
                  <h4 className="underline underline-offset-3 text-sky-600 cursor-pointer">How it works</h4>
            </div>
        </div>
  </div>
  )
}
