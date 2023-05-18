import Header from "../components/Header/page"

function Signup(){
    return(
        <div>
        <Header></Header>
        <div className="app__login w-full h-screen flex items-center justify-center text-center">
            <div className="app-login-content h-1/3 w-60 flex flex-col items-center justify-around -mt-32">
                <div className="username bg-slate-200 h-8 w-full rounded-2xl">
                    <input className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200 font-Quicksand" type="text"  placeholder="Username" />
                </div>
                <div className="email bg-slate-200 h-8 w-full rounded-2xl font-Quicksand">
                    <input className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200" type="email"  placeholder="Email" />
                </div>
                <div className="password bg-slate-200 h-8 w-full rounded-2xl font-Quicksand">
                    <input className="outline-0 p-1 pl-4 pt-2 w-full rounded-2xl bg-slate-200" type="password"  placeholder="Password" />
                </div>
                <div className="login-btn bg-app-color w-full h-8 mt-8 flex items-center text-slate-100 font-Quicksand rounded-2xl">
                    <button className="w-full">Signup</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup