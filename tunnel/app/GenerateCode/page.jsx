function GenerateCode(){
    return(
        <div>
            <div className="app__generate-code h-screen w-full flex items-center justify-center">
                    <div className="app__generate-code w-2/4 h-1/2 flex justify-center ">
                         <div className="flex flex-col items-center justify-center -mt-32  " >
                             <div className="app__generate-code-btn w-64 h-12 bg-app-color rounded-3xl text-center">
                                <button className="font-Quicksand w-full h-full text-slate-100">Generate Code</button>
                            </div>
                            <div className="app__generate-code-btn w-40 h-8 mt-8 bg-app-color rounded-3xl text-center">
                                <input className="font-Quicksand w-full h-full text-slate-500 pl-8 rounded-3xl"/>
                            </div>
                         </div>
                    </div>
            </div>      
        </div>
    )
}

export default GenerateCode