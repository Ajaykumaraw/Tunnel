import Header from "../components/Header/page"

function Login(){
    return(
        <div>
            <Header></Header>
            <div className="app__login w-full h-screen flex  justify-center text-center">
                <div className="app-login-content bg-green-100">
                    <div className="username">
                        <input type="text"  placeholder="Username" />
                    </div>
                    <div className="password">
                        <input type="text"  placeholder="password" />
                    </div>
                    <div className="login-btn">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login