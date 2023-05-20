function HomeScreen() {
  return (
    <div className="w-5/6 mx-auto h-screen flex flex-col"> 
        <div className="app__createPost-btn w-full h-16 flex items-center">
            <button className="rounded-3xl bg-app-color text-slate-100 p-2 ml-">Create Post </button>
        </div>
        <div className="app__contentArea w-full h-full">
            <div className="app__contentArea-content w-4/5 m mx-auto h-4/5 bg-slate-200 rounded-xl">
                <textarea type="text" className="w-full m mx-auto h-full bg-slate-200 rounded-xl p-3 font-Quicksand
                  outline outline-amber-500 text-slate-800
                "/>
            </div>
        </div>
    </div>    
  )
}


export default HomeScreen